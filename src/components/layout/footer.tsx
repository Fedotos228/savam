import { pricesService } from '@/services/prices.service'
import Image from 'next/image'
import Link from 'next/link'

export default async function Footer() {
  const footerServices = await pricesService.getFooterServices()

  return (
    <footer
      style={{ background: 'url(./hero.jpg) center/cover no-repeat' }}
      className='py-20'
    >
      <div className='container grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 text-background'>
        <div>
          <div className='mb-7 max-w-sm'>
            <Image
              src={'./savam_yellow.svg'}
              alt='logo'
              width={115}
              height={50}
              className='mb-6'
            />
            <p>Wir verwenden natürliche und umweltfreundliche Reinigungsprodukte und bieten eine Kundenzufriedenheitsgarantie.</p>
          </div>
          <div className='mb-13 space-y-3'>
            <h5 className='text-left text-background font-semibold'>Kontaktdaten:</h5>
            <Link href="mailto:savamcleaning@gmail.com" className='block underline'>savamcleaning@gmail.com</Link>
            <Link href="tel:+4915123456789" className='block underline'>+49 151 23456789</Link>
          </div>
          <div className='space-y-3'>
            <h5 className='text-left text-background font-semibold'>Soziale Medien:</h5>
            <p>
              Facebook: <Link href="https://www.facebook.com/savamcleaning" className=' font-semibold underline underline-offset-2'>@savanan_cleaning</Link>
            </p>
            <p>
              Instagram: <Link href="https://www.instagram.com/savamcleaning" className='font-semibold underline underline-offset-2'>@savanan_cleaning</Link>
            </p>
          </div>
        </div>
        <div>
          <h5 className='text-left text-background font-semibold mb-13'>Reinigungsdienste:</h5>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-17.5 gap-y-13'>
            {footerServices && footerServices.map((service) => (
              <div key={service.id}>
                <h6 className='mb-3 text-background'>{service.title}</h6>
                <ul className='space-y-3'>
                  {service.list.map((item) => (
                    <li key={item.id} className='text-background/80'>
                      <span className='inline-block w-0.5 h-0.5 bg-background/80 rounded-full mr-2'></span>
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
