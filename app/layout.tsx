import type { Metadata } from "next";
import { Poppins as Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Isaiah Orphanage Center",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loader />}>
        <body className={inter.className}>
          <Navbar /> {children}
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
