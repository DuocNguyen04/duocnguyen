/**
 * useInViewAnimation.ts
 * Observe element and trigger callback when it enters the viewport.
 */

import { useEffect, useRef } from 'react'

/** InViewOptions
 * onEnter: callback invoked on first enter.
 * rootMargin: optional margin for early trigger.
 */
interface InViewOptions {
  onEnter: () => void
  rootMargin?: string
}

/**
 * useInViewAnimation
 * Utility using IntersectionObserver for scroll reveal animations.
 */
export function useInViewAnimation({ onEnter, rootMargin = '0px 0px -10% 0px' }: InViewOptions) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    let triggered = false
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!triggered && e.isIntersecting) {
            triggered = true
            onEnter()
            io.disconnect()
          }
        })
      },
      { root: null, rootMargin, threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [onEnter, rootMargin])

  return { ref }
}
