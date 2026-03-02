import { CalculateService } from '@/types/page.types'

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
] as const