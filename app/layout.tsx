
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saasverse.in"),

  title: "Salesforce Consulting & Implementation Partner | Saasverse",

  description:
    "Salesforce consulting partner with offices in Boston and Jaipur. 120+ projects for 41 clients in 19 countries. Book a free consultation.",

  verification: {
    google: "sIfd-4cZsZsFPJo_TgdZme-_a42ZpA73IBltgHuI-zE",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.saasverse.in/",
    siteName: "Saasverse",
    title: "Salesforce Consulting & Implementation Partner | Saasverse",
    description:
      "Salesforce consulting partner with offices in Boston and Jaipur. 120+ projects for 41 clients in 19 countries.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Saasverse - Salesforce Consulting and AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Salesforce Consulting & Implementation Partner | Saasverse",
    description:
      "Salesforce consulting partner with offices in Boston and Jaipur. 120+ projects for 41 clients in 19 countries.",
    images: ["/images/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GoogleTagManager gtmId="GTM-546F769K" />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

