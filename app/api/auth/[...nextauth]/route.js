import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// import User from '@models/user';
import { connectToDB } from '@utils/database';

console.log({
  clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ], 
  async session({ session }) {

  },
  async signIn([ prfoile ]) {
    try {
      await connectToDB();
      //Check if a user exists

      //If not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }
})