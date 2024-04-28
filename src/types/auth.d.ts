import { DefaultSession } from "@auth/core/types";

export declare module "@auth/core/types" {
  export interface Session extends DefaultSession {
    role: string;
    expires: string;
  }
}
