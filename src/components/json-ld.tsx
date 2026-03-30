const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://savamcleaning.com'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'Savam Cleaning',
    description: 'Professionelle Reinigungsdienstleistungen in Berlin für Häuser, Büros, Praxen und Restaurants. Über 8 Jahre Erfahrung.',
    url: siteUrl,
    telephone: '+491773338542',
    email: 'savamcleaning@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    areaServed: {
      '@type': 'City',
      name: 'Berlin',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100063717631957',
      'https://www.instagram.com/savamcleaning',
    ],
    priceRange: '€€',
    image: `${siteUrl}/hero.jpg`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reinigungsdienstleistungen',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Büroreinigung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wohnungsreinigung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurantreinigung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Praxisreinigung' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gewerbereinigung' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
