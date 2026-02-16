import { StrapiImage } from './strapi.types'

export interface AboutBlockTypes {
  title: string
  content: string
  image: StrapiImage
}

export interface ServiceCard {
  image: StrapiImage
  title: string
  description: string
  list: string[]
}

export interface CalculateService {
  title: string
  slug: string
  list: string[]
  price: number
}