/**
 * AnimatedText.tsx
 * Typing or highlighted appearing effect for headlines.
 */

import { useTyping } from '../hooks/useTyping'

/** AnimatedTextProps
 * text: string to animate
 * speed: typing speed in ms per character
 */
interface AnimatedTextProps {
  text: string
  speed?: number
}

/**
 * AnimatedText
 * Renders a typing animation for the supplied text.
 */
export default function AnimatedText({ text, speed = 45 }: AnimatedTextProps) {
  const typed = useTyping(text, speed)
  return (
    <span className="whitespace-pre-wrap">
      {typed}
      <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-slate-900 align-middle" />
    </span>
  )
}
