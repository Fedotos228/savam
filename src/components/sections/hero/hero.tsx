'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

export default function Hero() {
  const container = useRef(null)

  const phone = '+49 177 333 8542'


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
        className="absolute inset-0 opacity-40"
        style={{ background: 'url(./hero.jpg) center/cover no-repeat' }}
      />
      {/* Sus Stânga */}
      <div className="corner-gold absolute top-17.5 left-0 translate-0 w-35 h-0.5 -rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Sus Dreapta */}
      <div className="corner-gold absolute top-17.5 right-0 w-35 h-0.5 rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Jos Stânga */}
      <div className="corner-gold absolute bottom-17.5 left-0 w-35 h-0.5 rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />

      {/* Jos Dreapta */}
      <div className="corner-gold absolute bottom-17.5 right-0 w-35 h-0.5 -rotate-45 z-20"
        style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />


      {/* Conținutul Central */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-3 z-10'>
        <h1 className='title mb-13'>
          Savam <br /> CLEANING
        </h1>

        <div className='devider relative mx-auto w-40 h-px mb-9'
          style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }}>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45'
            style={{ backgroundImage: 'url(./lesh.jpg)', backgroundSize: 'cover' }} />
        </div>

        <h3 className='subtitle'>
          Passion, love and discipline for cleaning
        </h3>

        <Link
          className='block sm:hidden max-w-xs mx-auto mt-13 bg-background text-primary py-3.5 px-6 hover:bg-blue hover:text-background transition-colors rounded-xl'
          href={`tel:${phone}`}
        >
          {phone}
        </Link>
      </div>
    </div>
  )
}
