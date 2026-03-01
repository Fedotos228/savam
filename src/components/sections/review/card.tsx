import BlockRendererClient from '@/components/shared/block-renderer-client'
import { ReviewsData } from '@/services/reviews.service'
import { Star } from 'lucide-react'; // Folosim lucide-react pentru stele
import Image from 'next/image'

interface CardProps {
  review: ReviewsData
}

export default function Card({ review }: CardProps) {
  return (
    <div className='border border-slate-100 rounded-lg p-8 h-full flex flex-col justify-between bg-[#f3f9ff]'>
      <div>
        <div className='flex justify-between items-center mb-6'>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="black" stroke="black" />
            ))}
          </div>
          <time dateTime={review.date} className='text-sm text-gray-400 font-medium'>
            {review.date}
          </time>
        </div>

        <div className="text-gray-700 leading-relaxed line-clamp-6">
          <BlockRendererClient content={review.content} />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <div className="relative w-12 h-12">
          {review.avatar && (
            <Image
              src={review.avatar.url}
              alt={review.avatar.alternativeText || ""}
              fill
              sizes='100%'
              className='rounded-full object-cover grayscale-[0.5]'
            />
          )}
        </div>
        {review.name && (
          <span className='font-semibold text-gray-800 tracking-tight'>
            {review.name}
          </span>
        )}
      </div>
    </div>
  )
}