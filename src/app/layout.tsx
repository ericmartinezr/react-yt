import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Menu from './_components/menu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'YouTube Clone - Next.js',
  description: 'Learning project with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex flex-row min-h-screen font-[family-name:var(--font-geist-sans)]'>
          <div className='w-64 flex-initial h-full'>
            <Menu />
          </div>
          <div className='flex-1 w-full h-full'>
            <main className='w-full h-full'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
