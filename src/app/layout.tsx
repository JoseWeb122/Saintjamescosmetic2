import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saintjamescosmetics.com"),
  title: {
    default: "Saint James Cosmetics — Beauty from within",
    template: "%s | Saint James Cosmetics",
  },
  description:
    "Discover Saint James Cosmetics: color, skincare, bath essentials and beauty education created by Patricia Saint James for women of color.",
  applicationName: "Saint James Cosmetics",
  openGraph: {
    title: "Saint James Cosmetics — Beauty from within",
    description:
      "A personal approach to color, care, and beauty, created by Patricia Saint James in Beverly Hills.",
    type: "website",
    siteName: "Saint James Cosmetics",
    images: [{ url: "/images/saint-james-hero.png", width: 1536, height: 1024, alt: "Saint James Cosmetics beauty campaign portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saint James Cosmetics — Beauty from within",
    description:
      "Color, skincare, and beauty essentials created by Patricia Saint James.",
    images: ["/images/saint-james-hero.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
