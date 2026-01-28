import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "VLCS",
  description: "VLCS - Campanha Timeline",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favIcon.png" sizes="any" />
      </head>
      <body className={inter.className + "scroll-smooth antialiased"}>
        {children}
      </body>
    </html>
  );
}
