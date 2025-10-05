import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import toast from "react-hot-toast";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    error: "/error",
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              photo: user.image,
            }),
          }
        );

        if (!res.ok) {
          toast.error("Login failed");
          return false;
        }

        return res;
      } catch (error) {
        console.error("🔥 signIn callback error:", error);
        return false;
      }
    },
  },
};
