import { strapi } from '@strapi/client'

const url = process.env.API_URL as string

export const client = strapi({
  baseURL: url,
  auth: process.env.API_TOKEN,
})