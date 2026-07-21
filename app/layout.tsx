import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
  metadataBase: new URL("https://vaidikchoudhary.vercel.app/"),

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

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0d0d0d",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "14px 18px",
            },
            success: {
              iconTheme: {
                primary: "#67e8f9",
                secondary: "#050505",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#050505",
              },
            },
          }}
        />
      </body>
    </html>
  );
}