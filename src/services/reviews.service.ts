import { Document, StrapiImage, StrapiQuery } from '@/types/strapi.types'
import { BlocksContent } from '@strapi/blocks-react-renderer'
import { getCollection } from './strapi'

export interface ReviewsData extends Document {
  stars: number
  date: string
  content: BlocksContent
  name: string
  avatar: StrapiImage
}

class ReviewsService {
  private get query() {
    return {
      populate: {
        fields: ['stars', 'date', 'name', 'content'],
        avatar: {
          populate: {
            fields: ['url', 'alternativeText']
          }
        }
      }
    } as StrapiQuery
  }

  async getReviews(): Promise<ReviewsData[]> {
    return getCollection('reviews', this.query)
  }
}

export const reviewsService = new ReviewsService()