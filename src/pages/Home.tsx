/**
 * Home.tsx
 * Hero section with avatar, friendly headline, typing role effect, and quick CTAs. Optimized for mobile.
 */

import { Button } from '../components/ui/button'
import { ArrowRight, Send, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router'
import React from 'react'
import useTyping from '../hooks/useTyping'

/**
 * HomePage
 * Landing hero highlighting the name "Nguyễn Tất Được" and animated roles.
 */
export default function HomePage(): JSX.Element {
  // Typing roles to express focus and interests
  const typed = useTyping({
    words: [
      'Creative Content & E-commerce',
      'E-commerce: Shopee • TikTok Shop',
      'AI đa nền tảng: image • video • audio',
      'Marketing thực chiến',
    ],
    typeSpeed: 55,
    deleteSpeed: 35,
    delayBetween: 1000,
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-10 md:py-20">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs text-orange-700 shadow-sm backdrop-blur dark:border-orange-300/30 dark:bg-slate-900/60 dark:text-orange-200">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            Sẵn sàng học hỏi & thích nghi nhanh
          </div>

          <h1 className="mt-4 text-[28px] leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-100">
            Xin chào, mình là
            <span className="ml-2 bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Nguyễn Tất Được
            </span>
          </h1>

          {/* Typing line */}
          <p className="mt-3 text-base text-slate-700 sm:text-lg dark:text-slate-300">
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-slate-800 align-middle dark:bg-slate-200" />
          </p>

          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Mục tiêu: phát triển nghề nghiệp trong lĩnh vực Content &amp; E-commerce,
            áp dụng AI để tăng hiệu suất sản xuất nội dung và tối ưu vận hành sàn.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/projects">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Xem dự án
                <FolderGit2 className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent">
                Liên hệ
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Tìm hiểu thêm
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Quick skill badges */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              'Content',
              'Shopee',
              'TikTok Shop',
              'AI (image/video/audio)',
              'Social Media',
              'QC hóa đơn Hà Lan (BPO)',
              'Marketing (DTC Holdings)',
            ].map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Avatar */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-indigo-200/50 via-sky-200/50 to-emerald-200/50 blur-xl dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
            {/* Known URL image */}
            <img
              src="https://pub-cdn.sider.ai/u/U01AH8W4E6K/web-coder/6899f62ea616cfbf0667f39a/resource/50fc2382-2be8-4980-9743-b45304d7492b.jpg"
              alt="Ảnh đại diện"
              className="h-72 w-full object-cover sm:h-96 md:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
