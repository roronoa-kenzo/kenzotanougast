import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { fr } from "@/lib/i18n/fr";
import { getPersonJsonLd, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
  display: "swap",
});

const defaultTagline = fr.profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: defaultTagline,
  keywords: [
    "Kenzo Tanougast",
    "Fullstack Developer",
    "Freelance",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: defaultTagline,
    type: "website",
    url: siteUrl,
    locale: "fr_FR",
    images: [{ url: profile.photo }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: defaultTagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const personJsonLd = getPersonJsonLd();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${display.variable} font-sans text-wii-ink dark:text-wii-cloud`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
              <LocaleToggle />
              <ThemeToggle />
            </div>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
