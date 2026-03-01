'use client'

import BlockRendererClient from '@/components/shared/block-renderer-client'
import { AboutBlockType } from '@/types/home.types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

// Înregistrăm plugin-ul
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AboutBlockProps {
  content: AboutBlockType,
  even: boolean
}

export default function AboutBlock({ content, even }: AboutBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    // Timeline pentru sincronizarea elementelor
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blockRef.current,
        start: 'top 85%', // Animația începe când blocul e la 85% din înălțimea ecranului
        toggleActions: 'play none none reverse', // Se joacă la scroll down, se inversează la scroll up
      }
    })

    // Animație text: vine din stânga sau dreapta (în funcție de 'even')
    tl.from(textRef.current, {
      x: even ? 50 : -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Animație imagine: vine din direcția opusă textului
    tl.from(imageRef.current, {
      x: even ? -50 : 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.7") // Începe cu 0.7s înainte ca textul să termine (overlap)

  }, { scope: blockRef })

  return (
    <div 
      ref={blockRef}
      className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 peer overflow-hidden'
    >
      <div 
        ref={textRef}
        className={even ? 'order-2' : 'order-1'}
      >
        <h4 className='mb-2'>
          {content.Title}
        </h4>
        <BlockRendererClient content={content.Content} />
      </div>
      
      <div className={even ? 'order-1' : 'order-2'} ref={imageRef}>
        
        <Image
          src={content.Image.url}
          alt={content.Image.alternativeText || content.Title}
          width={552}
          height={465}
          className="w-full"
        />
      </div>
    </div>
  )
}