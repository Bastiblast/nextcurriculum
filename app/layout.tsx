import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Million Bastien",
  description: "Welcome to my personnal curriculum",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1.0" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white h-full w-full`}
      >
        {children}
        
      </body>
    </html>
  );
}
