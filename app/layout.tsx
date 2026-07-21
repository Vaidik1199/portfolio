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
  metadataBase: new URL("https://vaidikchoudhary.vercel.app"),

  title: {
    default: "Vaidik Choudhary | Full Stack Developer",
    template: "%s | Vaidik Choudhary",
  },

  description:
    "Portfolio of Vaidik Choudhary, a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, and modern web applications. Explore projects, skills, and experience.",

  keywords: [
    "Vaidik Choudhary",
    "Vaidik",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "StudentOS",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Vaidik Choudhary",
    },
  ],

  creator: "Vaidik Choudhary",

  publisher: "Vaidik Choudhary",

  alternates: {
    canonical: "/",
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
      "Portfolio of Vaidik Choudhary showcasing modern web development projects, skills, and experience.",
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
      "Portfolio of Vaidik Choudhary showcasing modern web development projects and skills.",
    images: ["/og.png"],
    creator: "@YOUR_X_USERNAME", // Replace with your X username
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