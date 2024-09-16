// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { prisma } from '@/lib/db';

// Define NextAuth options
const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  strategy:'jwt',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page
    // Other custom pages if needed
  },
  callbacks: {

    async session({ token, session }) {
      if (token) {
        // Populate session object with user information from token
        session.user.id = token.id as string; // Ensure 'id' is a string
        session.user.name = token.name as string; // Ensure 'name' is a string
        session.user.email = token.email as string; // Ensure 'email' is a string
        session.user.image = token.picture as string; // Ensure 'image' is a string
        session.user.username = token.username as string; // Ensure 'username' is a string
      }
    
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Handle redirects after sign-in or sign-out
      return baseUrl; // Redirect to the base URL or home page
    },
  },
};


// Create the NextAuth handler function
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST,authOptions };
