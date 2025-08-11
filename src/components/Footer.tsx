/**
 * Footer.tsx
 * Simple responsive footer with a soft gradient bar.
 */

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 dark:border-slate-800">
      <div className="h-1 w-full bg-gradient-to-r from-orange-300 via-indigo-400 to-sky-300 opacity-60" />
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Nguyễn Tất Được. Made with love & curiosity.
      </div>
    </footer>
  )
}
