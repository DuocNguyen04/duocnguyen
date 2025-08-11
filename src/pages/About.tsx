/**
 * About.tsx
 * Short summary, learning journey and development direction with timeline.
 */

import SEO from '../components/SEO'
import Section from '../components/Section'
import Timeline, { TimelineItem } from '../components/Timeline'

/**
 * AboutPage
 * Presents background and goals using an animated timeline.
 */
export default function AboutPage() {
  const items: TimelineItem[] = [
    {
      id: 'study',
      title: 'Quá trình học tập',
      time: '—',
      content: (
        <p>
          Tích lũy kiến thức về Marketing số, Content và vận hành E‑commerce. Chủ động thực hành qua các dự án nhỏ cá nhân.
        </p>
      ),
    },
    {
      id: 'direction',
      title: 'Định hướng phát triển',
      time: '2025 →',
      content: (
        <p>
          Tập trung vào Content đa nền tảng và tối ưu hiệu quả bán hàng trên Shopee/TikTok Shop. Kết hợp AI (ảnh, video, âm thanh)
          để tạo quy trình sáng tạo nhanh – gọn – tối ưu.
        </p>
      ),
    },
    {
      id: 'strengths',
      title: 'Điểm mạnh nổi bật',
      time: 'Hiện tại',
      content: (
        <ul className="list-inside list-disc">
          <li>Kinh nghiệm thực chiến trên Shopee, TikTok Shop</li>
          <li>Xây dựng nội dung cho Web, Facebook, TikTok</li>
          <li>Kỹ năng AI đa nền tảng (image, video, audio)</li>
        </ul>
      ),
    },
  ]

  return (
    <>
      <SEO title="About | Portfolio" description="Giới thiệu bản thân, định hướng phát triển và điểm mạnh." />
      <Section title="Giới thiệu" subtitle="Tóm tắt hành trình học hỏi và định hướng phát triển">
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-slate-700">
              Mình yêu thích việc kể chuyện bằng dữ liệu và hình ảnh. Mục tiêu là tạo ra nội dung có chiều sâu,
              vừa thân thiện với người dùng vừa hỗ trợ chuyển đổi cho doanh nghiệp.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-orange-50/60 p-4 text-sm text-orange-800">
            Luôn đặt sự học hỏi lên hàng đầu – thử nghiệm, đo lường, cải thiện liên tục để tiến bộ mỗi ngày.
          </div>
        </div>

        <Timeline items={items} />
      </Section>
    </>
  )
}
