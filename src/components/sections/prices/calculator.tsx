'use client'

import { ServiceProvider } from '@/context/service-context'
import ServiceForm from './service-form'
import ServiceList from './service-list'

export default function Calculator() {
  return (
    <ServiceProvider>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <ServiceForm />
        <ServiceList />
      </div>
    </ServiceProvider>
  )
}
