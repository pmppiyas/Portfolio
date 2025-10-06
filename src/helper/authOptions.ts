import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
    async signIn({ user }) {
      try {
        console.log("User =>", user);
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
        const result = await res.json();

        if (result.success) {
          return "/";
        }
        if (!res.ok) return false;
        return true;
      } catch (error) {
        console.error("OAuth signIn error:", error);
        return false;
      }
    },
  },
};
