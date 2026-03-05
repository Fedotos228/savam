'use client'

import Modal from '@/components/shared/modal'
import { Button } from '@/components/ui/button'
import { useServices } from '@/context/service-context'
import { ArrowRight, LoaderCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function ServiceList() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { services, removeService, clearServices } = useServices()

  console.log(services)

  const handleSendRequest = async () => {
    if (services.length === 0) return
    setIsLoading(true)

    try {
      await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(services),
      })

      clearServices()
      setIsOpen(true)
    } catch (err) {
      alert(`Eroare: ${err}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='border border-border rounded-lg'>
      <div className='p-6'>
        <p className='mb-3'>Ausgewählte Dienstleistungen:</p>
        <div className='space-y-3 h-fit max-w-full min-h-154.5 overflow-y-auto '>
          {services.length === 0 ? (
            <p className='text-sm text-muted-foreground'>Keine Dienstleistungen ausgewählt.</p>
          ) : services.map((service, i) => (
            <div key={i} className='flex items-center border border-border rounded-md p-3' >
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
        <Button
          variant='secondary'
          size='full'
          disabled={services.length === 0 || isLoading}
          onClick={handleSendRequest}
        >
          Bestellung abschließen
          {isLoading ? <LoaderCircle className='ml-2 animate-spin' /> : <ArrowRight className='ml-2' />}
        </Button>
        <Modal
          disabled={services.length === 0}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSendRequest={handleSendRequest}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
