import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "@/components/shared/Navbar";
import Provider from "@/components/shared/Provider";
import { Toaster } from "@/components/ui/toaster";

const recursive = Recursive({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={recursive.className}>
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
    </ClerkProvider>
  );
}
