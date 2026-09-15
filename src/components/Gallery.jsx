import React, { useState, useEffect } from 'react'
import { portfolioData } from '../portfolioData'
import { XCloseIcon, ZoomInIcon } from './Icons'

export const Gallery = () => {
  const { gallery } = portfolioData
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedImage(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Keyboard accessibility: ESC key closes modal & lock body scroll
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isModalOpen])

  if (!gallery || gallery.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Project and achievement gallery">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>05.</span>
          Gallery
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
          Milestones, project artifacts, and development records. Click any preview to open the full-resolution view.
        </p>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openModal(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openModal(item)
                }
              }}
              title={`View ${item.title}`}
            >
              <div className="gallery-thumb-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-thumb-image"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <ZoomInIcon className="w-5 h-5" style={{ color: '#5eead4' }} />
                  <span className="mono" style={{ fontSize: '0.75rem', color: '#f8fafc' }}>
                    View Full Image
                  </span>
                </div>
              </div>

              <div className="gallery-card-content">
                {item.category && (
                  <span className="mono" style={{ fontSize: '0.725rem', color: '#5eead4', letterSpacing: '0.04em' }}>
                    {item.category}
                  </span>
                )}
                <h3 className="gallery-card-title">{item.title}</h3>
                {item.caption && (
                  <p className="gallery-card-caption">{item.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="portfolio-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="portfolio-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="portfolio-modal-header">
              <div>
                {selectedImage.category && (
                  <span className="mono" style={{ fontSize: '0.75rem', color: '#5eead4', letterSpacing: '0.05em' }}>
                    {selectedImage.category}
                  </span>
                )}
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', marginTop: '0.2rem', lineHeight: '1.3' }}>
                  {selectedImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="portfolio-modal-close"
                aria-label="Close image viewer"
              >
                <XCloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Full Image (object-fit: contain) */}
            <div className="portfolio-modal-body">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="portfolio-modal-image"
              />
            </div>

            {/* Modal Footer */}
            <div className="portfolio-modal-footer">
              <span style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: '1.4' }}>
                {selectedImage.caption || selectedImage.title}
              </span>
              <button
                type="button"
                onClick={closeModal}
                className="certificate-primary-button"
                style={{ minHeight: '2.2rem', padding: '0.4rem 1rem', fontSize: '0.775rem', flexShrink: 0 }}
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
