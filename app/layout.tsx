import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Vaidik Choudhary",
    template: "%s | Vaidik Choudhary",
  },

  description:
    "Full Stack Developer crafting modern, performant and beautiful web experiences.",

  keywords: [
    "Vaidik Choudhary",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Vaidik Choudhary",
    },
  ],

  creator: "Vaidik Choudhary",

  openGraph: {
    title: "Vaidik Choudhary",
    description:
      "Full Stack Developer crafting modern, performant and beautiful web experiences.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaidik Choudhary",
    description:
      "Full Stack Developer crafting modern, performant and beautiful web experiences.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}