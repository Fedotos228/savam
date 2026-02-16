import { ServiceCard } from '@/types/page.types'
import Image from 'next/image'

interface ServiceCardProps {
  card: ServiceCard
}

export default function Card({ card }: ServiceCardProps) {
  return (
    <div className='group flex flex-col h-full transition-transform duration-300 hover:-translate-y-2'>
      <div className='overflow-hidden'>
        <Image
          src={card.image.src}
          alt={card.image.alt}
          width={264}
          height={200}
          className='w-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
      </div>
      <div className='bg-background p-2.5 sm:p-4 md:p-6 grow border-t-2 border-transparent group-hover:border-gold transition-colors duration-300'>
        <h6 className='mb-3 group-hover:text-gold transition-colors'>{card.title}</h6>
        <p className='text-label mb-3 text-sm md:text-base'>{card.description}</p>
        <ul className='space-y-1'>
          {card.list.map((item, i) => (
            <li 
              className='text-xs md:text-base ml-1 before:inline-block before:bg-foreground before:mr-2 before:mb-0.5 before:size-1 before:rounded-full before:align-middle' 
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}