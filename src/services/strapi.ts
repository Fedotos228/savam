import { StrapiCollection, StrapiQuery, StrapiSingle } from '@/types/strapi.types'
import { strapi } from '@strapi/client'

const url = process.env.API_URL as string

export const client = strapi({
  baseURL: url,
  auth: process.env.API_TOKEN,
})

export async function getCollection<T>(
  contentType: string,
  options: StrapiQuery = {}
): Promise<T[]> {
  const coll = await client.collection(contentType)

  const response = await coll.find(options as any) as unknown as StrapiCollection<T>

  if (!response) {
    throw new Error('asdf')
  }

  return response.data
}

export async function getSingle<T>(
  contentType: string,
  options: StrapiQuery = {}
): Promise<T> {
  const single = await client.single(contentType)

  const { data } = await (single.find(options as any) as Promise<StrapiSingle<T>>)

  return data
}