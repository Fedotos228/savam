import { ListItem, StrapiQuery } from '@/types/strapi.types'
import { getCollection } from './strapi'

export interface PricesData extends Document {
  id: number
  slug: string
  title: string
  price: number
  list: ListItem[]
}

class PricesService {
  private get query() {
    return {
      populate: {
        fields: ['title', 'price'],
        list: {
          fields: ['id', 'value']
        }
      }
    } as StrapiQuery
  }

  async getPrices(): Promise<PricesData[]> {
    return getCollection('prices', this.query)
  }
}

export const pricesService = new PricesService()