import { HomeData } from '@/types/home.types'
import { getSingle } from './strapi'

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

  async getHome(): Promise<HomeData | null> {
    return await getSingle('home', this.query)
  }
}

export const homeService = new HomeService()