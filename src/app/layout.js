import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar/Navbar";
import Footer from "./_Components/Footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Prince Mahmud Piyas",
  description:
    "Welcome to may profile. My name is Prince Mahmud Piyas. I am a full stack web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased  overflow-hidden`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
