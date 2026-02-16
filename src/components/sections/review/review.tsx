'use client'

import SectionHeading from '@/components/shared/section-heading'
import ReviewCarousel from './review-carousel'


export default function Review() {

  return (
    <section>
      <SectionHeading
        title='Kundenbewertungen'
        subtitle='Wir sind stets bestrebt, Dienstleistungen von höchster Qualität anzubieten, und unsere Kunden bestätigen dies! Wir schätzen jedes Feedback und freuen uns immer über Ihre Vorschläge und Anmerkungen.'
        className='max-w-186'
      />
      {/* <Link href={''} className='inline-flex items-center gap-3 text-[rgba(2,103,255,1)] font-semibold'>
        Bewertungen bei Google <ArrowRight size={20} />
      </Link> */}

      <ReviewCarousel />
    </section>
  )
}
