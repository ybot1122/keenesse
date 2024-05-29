import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keenesse Coaching & Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
