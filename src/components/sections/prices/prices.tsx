import SectionHeading from '@/components/shared/section-heading'
import Calculator from './calculator'

export default function Prices() {
  return (
    <section>
      <SectionHeading
        title='Berechnen Sie den Preis für Dienstleistungen'
        subtitle='Die passende Uhrzeit und weitere Details werden nach Rücksprache festgelegt. Wir bieten maximale Flexibilität.'
      />
      <div className='container'>
        <Calculator />
      </div>
    </section>
  )
}
