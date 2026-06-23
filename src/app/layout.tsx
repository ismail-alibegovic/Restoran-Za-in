import type { Metadata } from "next";
import { Playfair_Display, PT_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const ptSans = PT_Sans({
  variable: "--font-ptsans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restoran Začin | Sarajevo — Mediteranski & internacionalni restoran",
  description:
    "Samo stotinjak metara od samog centra grada, opustite se uz naša vrhunska jela i iznimno bogatu vinsku kartu. Restoran Začin — Tina Ujevića 13, Sarajevo.",
  keywords: [
    "Restoran Začin",
    "Začin Sarajevo",
    "restoran Sarajevo",
    "mediteranski restoran Sarajevo",
    "međunarodni restoran Sarajevo",
    "vinska karta Sarajevo",
    "Tina Ujevića 13",
  ],
  authors: [{ name: "Restoran Začin" }],
  openGraph: {
    title: "Restoran Začin | Sarajevo",
    description:
      "Vrhunska jela i iznimno bogata vinska karta u samom centru Sarajeva.",
    url: "https://restoranzacin.ba",
    siteName: "Restoran Začin",
    locale: "bs_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restoran Začin | Sarajevo",
    description:
      "Vrhunska jela i iznimno bogata vinska karta u samom centru Sarajeva.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${ptSans.variable} antialiased bg-paper text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
