import { BlocksContent } from '@strapi/blocks-react-renderer'
import { getCollection } from './strapi'

export interface FaqData {
  question: string,
content: BlocksContent
}

class FaqService {
  private get query() {
    return {
      populate: {
        fields: ['question', 'content']
      }
    }
  }

  async getFaq(): Promise<FaqData[]> {
    return await getCollection('faqs', this.query)
  }
}

export const faqService = new FaqService()