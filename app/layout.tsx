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
  title: "BuildRadar — Get the building job before they search for anyone",
  description:
    "BuildRadar sends London tradespeople verified local building jobs straight to WhatsApp — before the homeowner has searched for anyone. £49/mo. Cancel any time.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BuildRadar — Get the job before they search",
    description:
      "Verified opportunities delivered to your WhatsApp every Friday. BuildRadar intelligence tracks development triggers across London — before homeowners start searching. Max 3 builders per area.",
    type: "website",
    url: "https://buildradar.co.uk",
    siteName: "BuildRadar",
    images: [
      {
        url: "https://buildradar.co.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildRadar — Construction Intelligence You Can Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildRadar — Get the job before they search",
    description:
      "Weekly building activity for London tradespeople. Know what's being built in your borough before anyone else.",
    images: ["https://buildradar.co.uk/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
