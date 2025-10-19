import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        id: String
        sessionToken: String
        userId: String
        expires: Date
        user: JWT
    }

    interface JWT {
        id: String
        name: String
        email: String
        emailVerified: DateTime
        image: String
        accounts: any[]
        sessions: any[]
        startups: any[]
    }
}


