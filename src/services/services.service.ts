import { getCollection } from '@/api/helper'
import { ListItem, StrapiImage, StrapiQuery } from '@/types/strapi.types'

export interface ServiceCards extends Document {
  title: string
  description: string
  image: StrapiImage
  list: ListItem[]
}

class ServicesService {
  private get query() {
    return {
      populate: {
        fields: ['title', 'description'],
        image: { fields: ['url', 'alternativeText'] },
        list: { fields: ['id', 'value'] }
      }
    } as StrapiQuery
  }

  async getServices(): Promise<ServiceCards[]> {
    return getCollection('services', this.query)
  }
}

export const servicesService = new ServicesService()