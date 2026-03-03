/**
 * Skills.tsx
 * Grid of hoverable skill pills highlighting key abilities.
 */

import SEO from '../components/SEO'
import Section from '../components/Section'
import SkillPill from '../components/SkillPill'
import { Image, Video, AudioLines, PenTool, Store, Share2, ReceiptText, Megaphone, Globe, Database } from 'lucide-react'

/**
 * SkillsPage
 * Showcases core skills with icons and playful hover.
 */
export default function SkillsPage() {
  const skills = [
    { label: 'Content', icon: <PenTool size={16} /> },
    { label: 'Lập kế hoạch marketing', icon: <Megaphone size={16} /> },
    { label: 'Quản lý sàn (Hình ảnh, banner)', icon: <Store size={16} /> },
    { label: 'AI image', icon: <Image size={16} /> },
    { label: 'AI video', icon: <Video size={16} /> },
    { label: 'Landing Page', icon: <Globe size={16} /> },
    { label: 'SEO website', icon: <ReceiptText size={16} /> },
    { label: 'Tối ưu chỉ số ads', icon: <Share2 size={16} /> },
  ]

  return (
    <>
      <SEO title="Skills | Portfolio" description="Content, Lập kế hoạch marketing, Quản lý sàn (Hình ảnh, banner), AI image, AI video, Landing Page, SEO website, Tối ưu chỉ số ads." />
      <Section title="Kỹ năng" subtitle="Những gì mình làm tốt và yêu thích">
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <SkillPill key={s.label} label={s.label} icon={s.icon} />
          ))}
        </div>
      </Section>
    </>
  )
}
