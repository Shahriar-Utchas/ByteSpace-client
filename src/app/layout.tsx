import type { Metadata } from "next";
import { satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "ByteSpace - Your Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} bg-white text-[#171717] antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
