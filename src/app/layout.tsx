import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://tejasinnovations.in"),
  
  alternates: {
    canonical: "https://tejasinnovations.in",
  },

  icons: {
    icon: "/og-image.png",
  },

  title: {
    default: "Tejas Innovations | Web Development & SEO Services",
    template: "%s | Tejas Innovations",
  },

  description:
    "Tejas Innovations helps businesses grow with modern websites, SEO optimization, branding, and digital solutions that drive results.",

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

  authors: [{ name: "Tejas Innovations" }],

  openGraph: {
    title: "Tejas Innovations | Web Development & SEO Services",
    description:
      "Tejas Innovations helps businesses grow with modern websites, SEO optimization, branding, and digital solutions.",
    url: "https://tejasinnovations.in",
    siteName: "Tejas Innovations",
    images: [
      {
        url: "https://tejasinnovations.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Innovations",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tejas Innovations",
    url: "https://tejasinnovations.in",
    logo: "https://tejasinnovations.in/og-image.png",
    description:
      "Web development, SEO, branding and digital solutions for businesses.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
</body>
      <GoogleAnalytics gaId="G-V13YD6PF3K" />
    </html>
  );
}