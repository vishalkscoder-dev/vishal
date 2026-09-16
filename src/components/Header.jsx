import React from 'react'
import { portfolioData } from '../portfolioData'
import {
  FileTextIcon,
  ArrowUpRightIcon
} from './Icons'

export const Header = ({ activeSection, onNavigate }) => {
  const { personal, socials, navItems } = portfolioData

  const scrollToSection = (e, id) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(id)
    }
  }

  const handleHeroClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('welcome')
    }
  }

  return (
    <header className="left-header">
      <div>
        {/* Availability Badge */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personal.status.text}</span>
          </div>
        </div>

        {/* Name & Title */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 2.75rem)', lineHeight: '1.1', fontWeight: '800', color: '#f8fafc', letterSpacing: '-0.03em' }}>
          <a href="#welcome" onClick={handleHeroClick} style={{ textDecoration: 'none', color: 'inherit' }}>
            {personal.name}
          </a>
        </h1>
        
        <h2 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#e2e8f0', marginTop: '0.75rem', letterSpacing: '-0.01em' }}>
          {personal.title}
        </h2>
        
        <p style={{ marginTop: '1rem', maxWidth: '320px', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {personal.tagline}
        </p>

        {/* Navigation */}
        <nav className="portfolio-nav" aria-label="In-page jump links">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="nav-indicator-line"></span>
                    <span className="mono" style={{ marginRight: '0.6rem', opacity: isActive ? 1 : 0.6, fontSize: '0.825rem' }}>
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links & Resume Button */}
      <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
        {/* Small text links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', fontSize: '0.85rem' }} className="mono">
          {socials
            .filter((social) => social.url && social.url.trim() !== '')
            .map((social, idx, arr) => (
              <React.Fragment key={social.name}>
                <a
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noreferrer noopener"
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.825rem',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5eead4')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  {social.name}
                </a>
                {idx < arr.length - 1 && <span style={{ color: '#475569' }}>|</span>}
              </React.Fragment>
            ))}
        </div>

        {personal.resumeUrl && (
          <div>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open Resume in new tab"
              title="View Resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(94, 234, 212, 0.3)',
                backgroundColor: 'rgba(94, 234, 212, 0.08)',
                color: '#5eead4',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(94, 234, 212, 0.18)'
                e.currentTarget.style.borderColor = 'rgba(94, 234, 212, 0.6)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(94, 234, 212, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(94, 234, 212, 0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Quick Contact shortcut hint */}
        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
          <span>Based in {personal.location}</span>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            style={{ color: '#5eead4', textDecoration: 'none', fontWeight: '500' }}
          >
            Say hello →
          </a>
        </div>
      </div>
    </header>
  )
}
