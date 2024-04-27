import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import { serverAuth$ } from "@builder.io/qwik-auth";
import { getUser, verifyLogin } from "~/models/user.models";

import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
});

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,

    providers: [
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
        id: "credentials",
        type: "credentials",
        name: "credentials",
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials): Promise<any | null> {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const user = await verifyLogin(email, password);

          if (user === null) {
            return {
              error: "Invalid credentials",
            };
          } else {
            return user;
          }
        },
      }),
    ] as Provider[],
    callbacks: {
      async session({ session, user, token }) {
        return { ...session, role: token.role };
      },
      async jwt({ token, user }) {
        const userModel = await getUser(token.email!);
        token.role = userModel?.role;
        return token;
      },
    },
  }));
