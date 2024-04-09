import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";
import prisma from "./../server/db";
import { createUser } from "~/models/user.models";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,

    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
      Google({
        clientId: env.get("GOOGLE_ID"),
        clientSecret: env.get("GOOGLE_SECRET"),
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
      }),
      Credentials({
        async authorize(credentials): Promise<any | null> {
          const email = credentials.email as string;
          if (!email) {
            return null;
          }

          const password = credentials.password as string;
          if (!password) {
            return null;
          }

          const exist = await prisma?.user
            .findUnique({
              where: { email },
            })
            .catch(() => {});

          if (!exist) {
            return {
              error: "User  Exists",
            };
          }

          const user = createUser(email, password);

          return user;
        },
      }),
    ] as Provider[],
  }));
