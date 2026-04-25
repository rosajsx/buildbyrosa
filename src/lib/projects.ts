export type L  = { pt: string; en: string }
export type LA = { pt: string[]; en: string[] }

export interface Project {
  slug: string
  index: L
  title: string
  titleHtml: string
  tagline: L
  year: string
  role: L
  platform: L
  tags: string[]
  headline: L
  body: LA
  stats: { label: L; value: string }[]
  live: string
  next: { slug: string; name: string }
  cover?: string
  images?: string[]
}

import { liriaShop } from '@/content/projects/liria-shop'

export const projects: Project[] = [liriaShop]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
