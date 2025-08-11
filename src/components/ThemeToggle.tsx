/**
 * ThemeToggle.tsx
 * Small button to toggle between light/dark themes.
 */

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../components/ui/button'

/**
 * ThemeToggle
 * Uses next-themes to switch theme. Avoids hydration mismatch by waiting until mounted.
 */
export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  /** useEffect
   * Mark mounted to ensure icons reflect real theme after hydration.
   */
  useEffect(() => {
    setMounted(true)
  }, [])

  /** handleToggle
   * Toggle between light and dark (system resolved respected).
   */
  const handleToggle = () => {
    const current = resolvedTheme ?? theme
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="bg-transparent h-9 w-9 p-0 rounded-lg"
      aria-label="Toggle theme"
      onClick={handleToggle}
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )
      ) : (
        // Fallback icon before mounted
        <Moon size={16} />
      )}
    </Button>
  )
}
