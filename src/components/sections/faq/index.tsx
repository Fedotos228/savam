import BlockRendererClient from '@/components/shared/block-renderer-client'
import SectionHeading from '@/components/shared/section-heading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqService } from '@/services/faq.service'

export default async function Faq() {
  const faq = await faqService.getFaq()

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
            {faq && faq.map((question, i) => (
              <AccordionItem value={question.question} key={i}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>
                  <BlockRendererClient content={question.content} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
