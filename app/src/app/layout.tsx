import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GeneralProvider } from "./generalprovider";
import TopNavigation from './components/top-navigation/TopNavigation'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webbshopen",
  description: "Here you can buy Items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GeneralProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopNavigation/>
        <main>{children}</main>
        </body>
      </GeneralProvider>
    </html>
  );
}
