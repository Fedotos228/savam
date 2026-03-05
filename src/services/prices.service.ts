import { ListItem, StrapiQuery } from '@/types/strapi.types'
import { getCollection } from './strapi'

export interface PricesData extends Document {
  id: number
  slug: string
  title: string
  price: number
  list: ListItem[]
}

export interface FooterServices {
  id: number
  slug: string,
  title: string,
  list: ListItem[]
}

class PricesService {
  private get PricesQuery() {
    return {
      populate: {
        fields: ['title', 'price', 'slug'],
        list: {
          fields: ['id', 'value']
        }
      }
    } as StrapiQuery
  }

  private get FooterQuery() {
    return {
      populate: {
        fields: ['title', 'slug'],
        list: {
          fields: ['id', 'value']
        }
      }
    } as StrapiQuery
  }

  async getPrices(): Promise<PricesData[]> {
    return getCollection('prices', this.PricesQuery)
  }

  async getFooterServices(): Promise<FooterServices[]> {
    return getCollection('prices', this.FooterQuery)
  }
}

export const pricesService = new PricesService()