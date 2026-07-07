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
  title: "Anoop Maurya — Full Stack Developer",
  description:
    "Anoop Maurya · Full Stack Developer with 1.6+ years building scalable web apps across SaaS, EdTech, ERP, Fintech and booking platforms. MERN, PHP, Laravel, CodeIgniter, REST APIs and CI/CD. 35+ projects delivered.",
  keywords: [
    "Anoop Maurya",
    "Full Stack Developer",
    "MERN",
    "Laravel",
    "CodeIgniter",
    "PHP",
    "Node.js",
    "REST API",
    "CI/CD",
  ],
  authors: [{ name: "Anoop Maurya" }],
  openGraph: {
    title: "Anoop Maurya — Full Stack Developer",
    description:
      "Full Stack Developer · MERN, PHP, Laravel, CodeIgniter, REST APIs & CI/CD. 35+ projects delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
