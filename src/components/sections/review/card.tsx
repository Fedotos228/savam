import { Review } from '@/constans/reviews.constans'
import { Star } from 'lucide-react'; // Folosim lucide-react pentru stele
import Image from 'next/image'

interface CardProps {
  review: Review
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

        <p className="text-gray-700 leading-relaxed">
          {review.text}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <div className="relative w-12 h-12">
          <Image
            src={review.user.avatar.src}
            alt={review.user.avatar.alt}
            fill
            className='rounded-full object-cover grayscale-[0.5]'
          />
        </div>
        <span className='font-semibold text-gray-800 tracking-tight'>
          {review.user.name}
        </span>
      </div>
    </div>
  )
}