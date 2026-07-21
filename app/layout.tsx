import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StructuredData from "@/components/seo/StructuredData";

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
  metadataBase: new URL("https://vaidikchoudhary.vercel.app"),

  title: {
    default: "Vaidik Choudhary | Full Stack Developer",
    template: "%s | Vaidik Choudhary",
  },

  description:
    "Portfolio of Vaidik Choudhary, Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, MongoDB and modern web technologies.",

  applicationName: "Vaidik Choudhary Portfolio",

  referrer: "origin-when-cross-origin",

  keywords: [
    "Vaidik Choudhary",
    "Vaidik",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "StudentOS",
    "Web Developer",
  ],

  authors: [
    {
      name: "Vaidik Choudhary",
      url: "https://vaidikchoudhary.vercel.app",
    },
  ],

  creator: "Vaidik Choudhary",

  publisher: "Vaidik Choudhary",

  alternates: {
    canonical: "https://vaidikchoudhary.vercel.app",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    url: "https://vaidikchoudhary.vercel.app",

    siteName: "Vaidik Choudhary",

    title: "Vaidik Choudhary | Full Stack Developer",

    description:
      "Portfolio of Vaidik Choudhary showcasing projects, skills and modern web development experience.",

    locale: "en_US",

    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vaidik Choudhary Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vaidik Choudhary | Full Stack Developer",

    description:
      "Portfolio of Vaidik Choudhary showcasing projects, skills and modern web development experience.",

    creator: "@vaidikhc",

    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",
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
        <StructuredData />

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