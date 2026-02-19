'use client'

import { StrapiImage } from '@/types/strapi.types'
import { MoveHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface CompareSliderProps {
  images: StrapiImage[]
}

export default function CompareSlider({ images }: CompareSliderProps) {
  const [range, setRange] = useState<number>(50)

  if (!images || images.length < 2) return null

  const imageOne = images[0] // Partea "Vor"
  const imageTwo = images[1] // Partea "Nach"

  return (
    // Containerul principal trebuie să aibă dimensiuni fixe sau aspect-ratio
    <div className='relative w-full max-w-[552px] aspect-square overflow-hidden select-none touch-none bg-gray-200 rounded-lg even:hidden md:even:block'>

      {/* 1. Imaginea de fundal (Nach) */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={imageTwo.src}
          alt={imageTwo.alt}
          fill
          priority
          className='object-cover'
        />
        <div className='absolute bottom-4 right-4 z-10 bg-[rgba(183,225,255,0.6)] px-3 py-1 rounded backdrop-blur-sm text-sm'>
          Nach
        </div>
      </div>

      <div
        className='absolute inset-0 z-20 overflow-hidden border-white'
        style={{ width: `${range}%` }}
      >
        <div className='relative w-[552px] h-[552px]'>
          <Image
            src={imageOne.src}
            alt={imageOne.alt}
            fill
            priority
            className='object-cover'
          />
        </div>
        <div className='absolute bottom-4 left-4 z-10 bg-white/60 px-3 py-1 rounded backdrop-blur-sm text-sm'>
          Vor
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
        className='absolute inset-0 z-40 w-full h-full opacity-0 cursor-ew-resize'
      />

      <div
        className='absolute top-0 bottom-0 z-30 w-1 bg-white pointer-events-none'
        style={{ left: `${range}%` }}
      >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12.5 h-12.5 bg-white rounded-full shadow-lg flex items-center justify-center'>
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  )
}