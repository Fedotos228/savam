import { StrapiCollection, StrapiQuery, StrapiSingle } from '@/types/strapi.types'
import { strapi } from '@strapi/client'

export const client = strapi({
  baseURL: process.env.API_URL as string,
  auth: process.env.API_TOKEN,
})

export async function getCollection<T>(
  contentType: string,
  options: StrapiQuery = {}
): Promise<T[]> {
  const coll = client.collection(contentType)
  const response = await coll.find(options as any) as unknown as StrapiCollection<T>

  if (!response) {
    throw new Error(`Failed to fetch collection type: ${contentType}`)
  }

  return response.data
}

export async function getSingle<T>(
  contentType: string,
  options: StrapiQuery = {}
): Promise<T | null> {
  const single = client.single(contentType)
  const response = await single.find(options as any) as StrapiSingle<T>

  if (!response || !response.data) {
    console.error(`Failed to fetch single type: ${contentType}`)
    return null
  }

  return response.data
}