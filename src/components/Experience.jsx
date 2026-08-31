import React from 'react'
import { portfolioData } from '../portfolioData'
import { ArrowUpRightIcon, FileTextIcon } from './Icons'

export const Experience = () => {
  const { experiences } = portfolioData

  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>02.</span>
          Experience
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="group-card">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '1rem' }}>
              {/* Timeline Period */}
              <div className="mono" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {exp.period}
              </div>

              {/* Details */}
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', lineHeight: '1.4' }}>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-hover-title"
                  >
                    <span>{exp.role} · <span style={{ color: '#5eead4' }}>{exp.company}</span></span>
                    <span className="arrow-icon">
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </a>
                </h3>

                <p style={{ marginTop: '0.65rem', fontSize: '0.925rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <span style={{ color: '#5eead4', lineHeight: '1.4' }}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Resume Link */}
      <div style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
        <a
          href="#contact"
          className="link-hover-title mono"
          style={{ fontSize: '0.875rem', fontWeight: '600', color: '#f8fafc' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileTextIcon className="w-4 h-4" style={{ color: '#5eead4' }} />
            <span>Request Full Curriculum Vitae & References</span>
          </span>
          <span className="arrow-icon">
            <ArrowUpRightIcon className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
