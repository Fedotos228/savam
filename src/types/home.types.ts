import { BlocksContent } from '@strapi/blocks-react-renderer'
import { StrapiImage } from './strapi.types'


export interface SectionHeadingType {
  title: string
  subtitle: string
}

export interface SectionWithHeading {
  SectionHeading: SectionHeadingType
}

export interface HeroData {
  phone: string
  SectionHeading: SectionHeadingType
}

export interface AboutBlockType {
  Title: string
  Content: BlocksContent
  Image: StrapiImage
}

export interface AboutData {
  SectionHeading: SectionHeadingType
  Block: AboutBlockType[]
}

export interface ButtonData {
  label: string
  link: string
  icon: string
  variant: string
  size: string
}

export interface BeforeAfterContact {
  title: string
  Buttons: ButtonData[]
}

export interface BeforeAfterData {
  SectionHeading: SectionHeadingType
  Contact: BeforeAfterContact
}


export interface HomeData {
  hero: HeroData
  about: AboutData
  services: SectionWithHeading
  prices: SectionWithHeading
  beforeAfter: BeforeAfterData
  reviews: SectionWithHeading
  faq: SectionWithHeading
}

