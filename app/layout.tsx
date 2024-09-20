import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const font = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keenesse",
  description:
    "Navigate your journey with finesse. Your first meeting is on us.",
  keywords: ["Keenesse", "coaching", "consulting", "software engineering"],
  openGraph: {
    title: "Keenesse",
    description:
      "Navigate your journey with finesse. Your first meeting is on us.",
    url: "https://www.keeness.com",
    siteName: "Keenesse",
  },
  twitter: {
    title: "Keenesse",
    description:
      "Navigate your journey with finesse. Your first meeting is on us.",
    card: "summary",
  },
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
