import About from '@/components/sections/about/about'
import Before from '@/components/sections/before/before'
import Faq from '@/components/sections/faq'
import Hero from '@/components/sections/hero/hero'
import Prices from '@/components/sections/prices/prices'
import Review from '@/components/sections/review/review'
import Services from '@/components/sections/services/services'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Prices />
      <Before />
      <Review />
      <Faq />
    </main>
  )
}
