import React, { useMemo, useState, useEffect } from 'react'
import { portfolioData } from '../portfolioData'
import { ExternalLinkIcon, XCloseIcon, ZoomInIcon } from './Icons'

export const Certificates = () => {
  const { certificates } = portfolioData
  const [selectedId, setSelectedId] = useState(certificates[0]?.id ?? null)
  const [modalCertificate, setModalCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const selectedCertificate = useMemo(() => {
    return certificates.find((certificate) => certificate.id === selectedId) || certificates[0]
  }, [certificates, selectedId])

  const openModal = (cert) => {
    setModalCertificate(cert)
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

  if (!selectedCertificate) {
    return null
  }

  return (
    <section id="certificates" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Professional certificates">
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>04.</span>
          Certificates
        </h2>
      </div>

      <div className="certificates-section">
        <div className="certificates-layout">
          {/* Certificate Selector List */}
          <div className="certificate-list" role="tablist" aria-label="Certificates list">
            {certificates.map((certificate) => {
              const isSelected = selectedCertificate.id === certificate.id

              return (
                <button
                  key={certificate.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`certificate-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedId(certificate.id)
                    openModal(certificate)
                  }}
                  title="Click to view full certificate"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="certificate-thumb-box">
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} thumbnail`}
                      className="certificate-thumb"
                      loading="lazy"
                    />
                  </div>

                  <div className="certificate-card-copy">
                    <div className="certificate-item-header">
                      <span className="certificate-item-org">{certificate.organization}</span>
                      <span className="certificate-item-date mono">{certificate.date}</span>
                    </div>
                    <h3 className="certificate-item-title">{certificate.title}</h3>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detailed Selected Certificate Preview Card */}
          <div
            className="certificate-preview-card"
            role="tabpanel"
            aria-label={`${selectedCertificate.title} details`}
          >
            <div
              className="certificate-image-frame"
              onClick={() => openModal(selectedCertificate)}
              title="Click to expand certificate"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-preview-image"
              />
              <div className="image-hover-hint">
                <ZoomInIcon className="w-5 h-5" style={{ color: '#5eead4' }} />
                <span>Click to expand</span>
              </div>
            </div>

            <div className="certificate-info">
              <div className="certificate-info-header">
                <span className="certificate-label mono">Certificate</span>
                <span className="certificate-date mono">Issued {selectedCertificate.date}</span>
              </div>

              <h3 className="certificate-title">{selectedCertificate.title}</h3>
              <p className="certificate-organization">{selectedCertificate.organization}</p>
              <p className="certificate-description">{selectedCertificate.description}</p>

              {selectedCertificate.credentialId && (
                <div className="certificate-credential">
                  <span className="mono">Credential ID</span>
                  <strong>{selectedCertificate.credentialId}</strong>
                </div>
              )}

              {/* Single Clear Action Button */}
              <div className="certificate-actions">
                <button
                  type="button"
                  onClick={() => openModal(selectedCertificate)}
                  className="certificate-primary-button"
                  style={{ cursor: 'pointer' }}
                >
                  <span>View Full Certificate</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Certificate Viewer Modal */}
      {isModalOpen && modalCertificate && (
        <div
          className="portfolio-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={modalCertificate.title}
        >
          <div
            className="portfolio-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="portfolio-modal-header">
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', color: '#5eead4', letterSpacing: '0.05em' }}>
                  {modalCertificate.organization}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', marginTop: '0.2rem', lineHeight: '1.3' }}>
                  {modalCertificate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="portfolio-modal-close"
                aria-label="Close certificate modal"
              >
                <XCloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image (object-fit: contain, no cropping) */}
            <div className="portfolio-modal-body">
              <img
                src={modalCertificate.image}
                alt={modalCertificate.title}
                className="portfolio-modal-image"
              />
            </div>

            {/* Modal Footer */}
            <div className="portfolio-modal-footer">
              <span className="mono" style={{ fontSize: '0.775rem', color: '#94a3b8' }}>
                Issued {modalCertificate.date} {modalCertificate.credentialId ? `• ID: ${modalCertificate.credentialId}` : ''}
              </span>
              <button
                type="button"
                onClick={closeModal}
                className="certificate-primary-button"
                style={{ minHeight: '2.2rem', padding: '0.4rem 1rem', fontSize: '0.775rem' }}
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

