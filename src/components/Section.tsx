/**
 * Section.tsx
 * Khối nội dung chuẩn với tiêu đề, mô tả ngắn và vùng children có spacing đẹp.
 */

import React from 'react'

/** SectionProps
 * API cho khối Section với tiêu đề, phụ đề và className tùy chỉnh.
 */
export interface SectionProps {
  /** Tiêu đề của section */
  title: string
  /** Phụ đề (mô tả ngắn) */
  subtitle?: string
  /** Nội dung con */
  children?: React.ReactNode
  /** Thêm className cho section wrapper */
  className?: string
}

/**
 * Section
 * Bao bọc khối nội dung theo max-width chuẩn, có header với thanh nhấn màu gradient.
 */
export default function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 ${className ?? ''}`}>
      {/* Header section với thanh nhấn gradient */}
      <div className="mb-6">
        <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-orange-400 via-indigo-500 to-sky-400" />
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
        )}
      </div>

      {/* Nội dung */}
      <div className="text-slate-700 dark:text-slate-300">{children}</div>
    </section>
  )
}
