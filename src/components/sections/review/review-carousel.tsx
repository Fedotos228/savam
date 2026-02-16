'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { reviews } from '@/constans/reviews.constans'
import { useEffect, useState } from 'react'
import Card from './card'

export default function ReviewCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    // Setăm slide-ul inițial
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {reviews.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
            <div className={`transition-opacity duration-500 h-full ${current === index ? 'opacity-100' : 'opacity-40'}`}>
              <Card review={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='flex items-center justify-center gap-6 mt-12'>
        <CarouselPrevious />

        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full h-2.5 ${current === index ? 'w-2.5 bg-gray-600' : 'w-2.5 bg-gray-300'
                }`}
            />
          ))}
        </div>

        <CarouselNext />
      </div>
    </Carousel>
  )
}