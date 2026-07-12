import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PHProvider, PostHogPageview } from "./providers";

import { OrganizationJsonLd } from "@/components/json-ld";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nanhu Interactive | Premium iOS App Acquisitions",
    template: "%s | Nanhu Interactive"
  },
  description: "Acquire vetted, premium native iOS applications. Zero technical debt, clean Swift codebases, and ready-to-monetize StoreKit integrations starting at $5,000+.",
  metadataBase: new URL("https://nanhuinteractive.dev"), // Production custom domain
  openGraph: {
    title: "Nanhu Interactive | Premium iOS App Acquisitions",
    description: "Acquire vetted, premium native iOS applications. Zero technical debt, clean Swift codebases, and ready-to-monetize StoreKit integrations.",
    url: "https://nanhuinteractive.dev",
    siteName: "Nanhu Interactive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanhu Interactive | Premium iOS Apps",
    description: "Acquire vetted, native iOS applications with clean Swift codebases and ready-to-monetize StoreKit configurations.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full light`}
    >
      <PHProvider>
        <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-foreground">
          <PostHogPageview />
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
          <OrganizationJsonLd
            name="Nanhu Interactive"
            url="https://nanhuinteractive.dev"
            logo="https://nanhuinteractive.dev/logo.png"
          />
        </body>
      </PHProvider>
    </html>
  );
}
