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
  metadataBase: new URL("https://abhishek-portfolio.vercel.app"),
  title: "Abhishek Kushwah | MERN Stack Developer",
  description:
    "Portfolio of Abhishek Kushwah — MERN Stack Developer with 2+ years of experience building fast, scalable web apps with React, Next.js, TypeScript & Node.js.",
  keywords: [
    "Abhishek Kushwah",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Kushwah" }],
  icons: {
    icon: "/profilepic.png",
    apple: "/profilepic.png",
  },
  openGraph: {
    title: "Abhishek Kushwah | MERN Stack Developer",
    description:
      "MERN Stack Developer with 2+ years of experience building fast, scalable web apps.",
    type: "website",
    images: [
      {
        url: "/profilepic.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kushwah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kushwah | MERN Stack Developer",
    description:
      "MERN Stack Developer with 2+ years of experience building fast, scalable web apps.",
    images: ["/profilepic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
