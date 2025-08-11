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
    { label: 'Quản lý Shopee / TikTok Shop', icon: <Store size={16} /> },
    { label: 'AI – Image', icon: <Image size={16} /> },
    { label: 'AI – Video', icon: <Video size={16} /> },
    { label: 'AI – Audio', icon: <AudioLines size={16} /> },
    { label: 'Social Media Content', icon: <Share2 size={16} /> },
    { label: 'Landing Page', icon: <Globe size={16} /> },
    { label: 'Python/Java', icon: <Database size={16} /> },
    { label: 'Marketing (DTC Holdings)', icon: <Megaphone size={16} /> },
  ]

  return (
    <>
      <SEO title="Skills | Portfolio" description="Các kỹ năng nổi bật: Content, E-commerce, AI đa nền tảng, Social, Web development, Data analysis, Kế toán hóa đơn, Marketing." />
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
