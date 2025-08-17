import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Aliefarfn - Portfolio",
  description: "Alief Arifin Mahardiko Portfolio as Web Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
