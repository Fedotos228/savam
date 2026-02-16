'use client'

import SectionHeading from '@/components/shared/section-heading'
import { aboutBlocks } from '@/constans/about.constans'
import { useRef } from 'react'
import AboutBlock from './about-block'
import WaveBackground from './wave-background'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className='relative'
      ref={containerRef}
    >
      <WaveBackground />
      <div
        className="corner-gold absolute top-17.5 left-0 translate-0 w-35 h-0.5 -rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }}
      />

      <div
        className="corner-gold absolute top-17.5 right-0 w-35 h-0.5 rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }}
      />

      <SectionHeading
        title='Sauberkeit, der man vertraut'
        subtitle='Seit über 8 Jahren stehen wir in Berlin für professionelle Reinigungsdienstleistungen auf höchstem Niveau.'
      />

      <div className='container space-y-15 lg:space-y-30'>
        {aboutBlocks.map((item, i) => (
          <AboutBlock
            key={i}
            even={i % 2 === 0}
            content={item}
          />
        ))}
      </div>
    </section>
  )
}
