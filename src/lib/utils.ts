import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiMedia(url: string) {
  return `${process.env.BASE_URL || "http://localhost:1337"}${url}`
}