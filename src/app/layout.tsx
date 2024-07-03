import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToasterContext from "@/context/ToastContext";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartezya Bilişim Danışmanlık ve Teknoloji Hizmetleri",
  description: "Kartezya Bilişim Danışmanlık ve Teknoloji Hizmetleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Header />
        <ToasterContext />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
