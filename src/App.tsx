/**
 * App.tsx
 * Main router configuration with a sticky navbar and page routes.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import SkillsPage from './pages/Skills'
import ExperiencePage from './pages/Experience'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { Toaster } from 'sonner'
import ThemeProvider from './components/ThemeProvider'

/**
 * App
 * Provides global layout: SEO defaults, ThemeProvider, Navbar, Router, and Toaster.
 */
export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        {/* Basic site-wide SEO defaults */}
        <SEO
          title="Nguyễn Tất Được | Portfolio"
          description="Portfolio cá nhân của Nguyễn Tất Được – Content, E-commerce (Shopee/TikTok Shop), AI đa nền tảng và Marketing."
        />
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <Navbar />
          <main className="pt-20">
            {/* Keep top padding for sticky navbar height */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster richColors position="top-center" />
      </HashRouter>
    </ThemeProvider>
  )
}
