import JsonLd from '@/components/json-ld'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { elmsSans } from '@/lib/font'
import type { Metadata } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://savamcleaning.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Savam Cleaning | Professionelle Reinigungsdienstleistungen Berlin",
    template: "%s | Savam Cleaning",
  },
  description: "Savam Cleaning bietet professionelle Reinigungsdienstleistungen in Berlin für Häuser, Büros, Praxen und Restaurants. Über 8 Jahre Erfahrung. Jetzt anfragen!",
  keywords: [
    "Reinigungsfirma Berlin",
    "Reinigungsservice Berlin",
    "Büroreinigung Berlin",
    "Gewerbereinigung Berlin",
    "Restaurantreinigung Berlin",
    "Gastronomiereinigung",
    "Praxisreinigung Berlin",
    "Hygienereinigung",
    "Wohnungsreinigung Berlin",
    "Hausreinigung Berlin",
    "professionelle Reinigung",
    "Savam Cleaning",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Savam Cleaning | Reinigungsdienstleistungen mit Liebe zum Detail",
    description: "Wir verwandeln Ihre Räumlichkeiten in wahre Juwelen der Reinheit. Über 8 Jahre Erfahrung in Berlin. Zuverlässige Reinigung für private und gewerbliche Kunden.",
    url: siteUrl,
    siteName: "Savam Cleaning",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Savam Cleaning – Professionelle Reinigungsdienstleistungen Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Savam Cleaning | Reinigungsdienstleistungen Berlin",
    description: "Professionelle Reinigungsdienstleistungen für Häuser, Büros, Praxen und Restaurants in Berlin.",
    images: ['/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body
        className={`${elmsSans.className} antialiased`}
      >
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
