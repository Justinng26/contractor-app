import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/modules/Footer";
import NavigationLargeScreen from "@/modules/Nav/NavigationLargeScreen";
import Navigation from "@/modules/Nav/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Contractor App",
  description: "A simple contractor app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <NavigationLargeScreen />
        {children}
        <Footer />
      </body>
    </html>
  );
}
