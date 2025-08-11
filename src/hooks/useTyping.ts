/**
 * useTyping.ts
 * Simple typing/deleting loop hook to create a typewriter effect.
 */

import { useEffect, useRef, useState } from 'react'

/** Options for useTyping behavior */
export interface UseTypingOptions {
  /** Words list to cycle through */
  words: string[]
  /** Typing speed in ms per character */
  typeSpeed?: number
  /** Deleting speed in ms per character */
  deleteSpeed?: number
  /** Delay between full word typed and deletion */
  delayBetween?: number
  /** Whether to loop indefinitely */
  loop?: boolean
}

/**
 * useTyping
 * Returns the currently typed text. Loops through provided words.
 */
export function useTyping({
  words,
  typeSpeed = 60,
  deleteSpeed = 40,
  delayBetween = 900,
  loop = true,
}: UseTypingOptions) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const wordIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    /** Clear any running timers on unmount */
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const currentWord = words[wordIndexRef.current] ?? ''
    const isComplete = charIndexRef.current === currentWord.length

    // Logic: type until complete -> wait -> delete -> move to next -> repeat
    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        const next = currentWord.slice(0, charIndexRef.current + 1)
        setText(next)
        charIndexRef.current += 1

        if (isComplete) {
          // Pause before deleting
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(true)
          }, delayBetween)
          return
        }
        timeoutRef.current = window.setTimeout(tick, typeSpeed)
      } else {
        // Deleting backward
        const next = currentWord.slice(0, charIndexRef.current - 1)
        setText(next)
        charIndexRef.current -= 1

        if (charIndexRef.current === 0) {
          setIsDeleting(false)
          wordIndexRef.current =
            (wordIndexRef.current + 1) % words.length

          // Stop if not looping and we finished the last word
          if (!loop && wordIndexRef.current === 0) return
        }
        timeoutRef.current = window.setTimeout(tick, deleteSpeed)
      }
    }

    timeoutRef.current = window.setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting, words.join('|'), typeSpeed, deleteSpeed, delayBetween, loop])

  return text
}

export default useTyping
