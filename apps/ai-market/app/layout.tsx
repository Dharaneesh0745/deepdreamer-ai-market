import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Dreamer | AI Market",
  description:
    "Deep Dreamer (AI-market), this platform contains AI & ML products, where user can rent our products and Deep Dreamer have a playground facility so user can able to build their own AI modal. Users can able to use our APIs as open source (APIs are completely developed by Deep Dreamer from scratch). Visitors can also able to buy source codes from Deep Dreamer store/market, our store contains the latest cutting-edge technologies (source code). Some free source codes also available in our store. And also Deep Dreamer has Documentation page, this documentation page will guide the users to how to develop ML modals and also guide to use our source codes. (Deep Dreamer is under development)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
