import { HomeData } from '@/types/home.types'
import { client } from './strapi'

class HomeService {
  private get sectionHeading() {
    return { fields: ['title', 'subtitle'] }
  }

  private get query() {
    return {
      populate: {
        hero: {
          fields: ['phone'],
          populate: { SectionHeading: this.sectionHeading }
        },
        about: {
          populate: {
            SectionHeading: this.sectionHeading,
            Block: {
              fields: ['Title', 'Content'],
              populate: { Image: { fields: ['url', 'alternativeText'] } }
            }
          }
        },
        services: { populate: { SectionHeading: this.sectionHeading } },
        prices: { populate: { SectionHeading: this.sectionHeading } },
        beforeAfter: {
          populate: {
            SectionHeading: this.sectionHeading,
            Contact: {
              fields: ['title'],
              populate: {
                Buttons: { fields: ['label', 'link', 'icon', 'variant', 'size'] }
              }
            }
          }
        },
        reviews: { populate: { SectionHeading: this.sectionHeading } },
        faq: { populate: { SectionHeading: this.sectionHeading } }
      }
    }
  }

  async getHome(): Promise<HomeData> {
    const homeReq = await client.single('home')

    const { data } = await homeReq.find(this.query)

    return data as unknown as HomeData
  }
}

export const homeService = new HomeService()