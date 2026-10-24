import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const NAV_ITEMS = [
  { label: 'home', to: '/' },
  { label: 'projects', to: '/projects' },
  { label: 'skills', to: '/skills' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (to) => location.pathname === to

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-snap ${
        scrolled ? 'bg-carbon-950/90 backdrop-blur-md border-b border-carbon-700' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Kurian Manuel — back to top"
        >
          <img
            src="/logo.png"
            alt="KM"
            className="w-8 h-8 transition-all duration-150 opacity-80 hover:opacity-100"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'text-lime' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-lime transition-colors duration-150">
            <Github size={16} strokeWidth={1.75} />
          </a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-lime transition-colors duration-150">
            <Linkedin size={16} strokeWidth={1.75} />
          </a>
          <a href={`mailto:${portfolioData.social.email}`} className="text-slate-muted hover:text-lime transition-colors duration-150">
            <Mail size={16} strokeWidth={1.75} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-carbon-950 border-b border-carbon-700 px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-sm uppercase tracking-widest text-left ${isActive(item.to) ? 'text-lime' : 'text-slate-secondary'}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 pt-2">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-muted">
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-muted">
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
            <a href={`mailto:${portfolioData.social.email}`} className="text-slate-muted">
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
