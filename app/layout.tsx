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

  verification: {
    google: "sIfd-4cZsZsFPJo_TgdZme-_a42ZpA73IBltgHuI-zE",
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