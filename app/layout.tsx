import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Import Outfit font from Google Fonts
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "LaunchCraft: No-Code Landing Page Builder",
  description:
    "Effortlessly create beautiful, responsive landing pages without any coding skills. Start building today with LaunchCraft!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
