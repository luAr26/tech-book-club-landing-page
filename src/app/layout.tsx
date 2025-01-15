import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech book club landing page.",
  description: "Tech book club landing page coding challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${martianMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
