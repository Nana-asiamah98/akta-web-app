import {
  IKeycloakResponse,
  getKeycloakAccessToken,
} from "@/services/keycloak-services";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ICustomRESTResponse } from "./interfaces";

export const authOptions: NextAuthOptions = {
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  logger: {
    error(code, metadata) {
      console.error(code, { metadata });
    },
    warn(code) {
      console.warn({ code });
    },
    debug(code, metadata) {
      console.debug(code, { metadata });
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log({ credentials });
        const { username, password }: any = credentials;
        const userInfo: ICustomRESTResponse = await getKeycloakAccessToken({
          username,
          password,
        });
        if (!userInfo?.isError) {
          console.debug("Success");
          const { data } = userInfo;
          const finalResponse: any = data;
          return finalResponse;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, account }) {
      const generatedToken: IKeycloakResponse =
        user !== undefined ? (user as any) : ({} as any);
      if (user) {
        token.access_token = generatedToken.access_token;
        token.refresh_token = generatedToken.refresh_token;

        return { ...token };
      }
      return token;
    },
    async session({ session, token }) {
      console.log({ session });
      session.tokens = {
        access_token: token?.access_token,
        refresh_token: token?.refresh_token,
      };
      return session;
    },
  },
};
