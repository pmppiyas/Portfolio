import { login } from "@/action/auth";
import { ILoginResponse, IUser } from "@/types";
import {
  ExtendedAccount,
  ExtendedSession,
  ExtendedToken,
  MyNextAuthConfig,
} from "@/types/next-auth-config";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: MyNextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        },
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error("Missing credentials");
          return null;
        }

        try {
          const data: ILoginResponse = await login(credentials);

          if (!data?.success || !data?.data) {
            console.error("Invalid login:", data?.message);
            return null;
          }

          const user = {
            id: data.data.email,
            name: data.data.name,
            email: data.data.email,
            image: data.data.photo,
          };

          return user;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/error",
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user }: { user: IUser }) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              photo: user?.photo,
            }),
          }
        );

        const result = await res.json();
        if (!res.ok || !result.success) return false;
        return true;
      } catch (error) {
        console.error("OAuth signIn error:", error);
        return false;
      }
    },

    async jwt({
      token,
      account,
    }: {
      token: ExtendedToken;
      account: ExtendedAccount;
    }): Promise<ExtendedToken> {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: ExtendedToken;
    }): Promise<ExtendedSession> {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};
