import type { NextAuthConfig } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL("/dashboard", nextUrl));
      // }
      return true;
    },
    async jwt({ token, user }) {
      if (user && "displayName" in user) {
        token.displayName = user?.displayName;
      }

      return token;
    },
    async session({ session, token, user }) {
      if (token.displayName && "displayName" in token) {
        session.user.displayName = token.displayName;
      }

      return session;
    },
    async signIn({ account, profile }) {
      const prisma = new PrismaClient();
      if (account?.provider === "google") {
        if (profile && profile.email) {
          const user = await prisma.user.findUnique({
            where: {
              email: String(profile.email),
            },
          });

          if (!user?.displayName) {
            const generatedDisplayName = `user${uuid().replaceAll("-", "")}`;
            const updateUser = await prisma.user.update({
              where: {
                email: String(profile.email),
              },
              data: {
                displayName: generatedDisplayName,
              },
            });
          }
        }
      }

      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
