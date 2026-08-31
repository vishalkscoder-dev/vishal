import React from 'react'
import { portfolioData } from '../portfolioData'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  CodeIcon,
  FileTextIcon
} from './Icons'

const iconMap = {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  CodeIcon,
  FileTextIcon
}

export const Header = ({ activeSection }) => {
  const { personal, socials, navItems } = portfolioData

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 30
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
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
        <h1 style={{ fontSize: '2.75rem', lineHeight: '1.1', fontWeight: '800', color: '#f8fafc', letterSpacing: '-0.03em' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
      <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {socials.map((social) => {
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
