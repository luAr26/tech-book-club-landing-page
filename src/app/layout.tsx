import type { Metadata } from "next";
import { Inter, Martian_Mono } from "next/font/google";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "600"],
  variable: "--font-inter-sans",
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
      <body
        className={`${martianMono.variable} ${`${inter.variable}`} antialiased`}
      >
        {children}
        <div className="main-bg"></div>
      </body>
    </html>
  );
}
