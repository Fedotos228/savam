'use client'

import { Button } from '@/components/ui/button'
import { useServices } from '@/context/service-context'
import { ArrowRight, Trash2 } from 'lucide-react'


export default function ServiceList() {
  const { services, removeService } = useServices()

  return (
    <div className='border border-border rounded-lg'>
      <div className='p-6'>
        <p className='mb-3'>Ausgewählte Dienstleistungen:</p>
        <div className='space-y-3 h-fit max-w-full min-h-154.5 overflow-y-auto '>
          {services.length === 0 ? (
            <p className='text-sm text-muted-foreground'>Keine Dienstleistungen ausgewählt.</p>
          ) : services.map(service => (
            <div key={service.id} className='flex items-center border border-border rounded-md p-3' >
              <div className='flex-1'>
                <div className='flex items-center gap-6 mb-2'>
                  <h6>{service.title}</h6>
                  <span>{service.price} € /H</span>
                </div>
                <p className='mb-2'>{service.address}</p>
                <p>Fläche: {service.surface} m²</p>
              </div>
              <button
                className='bg-red-100 border border-red-300 p-2.5 rounded-lg cursor-pointer'
                onClick={() => removeService(service.id)}
              >
                <Trash2 className='text-red-500' />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='p-6 border-t border-border'>
        <Button variant='secondary' size='full' disabled={services.length === 0}>
          Bestellung abschließen <ArrowRight className='ml-2' />
        </Button>
      </div>
    </div>
  )
}
