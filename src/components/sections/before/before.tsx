import SectionHeading from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { beforeAfterService } from '@/services/beforeAfter.service'
import { SectionHeadingType } from '@/types/home.types'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import CompareSlider from './compare-slider'

interface BeforeProps {
  sectionHeading: SectionHeadingType
}

export default async function Before({ sectionHeading }: BeforeProps) {
  const images = await beforeAfterService.getBeforeAfter()

  return (
    <section className='bg-background-secondary'>
      <SectionHeading
        title={sectionHeading.title}
        subtitle={sectionHeading.subtitle}
      />
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-6'>
          {images.map((item, i) => (
            <CompareSlider
              key={i}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>

        <div className='mt-13'>
          <h5 className='text-foreground font-semibold mb-3'>Möchten Sie ähnliche Ergebnisse erzielen? Kontaktieren Sie uns jetzt!</h5>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Button asChild size="full">
              <Link href={'mailto:savamcleaning@gmail.com'}>
                <Mail /> Schreiben: savamcleaning@gmail.com
              </Link>
            </Button>
            <Button asChild size="full" variant={'secondary'}>
              <Link href={'tel:+491773338542'}>
                <Phone /> Anrufen: +49 177 333 8542
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
