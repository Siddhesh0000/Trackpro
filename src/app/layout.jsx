import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <header>
          <Navbar />
        </header>
        <main role="main">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
