import SectionHeading from '@/components/shared/section-heading'
import { SectionHeadingType } from '@/types/home.types'
import Calculator from './calculator'

interface PricesProps {
  sectionHeading: SectionHeadingType
}

export default function Prices({sectionHeading}: PricesProps) {
  return (
    <section id='preise'>
      <SectionHeading
        title={sectionHeading.title}
        subtitle={sectionHeading.subtitle}
      />
      <div className='container'>
        <Calculator />
      </div>
    </section>
  )
}
