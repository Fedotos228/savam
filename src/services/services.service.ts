import { ListItem, StrapiImage, StrapiQuery } from '@/types/strapi.types'
import { getCollection } from './strapi'

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

  // async sendRequest(data: SelectedService[]): Promise<any> {
  //   const requests = client.collection('requests')

  //   const response = await requests.create({
  //     data: {
  //       services_list: data,
  //       status: 'pending',
  //       submittedAt: new Date().toISOString()
  //     }
  //   })

  //   if (!response.data) {
  //     throw new Error('Eroare la trimiterea cererii către Strapi')
  //   }

  //   return response
  // }
}

export const servicesService = new ServicesService()