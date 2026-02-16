'use client'

import SectionHeading from '@/components/shared/section-heading'
import { services } from '@/constans/services.constans'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Card from './card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card')

    // SETĂM starea inițială prin GSAP, nu prin CSS static
    gsap.set(cards, { opacity: 0, y: 30 })

    gsap.to(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    })
  }, { scope: containerRef })

  return (
    <section className='bg-background-blue' ref={containerRef}>
      <div className="container">
        <SectionHeading
          title='Unsere Dienstleistungen'
          subtitle='Professionelle Reinigungsservices für private und gewerbliche Kunden.'
        />
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
          {services.map((item, i) => (
            <div key={i} className="service-card opacity-0">
              <Card card={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}