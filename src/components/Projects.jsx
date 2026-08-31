import React from 'react'
import { portfolioData } from '../portfolioData'
import { ArrowUpRightIcon, GithubIcon, ExternalLinkIcon, FolderIcon } from './Icons'

export const Projects = () => {
  const { projects } = portfolioData

  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Selected projects">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>02.</span>
          Projects
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="group-card">
            <div>
              {/* Header with Project Title & Quick Link Icons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                {/* <h3 style={{ fontSize: '1.05rem', fontWeight: '600' }}>
                  
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-hover-title"
                  >
                    <span>{project.title}</span>
                    <span className="arrow-icon">
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </a>
                </h3> */}

                {/* External Action Links */}
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {project.githubUrl && (
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View GitHub Repository"
                      title="GitHub Repository"
                      style={{ color: '#94a3b8', transition: 'color 0.2s ease', display: 'inline-flex' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#5eead4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View Live Project"
                      title="Live Demo"
                      style={{ color: '#94a3b8', transition: 'color 0.2s ease', display: 'inline-flex' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#5eead4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{ marginTop: '0.75rem', fontSize: '0.925rem', color: '#94a3b8', lineHeight: '1.6' }}>
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <span style={{ color: '#5eead4', lineHeight: '1.4' }}>▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Tags */}
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Projects link */}
      <div style={{ marginTop: '2rem', paddingLeft: '1.5rem' }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
          className="link-hover-title mono"
          style={{ fontSize: '0.875rem', fontWeight: '600', color: '#f8fafc' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FolderIcon className="w-4 h-4" style={{ color: '#5eead4' }} />
            <span>View Full Project Archive on GitHub</span>
          </span>
          <span className="arrow-icon">
            <ArrowUpRightIcon className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
