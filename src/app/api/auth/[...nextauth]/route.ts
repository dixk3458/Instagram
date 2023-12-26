import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// 인증과 관련된 처리를 해주는 핵심이다.
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
});

export { handler as GET, handler as POST };
