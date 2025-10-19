import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// import { checkIfExists } from "./actions";
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";
// import { prisma } from "./prisma";

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
});
