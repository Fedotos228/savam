'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useServices } from '@/context/service-context'
import { PricesData } from '@/services/prices.service'
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useForm } from "react-hook-form"
import z from 'zod'

export default function ServiceForm({ prices }: { prices: PricesData[] }) {
  const { addService } = useServices()
  const [success, setSuccess] = useState<boolean>(false)

  const formSchema = useMemo(() => {
    // Extragem dinamic slug-urile din response
    const validSlugs = prices.map(p => p.slug)

    return z.object({
      service: z.string().refine((val) => validSlugs.includes(val), {
        message: "Der ausgewählte Service ist nicht gültig"
      }),
      fullName: z.string().min(2, "Der Name ist zu kurz"),
      phone: z.string().min(5, "Ungültige Telefonnummer"),
      surface: z.string().min(1, "Die Oberfläche muss mindestens 1 sein"),
      address: z.string().min(5, "Die Adresse ist zu kurz"),
      comment: z.string().max(200).optional()
    })
  }, [prices])

  type ServiceFormValues = z.infer<typeof formSchema>

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: prices.length > 0 ? prices[0].slug : "",
      fullName: "",
      phone: '',
      surface: '',
      address: "",
      comment: ""
    }
  })

  const onSubmit = (data: ServiceFormValues) => {
    const serviceDetails = prices.find(s => s.slug === data.service)

    addService({
      id: crypto.randomUUID(),
      title: serviceDetails?.title || data.service,
      slug: data.service,
      fullName: data.fullName,
      price: serviceDetails?.price || 0,
      phone: data.phone,
      address: data.address,
      surface: data.surface,
      comment: data.comment
    })

    form.reset()

    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 1500)
  }
  const selectedServiceSlug = form.watch("service")

  const currentServiceUIList = prices.find(s => s.slug === selectedServiceSlug)?.list || []


  return (
    <div className='border border-border rounded-lg p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">

          {/* SELECT - Art der Dienstleistung */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Art der Dienstleistung:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-14 border-foreground/10 w-full">
                      <SelectValue placeholder="Wählen Sie einen Dienst aus" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position='popper'>
                    {prices.map((item) => (
                      <SelectItem key={item.slug} value={item.slug}>
                        <div className="flex justify-between items-center w-full gap-3">
                          <span className="font-semibold">{item.title}</span>
                          <span className="text-muted-foreground">{item.price} € / H</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {currentServiceUIList.length > 0 && (
            <div className="space-y-2 animate-in fade-in duration-300 w-full">
              <p className="font-medium">Was beinhaltet der Service:</p>
              <ul className="grid grid-cols-1 gap-1 pl-2">
                {currentServiceUIList.map((task) => (
                  <li key={task.id} className="text-label flex items-center gap-2">
                    <span className="w-1 h-1 bg-label rounded-full" />
                    {task.value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INPUTS - Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name, Vorname:</FormLabel>
                  <FormControl>
                    <Input placeholder="z. B. Max Mustermann" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefonnummer:</FormLabel>
                  <FormControl>
                    <Input placeholder="z. B. 15123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* SURFACE & ADDRESS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="surface"
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel>Oberfläche:</FormLabel>
                  <div className="relative">
                    <FormControl><Input type='number' className='h-12 appearance-none' {...field} /></FormControl>
                    <span className="absolute right-3 top-2 text-sm">m²</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Adresse:</FormLabel>
                  <FormControl><Input placeholder="Rosenheimer Straße..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* COMMENT */}
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kommentar:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Kommentar hinzufügen..."  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={success ? "bg-green-400 hover:bg-green-400 cursor-default" : ""}
            size='full'
          >
            {success ? <>Hinzugefügt! <Check /></> : <>Zur Liste hinzufügen <Plus /></>}
          </Button>
        </form>
      </Form>
    </div>

  )
}
