import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import LuxuryNav from "@/components/Navbar/LuxuryNav";
import Footer from "@/components/Footer/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300"],
  style: ["italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["300", "500"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liquor Garage | Mysore's Finest Spirits",
  description: "Mysore's high-end brick-and-mortar liquor retail store experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}>
        <LuxuryNav />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
