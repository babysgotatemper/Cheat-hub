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
  authors: [
    {
      name: 'LeetCode Local',
      url: 'https://leetcode-local.vercel.app',
    },
  ],
  creator: 'Roman Semak',
  category: 'education',
  classification: 'Education',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leetcode-local.vercel.app',
    siteName: 'LeetCode Local',
    title: 'LeetCode Local - Coding Interview Practice',
    description: 'Local LeetCode platform with JavaScript & TypeScript problems for interview prep and coding practice',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'LeetCode Local',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leetcodelocal',
    creator: '@leetcodelocal',
    title: 'LeetCode Local',
    description: 'Coding interview practice platform',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon.ico' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'LeetCode Local',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'color-scheme': 'dark light',
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
      className={`${inter.variable} ${mono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LeetCode Local" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://leetcode-local.vercel.app" />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
