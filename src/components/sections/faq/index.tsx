import SectionHeading from '@/components/shared/section-heading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Faq() {
  return (
    <section className='bg-background-blue'>
      <div className="container">
        <SectionHeading
          title='Häufig gestellte Fragen'
          subtitle='Antworten auf die häufigsten Fragen zu unseren Dienstleistungen'
        />

        <div>
          <Accordion
            type="single"
            className='space-y-4'
            collapsible
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
