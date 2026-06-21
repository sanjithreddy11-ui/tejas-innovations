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
  metadataBase: new URL("https://tejasinnovation.in"),
  icons: {
    icon: "/logo.png",
  },

  title: {
    default: "Tejas Agency | Web Development & SEO Services",
    template: "%s | Tejas Agency",
  },

  description:
    "Tejas Agency helps businesses grow with modern websites, SEO optimization, branding, and digital solutions that drive results.",

  keywords: [
    "Web Development",
    "SEO Services",
    "Next.js Development",
    "React Development",
    "Digital Marketing",
    "Website Design",
    "Business Websites",
    "Portfolio Websites",
    "Tejas Innovations",
  ],

  authors: [{ name: "Tejas Agency" }],

  openGraph: {
    title: "Tejas Agency | Web Development & SEO Services",
    description:
      "Modern websites, SEO optimization, branding, and digital solutions for businesses.",
    url: "https://tejasagency.vercel.app",
    siteName: "Tejas Agency",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}