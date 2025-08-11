/**
 * MediaCarousel.tsx
 * Reusable image carousel using Embla with arrows and dots.
 */

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/** MediaCarouselProps
 * images: list of image URLs
 * ariaLabel: accessible label for the carousel region
 */
interface MediaCarouselProps {
  images: string[]
  ariaLabel?: string
}

/**
 * MediaCarousel
 * A lightweight, responsive carousel with prev/next controls and pagination dots.
 */
export default function MediaCarousel({ images, ariaLabel }: MediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  /** onSelect
   * Sync selected index when slide changes.
   */
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  /** setupEmbla
   * Bind events and capture snaps when embla ready.
   */
  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
  }, [emblaApi, onSelect])

  const canNavigate = images.length > 1

  return (
    <div className="relative" aria-label={ariaLabel}>
      <div className="overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative flex h-72 w-full items-center justify-center bg-slate-100 dark:bg-slate-800 md:h-96">
                <img
                  src={src}
                  alt={`slide ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {canNavigate && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:ring-slate-800 dark:hover:bg-slate-900"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-200 transition hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:ring-slate-800 dark:hover:bg-slate-900"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-3 flex justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === selectedIndex
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
