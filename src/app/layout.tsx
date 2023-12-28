import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import SWRConfigContext from '@/context/SWRConfigContext';
import AuthContext from '@/context/AuthContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl mx-auto">
        <AuthContext>
          <header className="sticky top-0 z-10 bg-transparent">
            <Navbar />
          </header>
          <main>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
