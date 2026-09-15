import React from 'react'
import { portfolioData } from '../portfolioData'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  CodeIcon,
  FileTextIcon,
  ArrowUpRightIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon
} from './Icons'

const iconMap = {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  CodeIcon,
  FileTextIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon
}

export const Header = ({ activeSection, onNavigate }) => {
  const { personal, socials, navItems } = portfolioData

  const scrollToSection = (e, id) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(id)
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleHeroClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('welcome')
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
        <h1 style={{ fontSize: '2.75rem', lineHeight: '1.1', fontWeight: '800', color: '#f8fafc', letterSpacing: '-0.03em' }}>
          <a href="/" onClick={handleHeroClick} style={{ textDecoration: 'none', color: 'inherit' }}>
            {personal.name}
          </a>
        </h1>
        
        <h2 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#e2e8f0', marginTop: '0.75rem', letterSpacing: '-0.01em' }}>
          {personal.title}
        </h2>
        
        <p style={{ marginTop: '1rem', maxWidth: '320px', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {personal.tagline}
        </p>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ marginTop: '3.5rem', display: 'none' }} aria-label="In-page jump links">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
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
                    <span className="mono" style={{ marginRight: '0.5rem', opacity: isActive ? 1 : 0.6, fontSize: '0.75rem' }}>
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
      <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {socials
            .filter((social) => social.url && social.url.trim() !== '')
            .map((social) => {
              const IconComponent = iconMap[social.icon] || MailIcon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noreferrer noopener"
                  className="social-icon-btn"
                  aria-label={social.label}
                  title={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}

          {personal.resumeUrl && (
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
          )}
        </div>

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
