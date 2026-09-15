import React from 'react'
import { portfolioData } from '../portfolioData'

export const Footer = () => {
  const { socials } = portfolioData

  return (
    <footer style={{ marginTop: '5rem', paddingBottom: '3rem', fontSize: '0.825rem', color: '#64748b', lineHeight: '1.6' }}>
      {/* Text-based Social Links */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.85rem 1.25rem', marginBottom: '1.5rem' }}>
        {socials
          .filter((s) => s.url && s.url.trim() !== '')
          .map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noreferrer noopener"
              className="mono"
              style={{
                fontSize: '0.78rem',
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#5eead4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              {social.name} ↗
            </a>
          ))}
      </div>

      <p>
        Loosely designed in code and inspired by the exceptional aesthetic of{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#5eead4')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          Brittany Chiang
        </a>
        .
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        Built with <span style={{ color: '#5eead4' }}>React 19</span> & <span style={{ color: '#38bdf8' }}>Vite</span>, styled with modern Vanilla CSS. Set in the{' '}
        <span style={{ color: '#e2e8f0' }}>Inter</span> & <span style={{ color: '#e2e8f0' }}>Fira Code</span> typefaces.
      </p>
      <p style={{ marginTop: '0.5rem', color: '#475569' }}>
        © {new Date().getFullYear()} K.S Vishal. All rights reserved.
      </p>
    </footer>
  )
}
