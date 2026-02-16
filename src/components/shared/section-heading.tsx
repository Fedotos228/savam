import { cn } from '@/lib/utils'

interface SectioinHeadingProps {
  title: string,
  subtitle: string
  className?: string
  children?: React.ReactNode
}

export default function SectionHeading({ title, subtitle, className, children }: SectioinHeadingProps) {
  return (
    <div className={cn('mb-13.5 px-3 mx-auto', className)}>
      <h2 className='mb-2'>{title}</h2>
      <h5>{subtitle}</h5>
      {children}
    </div>
  )
}
