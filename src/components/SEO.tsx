/**
 * SEO.tsx
 * Lightweight SEO helper to set page title and meta description.
 */

import { useEffect } from 'react'

/** SEOProps
 * Defines title and description for head tags.
 */
interface SEOProps {
  title: string
  description?: string
}

/**
 * SEO
 * Updates document.title, meta description, and injects Google Font (Montserrat).
 */
export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update title
    if (title) document.title = title

    // Update or create meta description
    const name = 'description'
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', name)
      document.head.appendChild(tag)
    }
    if (description) tag.setAttribute('content', description)

    // Inject Montserrat font link once
    const existing = document.getElementById('font-montserrat')
    if (!existing) {
      const link = document.createElement('link')
      link.id = 'font-montserrat'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap'
      document.head.appendChild(link)
    }
  }, [title, description])

  return null
}
