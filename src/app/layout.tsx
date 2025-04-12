import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Reinhardt | Personal Trainer",
  description: "Personal Training und Online-Coaching für Muskelaufbau, Fettabbau und mehr Fitness mit individuellen und alltagstauglichen Trainings- und Ernährungsstrategien",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-16x16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-48x48.png", sizes: "48x48", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-64x64.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: light)" }
    ],
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-192x192.png", sizes: "192x192", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-512x512.png", sizes: "512x512", type: "image/png", media: "(prefers-color-scheme: light)" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
