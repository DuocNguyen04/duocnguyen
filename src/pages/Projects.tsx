/**
 * Projects.tsx
 * Portfolio grid with hover and dialog preview. Thêm metadata chi tiết cho từng project.
 */

import SEO from '../components/SEO'
import Section from '../components/Section'
import ProjectCard, { Project } from '../components/ProjectCard'

/**
 * ProjectsPage
 * Displays content pieces với chi tiết: vai trò, nền tảng, năm, tags, highlights, gallery.
 */
export default function ProjectsPage() {
  /**
   * Dữ liệu demo: dùng ảnh thật (CDN) cho cover + smart placeholder cho gallery.
   * Bạn có thể thay link/ảnh thật sau này.
   */
  const data: Project[] = [
    {
      id: 'tiktok-content',
      title: 'TikTok Short – Sản phẩm A',
      cover:
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754926723/z6897420855291_62e22da9eddad1bff832e30d5efcc2b1_s1qznz.jpg',
      description:
        'Video ngắn 15–30s tập trung hook 3 giây đầu, CTA rõ ràng – tối ưu cho chuyển đổi.',
      platform: 'TikTok',
      year: '2025',
      role: 'Content Creator / Editor',
      tags: ['Hook 3s', 'Voice-over', 'Caption A/B', 'CTA', 'AI edit'],
      highlights: [
        'Tỷ lệ xem dài > 20s so với trung bình ngành.',
        'Tạo 2 phiên bản caption A/B để test từ khóa và CTA.',
        'Dùng AI để khử nhiễu âm, tự động cân bằng màu, hiệu ứng chuyển động.',
      ],
      gallery: [
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754926780/z6897422960082_ae7d5bd2a90561120782100e7741dcc5_jhigdh.jpg',
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754926631/z6897416684984_52aa8c9f18fe968bdb967c2cbe5d0eeb_tr65g1.jpg',
      ],
      link: 'https://www.tiktok.com/@tamnongvn',
    },
    {
      id: 'fb-post',
      title: 'Facebook Post – Chia sẻ tips',
      cover:
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754926052/z6897391631862_1d3891bf85b02aa32e191f34db3df744_xt8qds.jpg',
      description:
        'Album ảnh + caption ngắn gãy gọn, nhấn mạnh lợi ích và USP, tối ưu hashtag.',
      platform: 'Facebook',
      year: '2024',
      role: 'Content Writer / Designer',
      tags: ['Album', 'Caption ngắn', 'Hashtag', 'Canva', 'Insight'],
      highlights: [
        'Tăng tương tác bài viết +28% so với trung bình page.',
        'Thiết kế template có thể tái sử dụng cho series “Tips”.',
      ],
      gallery: [
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754925657/z6897372780367_260b5e596b9eb232504d4a0d000327ff_or7ocj.jpg',
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754925480/z6897360545265_241cc0a990ee390f955fb0d637a53650_et0pyf.jpg',
      ],
      link: 'https://www.facebook.com/tamnong.vietnam',
    },
    {
      id: 'shopee-banner',
      title: 'Shopee Banner – Bộ nhận diện',
      cover:
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754927810/z6897455378507_ad413c44127143ac102f8eb4aa96bc90_xjjzut.jpg',
      description:
        'Banner tone cam – navy nổi bật, headline rõ, nhấn offer và điểm tin cậy.',
      platform: 'Shopee',
      year: '2025',
      role: 'Visual Designer',
      tags: ['Hero banner', 'KOL badge', 'USP', 'Promo box', 'CTR'],
      highlights: [
        'Bố cục F-pattern, nhấn CTA rõ ở vùng nóng.',
        'Tối ưu kích thước và dung lượng cho trang gian hàng.',
      ],
      gallery: [
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754927810/z6897462773077_9ab135b7c52d3c4b604211512ffe5fc3_n7mcrx.jpg',
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754927810/z6897459297833_936c5d8b3a304d8fec3a3c3cb81c109b_apxwl8.jpg',
      ],
    },
    {
      id: 'web-hero',
      title: 'UI/UX Design – Landing Page',
      cover:
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754928223/z6897473457145_e85cb0af20232a9dce167e04b8d0c148_jvfs2k.jpg',
      description:
        'Thiết kế UI/UX chuyên nghiệp cho landing page với user journey tối ưu, responsive design và conversion-focused.',
      platform: 'Website',
      year: '2025',
      role: 'UI/UX Designer',
      tags: ['UI/UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Responsive'],
      highlights: [
        'Thực hiện user research và tạo user personas để thiết kế phù hợp với target audience.',
        'Thiết kế responsive cho mobile-first approach, đảm bảo trải nghiệm tốt trên mọi thiết bị.',
      ],
      gallery: [
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754928223/z6897475173729_f7157d5924528708f5ba517ab5fbd439_kkufzm.jpg',
        'https://res.cloudinary.com/diiv0wyzv/image/upload/v1754928223/z6897477142948_c9296f5218b5edfc32d7e8fec8b48ecc_btl4mk.jpg',
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Projects | Portfolio"
        description="Một số sản phẩm content mẫu cho TikTok, Facebook, Shopee với mô tả chi tiết."
      />
      <Section title="Dự án / Công việc tiêu biểu" subtitle="Hover để xem nhanh, click để mở chi tiết">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <ProjectCard key={p.id} item={p} />
          ))}
        </div>
      </Section>
    </>
  )
}
