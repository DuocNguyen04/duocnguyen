/**
 * Contact.tsx
 * Trang liên hệ tối giản: bỏ form, chỉ giữ link Facebook và Email cá nhân.
 * Thiết kế nhấn mạnh 2 CTA, tối ưu cho mobile và đồng bộ dark/light mode.
 */

import SEO from '../components/SEO'
import Section from '../components/Section'
import { Button } from '../components/ui/button'
import { Facebook, Mail } from 'lucide-react'
import React from 'react'

/** Cấu hình nhanh: link Facebook và Email cá nhân của bạn */
const FACEBOOK_URL = 'https://www.facebook.com/duocnguyen15'
const EMAIL = 'duoc.ntd15@gmail.com'
const EMAIL_LINK = `mailto:${EMAIL}`

/**
 * ContactPage
 * Hiển thị 2 lựa chọn liên hệ: Facebook và Email.
 */
export default function ContactPage() {
  return (
    <>
      <SEO title="Contact | Portfolio" description="Kết nối nhanh qua Facebook hoặc email cá nhân." />
      <Section
        title="Liên hệ"
        subtitle="Chọn cách liên hệ thuận tiện nhất cho bạn – mình sẽ phản hồi sớm nhất."
      >
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Kết nối trực tiếp qua Facebook hoặc gửi email:
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {/* CTA Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nhắn Facebook"
              >
                <Button className="w-full gap-2 bg-[#1877F2] text-white hover:bg-[#166FE0]">
                  <Facebook size={18} />
                  Nhắn Facebook
                </Button>
              </a>

              {/* CTA Email */}
              <a href={EMAIL_LINK} aria-label="Gửi Email">
                <Button variant="outline" className="bg-transparent w-full gap-2">
                  <Mail size={18} />
                  Gửi Email
                </Button>
              </a>
            </div>

            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Email:{' '}
              <a href={EMAIL_LINK} className="font-medium underline underline-offset-4">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
