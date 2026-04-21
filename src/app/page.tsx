export const revalidate = 60

import About from '@/components/sections/about/about'
import Before from '@/components/sections/before/before'
import Faq from '@/components/sections/faq'
import Hero from '@/components/sections/hero/hero'
import Prices from '@/components/sections/prices/prices'
import Review from '@/components/sections/review/review'
import Services from '@/components/sections/services/services'
import { homeService } from '@/services/home.service'
import { servicesService } from '@/services/services.service'

export default async function Home() {
  const [homeData, services] = await Promise.all([
    homeService.getHome(),
    servicesService.getServices(),
  ])

  if (!homeData || !services) {
    console.warn("Home data not found. Ensure Strapi is running and entry is published.")
    return null
  }

  const { hero, about } = homeData

  return (
    <main>
      <Hero hero={hero} />
      <About about={about} />
      <Services sectionHeading={homeData.services.SectionHeading} services={services} />
      <Prices sectionHeading={homeData.prices.SectionHeading} />
      <Before sectionHeading={homeData.beforeAfter.SectionHeading} />
      <Review />
      <Faq />
    </main>
  )
}
