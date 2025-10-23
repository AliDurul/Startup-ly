import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [GitHub],
  callbacks: {
    // Called when a user signs in
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('NextAuth callback: signIn', { user, account, profile, email, credentials });
      // Allow sign in
      return true;
    },

    // Called anytime a session is checked
    async session({ session, token, user }) {
      // console.log('NextAuth callback: session', { session, token, user });
      if (token?.id && typeof token.id === 'string') {
        session.user.id = token.id;
      }
      return session;
    },

    // Called to generate or update a JWT
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('NextAuth callback: jwt', { token, user, account, profile, isNewUser });
       if (user?.id) token.id = user.id; 
      return token;
    }
    
  }
});
