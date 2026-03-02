export interface StrapiImage {
  url: string
  alternativeText: string | null
}

export interface ListItem {
  id: number
  value: string
}

export interface Document {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface StrapiSingle<T> extends Document {
  data: T
  meta: Meta
}

export interface StrapiCollection<T> extends Document {
  data: T[]
  meta: Meta
}

type Object = Record<string, unknown>

export interface StrapiQuery {
  populate?: string | string[] | Object
  fields?: string[]
  filters?: Object
  sort?: string | string[]
  pagination?: Meta
}

export const castoTo = <T>(promise: Promise<any>) => promise as Promise<T>

export function queryPopulation(options: StrapiQuery) {
  return options as StrapiQuery
}