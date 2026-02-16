import { StrapiImage } from '@/types/strapi.types'

interface BeforeAfterImages {
  images: StrapiImage[]
}

export const beforeAfterImages: BeforeAfterImages[] = [
  {
    images: [
      {
        src: "/beforeafter.jpg",
        alt: 'alt huialt'
      },
      {
        src: '/service.png',
        alt: 'alt huialt'
      }
    ]
  },
  {
    images: [
      {
        src: "/beforeafter.jpg",
        alt: 'alt huialt'
      },
      {
        src: '/service.png',
        alt: 'alt huialt'
      }
    ]
  }
]