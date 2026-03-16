'use client'

import { INavigation } from '@/types/header.types'
import Image from 'next/image'
import Link from 'next/link'

const navigation: INavigation[] = [
  {
    label: 'Dienstleistungen',
    href: "#dienstleistungen"
  },
  {
    label: 'Preise',
    href: '#preise'
  },
  {
    label: 'Bilder',
    href: '#bilder'
  },
  {
    label: 'Kundenbewertungen',
    href: '#kundenbewertungen'
  },
  {
    label: 'Kontaktdaten',
    href: '#kontaktdaten'
  }
]

export default function Header() {
  const phone = '+49 177 333 8542'

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)

    elem?.scrollIntoView({
      behavior: 'smooth',
    })

    window.history.pushState(null, '', href)
  }

  return (
    <header className='absolute z-20 left-1/2 -translate-x-1/2 top-10 flex items-center justify-center lg:justify-between container'>
      <Image
        src={'./savam_yellow.svg'}
        alt='logo'
        width={115}
        height={50}
        className='w-25 sm:w-28.75 h-26'
      />
      <nav className='hidden lg:flex items-center lg:gap-13'>
        {navigation.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className='text-background cursor-pointer hover:opacity-80 transition-opacity'
          >
            {item.label}
          </a>
        ))}
      </nav>
      <Link
        className='hidden lg:block bg-background text-primary py-3.5 px-6 hover:bg-blue hover:text-background transition-colors rounded-xl'
        href={`tel:${phone}`}
      >
        {phone}
      </Link>
    </header>
  )
}
