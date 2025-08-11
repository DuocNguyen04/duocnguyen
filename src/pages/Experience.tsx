/**
 * Experience.tsx
 * Experience timeline with animated reveal on scroll.
 */

import SEO from '../components/SEO'
import Section from '../components/Section'
import Timeline, { TimelineItem } from '../components/Timeline'

/**
 * ExperiencePage
 * Presents work and practical experience in a clear timeline.
 */
export default function ExperiencePage() {
  const items: TimelineItem[] = [
    {
      id: 'dtc',
      title: 'DTC Holdings – Marketing',
      time: '—',
      content: (
        <p>
          Tham gia các hoạt động Marketing, hỗ trợ triển khai chiến dịch, tối ưu nội dung và đo lường hiệu quả.
        </p>
      ),
    },
    {
      id: 'bpo',
      title: 'BPO (Hà Lan) – Xử lý hóa đơn',
      time: '—',
      content: (
        <p>
          Kinh nghiệm xử lý – kiểm tra hóa đơn, cẩn thận tỉ mỉ và tuân thủ quy trình. Rèn sự chính xác và trách nhiệm.
        </p>
      ),
    },
    {
      id: 'ecom',
      title: 'Thực chiến Shopee / TikTok Shop',
      time: '—',
      content: (
        <ul className="list-inside list-disc">
          <li>Tạo nội dung bán hàng và tối ưu mô tả, hình ảnh, video.</li>
          <li>Phối hợp chương trình khuyến mãi, đánh giá hiệu quả.</li>
          <li>Nghiên cứu từ khóa, tối ưu hiển thị sản phẩm.</li>
        </ul>
      ),
    },
  ]

  return (
    <>
      <SEO title="Experience | Portfolio" description="Kinh nghiệm tại DTC Holdings (Marketing), BPO Hà Lan (hóa đơn), Shopee & TikTok Shop." />
      <Section title="Kinh nghiệm" subtitle="Những trải nghiệm quan trọng trong hành trình làm việc">
        <Timeline items={items} />
      </Section>
    </>
  )
}
