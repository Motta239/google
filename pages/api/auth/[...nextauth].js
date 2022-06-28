import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FaceBookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
    FaceBookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
})
