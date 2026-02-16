import SectionHeading from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { beforeAfterImages } from '@/constans/before.constans'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import CompareSlider from './compare-slider'

export default function Before() {
  return (
    <section className='bg-background-secondary'>
      <SectionHeading
        title='Vorher und nachher'
        subtitle='Sie können die Früchte unserer Arbeit sehen. Die Ergebnisse sprechen für sich.'
      />
      <div className='container'>
        <div className='grid grid-cols-2 gap-6'>
          {beforeAfterImages.map((item, i) => (
            <CompareSlider
              key={i}
              images={item.images}
            />
          ))}
        </div>

        <div className='mt-13'>
          <h5 className='text-foreground font-semibold mb-3'>Möchten Sie ähnliche Ergebnisse erzielen? Kontaktieren Sie uns jetzt!</h5>

          <div className='flex items-center justify-center gap-2'>
            <Button asChild className='w-full max-w-100'>
              <Link href={'mailto:savamcleaning@gmail.com'}>
                <Mail /> Schreiben: savamcleaning@gmail.com
              </Link>
            </Button>
            <Button asChild className='w-full max-w-100' variant={'secondary'}>
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
