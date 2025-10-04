import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET as string,
    }),
  ],
};
