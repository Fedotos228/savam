import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { elmsSans } from '@/lib/font'
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Savam Cleaning | Professionelle Reinigungsdienstleistungen",
  description: "Savam Cleaning bietet umfassende Reinigungsdienstleistungen für Häuser, Büros, Praxen und Restaurants. Höchste Qualität, Diskretion und liebevolle Details.",
  keywords: [
    "Reinigungsfirma", 
    "Büroreinigung", 
    "Gewerbereinigung", 
    "Restaurantreinigung", 
    "Gastronomiereinigung", 
    "Praxisreinigung", 
    "Hygienereinigung", 
    "Wohnungsreinigung", 
    "Hausreinigung", 
    "Savam Cleaning"
  ],
  openGraph: {
    title: "Savam Cleaning | Reinigungsdienstleistungen mit Liebe zum Detail",
    description: "Wir verwandeln Ihre Räumlichkeiten in wahre Juwelen der Reinheit. Zuverlässige Reinigung für private und gewerbliche Kunden.",
    locale: "de_DE",
    type: "website",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
