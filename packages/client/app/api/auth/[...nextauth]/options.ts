import { instance } from "@/axios/Axios";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline", // Request offline access to get refresh token
          scope:
            "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email", // Add scopes as needed
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const parsedCredentials = credentialsSchema.parse(credentials);
          const response = await instance.post(
            "/auth/login",
            parsedCredentials
          );

          if (response.status === 200 && response.data?.status === "success") {
            return {
              ...response.data.data.user,
              accessToken: response.data.token,
            };
          } else {
            console.error("Unexpected response or missing user data");
            throw new Error("Invalid credentials");
          }
        } catch (error: any) {
          console.error("Authorization error:", error.message);
          throw new Error(
            "Authentication failed. Please check your credentials and try again."
          );
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ account, user }) {
      if (account?.provider === "google") {
        try {
          const response = await instance.post("/auth/login/google", {
            token: account.id_token,
          });

          if (response.status === 200) {
            user.accessToken = response.data.token;
            user.id = response.data.data.user._id;
            user.googleId = response.data.data.user.googleId;
            user.role = response.data.data.user.role;

            return true;
          }
          console.error("Google token validation failed");
          return false; // Deny access if the response status is not 200
        } catch (error: any) {
          console.error("Google token validation error:", error.message);
          return error.message === "userNotFound" ? "/newarrival" : false;
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url === "/newarrival"
        ? `${baseUrl}/newarrival`
        : url.startsWith(baseUrl)
          ? url
          : baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as User;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
