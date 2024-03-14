import NextAuth, { User, type NextAuthOptions } from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },

  providers: [
    CredentialsProvider({

      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@gmail.com'
        },
        password: { label: 'password', type: 'password' }
      },

      async authorize(Credentials) {
        const user = { id: 1, name: 'ewiiiii', email: 'test@test.com' }
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }