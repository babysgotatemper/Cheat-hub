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
  metadataBase: new URL('https://cheat-hub.vercel.app'),
  title: {
    default: 'Cheat Hub',
    template: '%s | Cheat Hub',
  },
  description: 'Cheat Hub — шпаргалки та теорія для підготовки до співбесід: Architecture, React, Angular, JS/TS, Git, AI та практика LeetCode в редакторі коду.',
  keywords: ['cheatsheet', 'шпаргалка', 'співбесіда', 'interview', 'react', 'angular', 'javascript', 'typescript', 'git', 'ai', 'leetcode', 'algorithm', 'dsa', 'frontend'],
  authors: [
    {
      name: 'Cheat Hub',
      url: 'https://cheat-hub.vercel.app',
    },
  ],
  creator: 'Roman Semak',
  category: 'education',
  classification: 'Education',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://cheat-hub.vercel.app',
    siteName: 'Cheat Hub',
    title: 'Cheat Hub — шпаргалки та теорія для співбесід',
    description: 'Cheat Hub — шпаргалки та теорія для підготовки до співбесід: Architecture, React, Angular, JS/TS, Git, AI та практика LeetCode в редакторі коду.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Cheat Hub',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cheathub',
    creator: '@cheathub',
    title: 'Cheat Hub',
    description: 'Шпаргалки та теорія для підготовки до співбесід',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: [{ rel: 'icon', url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g"><stop offset="0%25" stop-color="%234f46e5"/><stop offset="100%25" stop-color="%2306b6d4"/></linearGradient></defs><rect fill="url(%23g)" width="32" height="32" rx="6"/><text x="16" y="22" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle" fill="white">&lt;/&gt;</text></svg>' }],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Cheat Hub',
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
        <meta name="apple-mobile-web-app-title" content="Cheat Hub" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://cheat-hub.vercel.app" />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
