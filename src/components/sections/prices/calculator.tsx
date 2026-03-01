import { ServiceProvider } from '@/context/service-context'
import { pricesService } from '@/services/prices.service'
import ServiceForm from './service-form'
import ServiceList from './service-list'

export default async function Calculator() {
  const prices = await pricesService.getPrices()
  
  return (
    <ServiceProvider>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <ServiceForm prices={prices} />
        <ServiceList />
      </div>
    </ServiceProvider>
  )
}
