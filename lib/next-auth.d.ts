import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      organizationId: string | null | undefined;
      userid?: string | null | undefined | undefined;
      role?: string | null | undefined;
    };
    tokens: {
      access_token?: any | string;
      refresh_token?: any | string;
      error?: any | string;
    };
  }
}
