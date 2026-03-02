'use client'

import { HeroData } from '@/types/home.types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Hero({ hero }: { hero: HeroData }) {
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } })

    tl.from('.corner-gold', {
      scale: 1.2,
      opacity: 0,
      stagger: 0.2
    })
      .from('.title', { y: 40, opacity: 0 }, '-=1')
      .from('.devider', { scaleX: 0, opacity: 0 }, '-=0.8')
      .from('.subtitle', { y: 20, opacity: 0 }, '-=0.8')
  }, { scope: container })

  return (
    <div
      ref={container}
      className='h-dvh relative bg-[#050b1a] overflow-hidden'
    >
      {/* Imaginea de fundal texturată */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: 'url(./hero.jpg) center/cover no-repeat' }}
      />
      {/* Sus Stânga */}
      <div className="corner-gold absolute top-17.5 left-0 -rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Sus Dreapta */}
      <div className="corner-gold absolute top-17.5 right-0  rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Jos Stânga */}
      <div className="corner-gold absolute bottom-17.5 left-0  rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Jos Dreapta */}
      <div className="corner-gold absolute bottom-17.5 right-0  -rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />


      {/* Conținutul Central */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-3 z-10'>
        <h1 className='title mb-10 lg:mb-13 max-w-sm mx-auto'>
          {hero.SectionHeading.title}
        </h1>

        <div className='devider relative mx-auto w-40 h-px mb-9'
          style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }}>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45'
            style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />
        </div>

        <h3 className='subtitle'>
          {hero.SectionHeading.subtitle}
        </h3>
{/* 
        <Link
          className='block sm:hidden max-w-xs mx-auto mt-20 bg-background text-primary py-3.5 px-6 hover:bg-blue hover:text-background transition-colors rounded-xl'
          href={`tel:${hero.phone}`}
        >
          {hero.phone}
        </Link> */}
      </div>
    </div>
  )
}
