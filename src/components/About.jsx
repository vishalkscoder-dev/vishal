import React from 'react'
import { portfolioData } from '../portfolioData'
import { SparklesIcon } from './Icons'

export const About = () => {
  const {about}  = portfolioData


  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24" aria-label="About me">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>01.</span>
            About
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: '#94a3b8', lineHeight: '1.75' }}>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

      </div>

      {/* Highlights list */}
      <div style={{ marginTop: '1.75rem', padding: '1.25rem', backgroundColor: 'rgba(30, 41, 59, 0.3)', borderRadius: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SparklesIcon className="w-4 h-4" style={{ color: '#5eead4' }} />
          <span>Core Engineering Focus</span>
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {about.highlights.map((highlight, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <span style={{ color: '#5eead4', lineHeight: '1.5' }}>▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
