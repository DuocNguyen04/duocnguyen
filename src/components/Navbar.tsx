/**
 * Navbar.tsx
 * Sticky, translucent top navigation with responsive mobile menu (hamburger) and theme toggle.
 */

import { Link, useLocation } from 'react-router'
import { Sparkles, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

/**
 * NavLinkItem
 * Small helper to render a single nav link with active state styling.
 */
function NavLinkItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  const loc = useLocation()
  const active = loc.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active
          ? 'text-white bg-gradient-to-r from-orange-400 to-indigo-500 shadow-md'
          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

/**
 * Navbar
 * Top bar with brand, desktop navigation and a mobile-friendly dropdown menu.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  /** handleToggle
   * Toggle the mobile menu panel.
   */
  const handleToggle = () => setOpen((v) => !v)

  /** handleClose
   * Close menu after a link click.
   */
  const handleClose = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-100 dark:bg-slate-900/70 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-400 to-indigo-500 text-white shadow">
              <Sparkles size={18} />
            </span>
            <span
              className="font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
              style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
            >
              Nguyễn Tất Được
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLinkItem to="/" label="Home" />
            <NavLinkItem to="/about" label="About" />
            <NavLinkItem to="/skills" label="Skills" />
            <NavLinkItem to="/experience" label="Experience" />
            <NavLinkItem to="/projects" label="Projects" />
            <NavLinkItem to="/contact" label="Contact" />
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={open ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 transition"
              onClick={handleToggle}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 rounded-xl border border-slate-200 bg-white/90 backdrop-blur p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
            <div className="grid gap-1">
              <NavLinkItem to="/" label="Home" onClick={handleClose} />
              <NavLinkItem to="/about" label="About" onClick={handleClose} />
              <NavLinkItem to="/skills" label="Skills" onClick={handleClose} />
              <NavLinkItem to="/experience" label="Experience" onClick={handleClose} />
              <NavLinkItem to="/projects" label="Projects" onClick={handleClose} />
              <NavLinkItem to="/contact" label="Contact" onClick={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
