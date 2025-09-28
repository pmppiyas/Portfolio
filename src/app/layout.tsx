import Navbar from '@/components/module/shared/Navbar';
import type { Metadata } from "next";
import { Kanit, Roboto } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Prince Mahmud Piyas",
  description: "Prince Mahmud Piyas is fullstack web developer. He can build ERP solutions.",
  keywords: ["typescript", "node.js", "express.js", "sql", "postgres", "web", "developer", "full stack", "wedsite"]
};

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
        <div>

          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}


