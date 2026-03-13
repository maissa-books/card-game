import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M&M's",
  description: "An intimate game for couples",
  // description:
  //   "An intimate app for married couples with romantic stories and spicy adventures",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/heart-logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf2f8" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

import SWRegistration from "@/components/sw-registration";
import PWAInstallBanner from "@/components/pwa-install-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="M&M's" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`font-sans antialiased`}>
        <SWRegistration />
        <PWAInstallBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
