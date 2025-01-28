import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Mathan Prasanna Kumar",
  description: "Portfolio of mine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
