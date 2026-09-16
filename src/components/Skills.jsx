import React from 'react'
import { portfolioData } from '../portfolioData'

export const Skills = () => {
  const { skillsData } = portfolioData

  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Technical skills">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>04.</span>
          Skills
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {skillsData.map((category, index) => (
          <div
            key={index}
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(30, 41, 59, 0.35)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              transition: 'border-color 0.2s ease, background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(94, 234, 212, 0.3)'
              e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)'
              e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.35)'
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#e2e8f0', letterSpacing: '-0.01em' }}>
                {category.category}
              </h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.items.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.15)',
                    borderRadius: '0.375rem',
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(94, 234, 212, 0.5)'
                    e.currentTarget.style.color = '#5eead4'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.15)'
                    e.currentTarget.style.color = '#e2e8f0'
                  }}
                >
                  <span style={{ fontWeight: '500' }}>{skill.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', opacity: 0.9 }}>• {skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
