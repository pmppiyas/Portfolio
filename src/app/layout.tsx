import Navbar from '@/components/module/shared/Navbar';
import type { Metadata } from 'next';
import { Kanit, Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/module/shared/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
});

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Prince Mahmud Piyas',
  description: 'Fullstack Web Developer & ERP Solutions Specialist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} ${kanit.variable} antialiased bg-background text-foreground min-h-screen `}
      >
        <Navbar />

        <main className="relative w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
