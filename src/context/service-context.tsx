'use client'

import { createContext, useContext, useState } from 'react'

export type SelectedService = {
  id: string
  title: string
  address: string
  phone: string
  surface: string
  price: number
  slug: string
}

type ServiceContextType = {
  services: SelectedService[]
  addService: (service: SelectedService) => void
  removeService: (id: string) => void
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined)

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<SelectedService[]>([])

  const addService = (service: SelectedService) => {
    setServices((prev) => [...prev, service])
  }

  const removeService = (id: string) => {
    setServices((prev) => prev.filter(service => service.id !== id))
  }

  return (
    <ServiceContext.Provider value={{ services, addService, removeService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export const useServices = () => {
  const context = useContext(ServiceContext)
  if (!context) throw new Error("useServices must be used within a ServiceProvider")
  return context
}