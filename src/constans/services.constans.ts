import { CalculateService, ServiceCard } from '@/types/page.types'

export const services: ServiceCard[] = [
  {
    image: {
      src: '/service.png',
      alt: 'Servce Image'
    },
    title: 'Wohnungs- & Hausreinigung',
    description: 'Regelmäßige oder einmalige Reinigung für private Haushalte.',
    list: ['Staubsaugen & Wischen', 'Küche & Bad', 'Flexible Termine']
  },
  {
    image: {
      src: '/service.png',
      alt: 'Servce Image'
    },
    title: 'Praxis- & Hygienereinigung',
    description: 'Hygienische Reinigung nach hohen Standards für Arztpraxen.',
    list: ['Hygienestandards', 'Desinfektion', 'Zuverlässigkeit']
  },
  {
    image: {
      src: '/service.png',
      alt: 'Servce Image'
    },
    title: 'Büro- & Gewerbereinigung',
    description: 'Professionelle Reinigung für saubere und gepflegte Arbeitsplätze.',
    list: ['Nach Geschäftsschluss', 'Regelmäßige Pflege', 'Individuelle Pläne']
  },
  {
    image: {
      src: '/service.png',
      alt: 'Servce Image'
    },
    title: 'Restaurant- & Gastronomiereinigung',
    description: 'Gründliche Reinigung für Küche, Gastraum und Sanitärbereiche.',
    list: ['HACCP-nah', 'Fett & Küche', 'Zuverlässige Zeiten']
  },
]

export const calculateService: CalculateService[] = [
  {
    title: 'Häuser & Wohnungen',
    slug: 'häuser&wohnungen',
    list: ['Wohnungsreinigung', 'Hausreinigung', 'Küche & Bad Reinigung', 'Staubsaugen & Wischen'],
    price: 20
  },
  {
    title: "Arztpraxen",
    slug: 'arztpraxen',
    list: ['Praxisreinigung', 'Hygienereinigung', 'Desinfektion von Oberflächen', 'Sanitärreinigung'],
    price: 25
  },
  {
    title: 'Büros',
    slug: 'büros',
    list: ['Büroreinigung', 'Arbeitsplatzreinigung', 'Küchen- & Pausenraumreinigung', 'Sanitärreinigung'],
    price: 25
  },
  {
    title: 'Restaurants',
    slug: 'restaurants',
    list: ['Restaurantreinigung', 'Küchenreinigung', 'Gastraumreinigung', 'Sanitärbereiche'],
    price: 25
  }
]