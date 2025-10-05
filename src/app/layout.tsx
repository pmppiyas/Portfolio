'use client';

import { SessionProvider } from "next-auth/react";
import { Kanit, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${kanit.variable}  antialiased  overflow-hidden scroll-smooth`}
        cz-shortcut-listen="true"
      >
        <SessionProvider>
          <div className="">
            {children}
          </div>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}


