import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leetcode-local.vercel.app'),
  title: {
    default: 'LeetCode Local',
    template: '%s | LeetCode Local',
  },
  description: 'Local LeetCode platform with JavaScript & TypeScript problems for interview prep and coding practice',
  keywords: ['leetcode', 'algorithm', 'coding', 'interview', 'javascript', 'typescript', 'dsa'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leetcode-local.vercel.app',
    siteName: 'LeetCode Local',
    title: 'LeetCode Local',
    description: 'Local LeetCode platform with JavaScript & TypeScript problems for interview prep and coding practice',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'LeetCode Local',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leetcodelocal',
    creator: '@leetcodelocal',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
