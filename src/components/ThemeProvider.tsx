/**
 * ThemeProvider.tsx
 * App-level theme provider using next-themes to manage light/dark via class on html.
 */

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

/** ThemeProviderProps
 * Wraps children with next-themes provider.
 */
interface ThemeProviderProps {
  children: React.ReactNode
}

/**
 * AppThemeProvider
 * Provides theme context with system preference, storing to localStorage.
 */
export default function AppThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="site-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  )
}
