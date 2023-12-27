import { addUser } from '@/service/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// 인증과 관련된 처리를 해주는 핵심이다.
export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],

  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email) {
        return false;
      }
      addUser({
        id: id,
        userid: email?.split('@')[0] || '',
        name: name || '',
        email: email,
        image: image || '',
      });
      return true;
    },
    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          userid: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

export { handler as GET, handler as POST };
