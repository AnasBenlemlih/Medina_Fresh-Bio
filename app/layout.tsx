import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title:
    "MEDINA Fresh & Bio | Best Fresh Juice in Fès Medina | Smoothies & Crepes",
  description:
    "Best Fresh Juice in Fès Medina. Fresh smoothies, homemade crepes, tiramisu & natural juices in the heart of Fès. Fresh Smoothies in Fès. Crepes and Juice Medina Fes. Visit us at Rue Talaa Sghira.",
  keywords: [
    "fresh juice Fès",
    "Fès Medina juice",
    "smoothies Fès",
    "crepes Fès",
    "tiramisu Fès",
    "fresh fruits Fès",
    "best juice Fès Medina",
    "natural juice Morocco",
  ],
  openGraph: {
    title: "MEDINA Fresh & Bio | Fresh Juice & Sweet Moments in Fès",
    description:
      "Natural juices, smoothies, crepes & desserts in the heart of the Medina of Fès. Fresh • Homemade • Tourist-friendly.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://medinafreshbio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <MobileCTA />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
