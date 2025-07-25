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
  title: "Putra Amir - Portfolio",
  description:
    "Fresh graduate software engineer specializing in React, React Native, and modern web technologies. Building beautiful, user-friendly applications.",
  keywords: [
    "Putra Amir",
    "Software Engineer",
    "React Developer",
    "React Native",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Putra Amir" }],
  creator: "Putra Amir",
  openGraph: {
    title: "Putra Amir - Portfolio",
    description:
      "Fresh graduate software engineer specializing in React, React Native, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Putra Amir - Portfolio",
    description:
      "Fresh graduate software engineer specializing in React, React Native, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
