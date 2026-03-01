import { getCollection } from '@/api/helper'
import { Document, StrapiImage, StrapiQuery } from '@/types/strapi.types'

export interface BeforeAfterData extends Document {
  beforeImage: StrapiImage
  afterImage: StrapiImage
}

class BeforeAfterService {
  private get query() {
    return {
      populate: {
        beforeImage: {
          fields: ['url', 'alternativeText']
        },
        afterImage: {
          fields: ['url', 'alternativeText']
        }
      }
    } as StrapiQuery
  }

  async getBeforeAfter(): Promise<BeforeAfterData[]> {
    return getCollection('before-afters', this.query)
  }
}

export const beforeAfterService = new BeforeAfterService()