/**
 * ProjectCard.tsx
 * A portfolio project tile with hover lift and Dialog preview + rich details (meta, tags, highlights, gallery).
 */

import { Calendar, CheckCircle2, Briefcase, ExternalLink } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import SkillPill from './SkillPill'
import MediaCarousel from './MediaCarousel'

/** Project
 * Shape of project data with optional rich details
 */
export interface Project {
  id: string
  title: string
  cover: string
  description: string
  link?: string
  platform?: string
  year?: string
  role?: string
  tags?: string[]
  highlights?: string[]
  gallery?: string[]
}

/** ProjectCardProps
 * item: project info
 */
interface ProjectCardProps {
  item: Project
}

/**
 * ProjectCard
 * Displays a project thumbnail; clicking opens a dialog to view details.
 */
export default function ProjectCard({ item }: ProjectCardProps) {
  // Combine cover + gallery for the carousel if gallery exists
  const images = item.gallery && item.gallery.length > 0 ? [item.cover, ...item.gallery] : [item.cover]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={item.cover}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            {(item.platform || item.year) && (
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                {item.platform && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300">
                    <span className="i" /> {item.platform}
                  </span>
                )}
                {item.year && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                    <Calendar size={14} /> {item.year}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 gap-3">
        <DialogHeader>
          <DialogTitle className="text-lg">{item.title}</DialogTitle>
        </DialogHeader>

        {/* Media carousel */}
        <MediaCarousel images={images} ariaLabel={`${item.title} gallery`} />

        {/* Meta row */}
        {(item.role || item.platform || item.year) && (
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {item.role && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <Briefcase size={16} />
                <span className="font-medium">{item.role}</span>
              </div>
            )}
            {item.platform && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="font-medium">{item.platform}</span>
              </div>
            )}
            {item.year && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <Calendar size={16} />
                <span className="font-medium">{item.year}</span>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <SkillPill key={t} label={t} />
            ))}
          </div>
        )}

        {/* Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-3 space-y-2 rounded-xl bg-slate-50/80 p-4 dark:bg-slate-800/60">
            {item.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        {item.link && (
          <div className="mt-4">
            <a href={item.link} target="_blank" rel="noreferrer">
              <Button variant="outline" className="bg-transparent gap-2">
                Xem chi tiết
                <ExternalLink size={16} />
              </Button>
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
