import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig, homepageMeta } from "@/lib/seo";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homepageMeta.title,
    template: homepageMeta.titleTemplate,
  },
  description: homepageMeta.description,
  keywords: homepageMeta.keywords,
  alternates: homepageMeta.alternates,
  openGraph: homepageMeta.openGraph,
  twitter: homepageMeta.twitter,
  robots: homepageMeta.robots,
  icons: {
    icon: [
      { url: "/logo-transparent.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo-transparent.png",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/logo-transparent.png?v=2" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo-transparent.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-transparent.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,slnt,wdth,wght,ROND@8..144,-10..0,25..150,400..700,0..100&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[var(--agaran-text-primary)] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K6MJ5K56ZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K6MJ5K56ZP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
