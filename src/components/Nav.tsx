'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LangToggle from './LangToggle'
import T from './T'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isProject = pathname.startsWith('/projects/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  if (isProject) {
    return (
      <nav className="scrolled">
        <a href="/" className="nav-logo">~/build-by-rosa</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LangToggle />
          <a href="/" className="nav-back"><T k="nav_back" /></a>
        </div>
      </nav>
    )
  }

  return (
    <>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <span className="mobile-close" onClick={closeMobile}>[ close ]</span>
        <a href="#about" onClick={closeMobile}><T k="nav_about" /></a>
        <a href="#projects" onClick={closeMobile}><T k="nav_projects" /></a>
        <a href="#experience" onClick={closeMobile}><T k="nav_experience" /></a>
        <a href="#stack" onClick={closeMobile}>stack</a>
        <a href="#contact" onClick={closeMobile}><T k="nav_contact" /></a>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="/" className="nav-logo">~/build-by-rosa</a>
        <ul className="nav-links">
          <li><a href="#about"><T k="nav_about" /></a></li>
          <li><a href="#projects"><T k="nav_projects" /></a></li>
          <li><a href="#experience"><T k="nav_experience" /></a></li>
          <li><a href="#stack">stack</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LangToggle />
          <a href="#contact" className="nav-cta"><T k="nav_contact" /></a>
        </div>
        <div className="nav-burger" onClick={() => setMobileOpen(true)}>
          <span /><span /><span />
        </div>
      </nav>
    </>
  )
}
