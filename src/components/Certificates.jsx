import React, { useMemo, useState } from 'react'
import { portfolioData } from '../portfolioData'
import { ExternalLinkIcon, ArrowUpRightIcon } from './Icons'

export const Certificates = () => {
  const { certificates } = portfolioData
  const [selectedId, setSelectedId] = useState(certificates[0]?.id ?? null)

  const selectedCertificate = useMemo(() => {
    return certificates.find((certificate) => certificate.id === selectedId) || certificates[0]
  }, [certificates, selectedId])

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
                  onClick={() => setSelectedId(certificate.id)}
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
          <div className="certificate-preview-card" role="tabpanel" aria-label={`${selectedCertificate.title} details`}>
            <div className="certificate-image-frame">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-preview-image"
              />
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

              <div className="certificate-actions">
                <a
                  href={selectedCertificate.link || selectedCertificate.image}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="certificate-primary-button"
                >
                  <span>View Certificate</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>

                <a
                  href={selectedCertificate.image}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="certificate-secondary-button"
                >
                  <span>Open Full Image</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
