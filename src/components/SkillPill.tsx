/**
 * SkillPill.tsx
 * Huy hiệu kỹ năng nhỏ gọn, tái sử dụng trong tags và danh sách kỹ năng.
 */

/** SkillPillProps
 * Nhận label (bắt buộc) để hiển thị trên pill.
 */
export interface SkillPillProps {
  /** Nội dung nhãn */
  label: string
  /** Icon tùy chọn */
  icon?: React.ReactNode
}

/**
 * SkillPill
 * Hiển thị pill với viền gradient subtle, phù hợp dark/light mode.
 */
export default function SkillPill({ label, icon }: SkillPillProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800"
      title={label}
    >
      {icon}
      {label}
    </span>
  )
}
