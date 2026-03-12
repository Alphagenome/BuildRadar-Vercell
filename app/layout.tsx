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
  title: "BuildRadar — Get landscaping jobs before anyone else",
  description:
    "BuildRadar sends London builders verified garden jobs straight to WhatsApp — before the homeowner has searched for anyone. £49/mo. Cancel any time.",
  openGraph: {
    title: "BuildRadar — Get the job before they search",
    description:
      "Verified garden job leads delivered to your WhatsApp every week. Max 3 builders per area. First mover advantage guaranteed.",
    type: "website",
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
