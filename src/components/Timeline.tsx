/**
 * Timeline.tsx
 * Vertical timeline list with subtle scroll-reveal animation hooks.
 */

import { ReactNode } from 'react'
import { motion, useAnimation } from 'motion/react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

/** TimelineItem
 * Single item shape for the timeline.
 */
export interface TimelineItem {
  id: string
  title: string
  time: string
  content: ReactNode
}

/** TimelineProps
 * items: array of timeline items
 */
interface TimelineProps {
  items: TimelineItem[]
}

/**
 * Timeline
 * Renders a vertical timeline with animated items on first view.
 */
export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-indigo-300 via-slate-200 to-orange-300" />
      <ul className="space-y-8">
        {items.map((it) => (
          <AnimatedTimelineItem key={it.id} item={it} />
        ))}
      </ul>
    </div>
  )
}

/**
 * AnimatedTimelineItem
 * Handles per-item animation using IntersectionObserver.
 */
function AnimatedTimelineItem({ item }: { item: TimelineItem }) {
  const controls = useAnimation()
  const { ref } = useInViewAnimation({
    onEnter: () => {
      controls.start({ opacity: 1, x: 0, filter: 'blur(0px)' })
    },
  })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative"
    >
      <div className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-gradient-to-tr from-orange-400 to-indigo-500 shadow" />
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
          <span className="text-xs font-medium text-indigo-600">{item.time}</span>
        </div>
        <div className="mt-2 text-sm text-slate-600">{item.content}</div>
      </div>
    </motion.li>
  )
}
