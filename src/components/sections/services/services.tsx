'use client'

import SectionHeading from '@/components/shared/section-heading'
import { ServiceCards } from '@/services/services.service'
import { SectionHeadingType } from '@/types/home.types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Card from './card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface ServiceData {
  sectionHeading: SectionHeadingType
  services: ServiceCards[]
}

export default function Services({ sectionHeading, services }: ServiceData) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card')

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
    <section className='bg-background-blue' ref={containerRef} id='dienstleistungen'>
      <div className="container">
        <SectionHeading
          title={sectionHeading.title}
          subtitle={sectionHeading.subtitle}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
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