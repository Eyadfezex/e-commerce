import { instance } from "@/axios/Axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const response = await instance.post("/users/login", {
            email: email,
            password: password,
          });

          if (response.status === 200 && response.data?.status === "success") {
            const user = response.data.data.user; // Extract user details
            const token = response.data.token; // Extract the token

            return { ...user, token };
          } else {
            console.error(
              "Authentication failed: Unexpected response status or missing user data"
            );
            return null;
          }
        } catch (error: any) {
          if (error.response) {
            console.error("Error response from API:", error.response.data);
          } else if (error.request) {
            console.error("No response received from API:", error.request);
          } else {
            console.error("Unexpected error:", error.message);
          }
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token; // Save token in JWT
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token; // Attach token to the session
      return session;
    },
  },
};
