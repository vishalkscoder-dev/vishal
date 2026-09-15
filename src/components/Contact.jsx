import React, { useState } from 'react'
import { portfolioData } from '../portfolioData'
import { postContact } from '../services/api'
import {
  CopyIcon,
  CheckIcon,
  SendIcon
} from './Icons'

export const Contact = () => {
  const { contact, personal } = portfolioData
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    showToast('Email copied to clipboard!')
    setTimeout(() => setCopied(false), 2500)
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3500)
  }

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!formState.name || !formState.email || !formState.phone || !formState.subject || !formState.message) {
      showToast('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await postContact(formState)
      setSubmittedName(formState.name)
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(true)
      showToast(response.message)
    } catch (error) {
      const fieldErrors = error.errors
        ? Object.values(error.errors).flat().join(' ')
        : error.message
      showToast(fieldErrors || 'Unable to send your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
    setSubmittedName('')
    setSubmitted(false)
  }

  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24" aria-label="Contact information and form">
      {/* Mobile Sticky Section Header */}
      <div className="mobile-section-header">
        <h2 style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f8fafc' }}>
          <span className="mono" style={{ color: '#5eead4', marginRight: '0.5rem' }}>06.</span>
          Contact
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Intro */}
        <div>
          <span className="mono" style={{ fontSize: '0.875rem', color: '#5eead4', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>
            06. What&apos;s Next?
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#f8fafc', letterSpacing: '-0.02em' }}>
            {contact.heading}
          </h3>
          <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.65' }}>
            {contact.pitch}
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {/* Email Quick Action Card */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#5eead4', fontSize: '0.8rem', fontWeight: '600' }} className="mono">
                <span>DIRECT INBOX</span>
              </div>
              <p style={{ marginTop: '0.5rem', color: '#f8fafc', fontWeight: '600', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                {personal.email}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', flex: 1 }}
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
                    <span style={{ color: '#4ade80' }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', flex: 1 }}
              >
                <span>Mail App</span>
              </a>
            </div>
          </div>

          {/* Location & Status Card */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(30, 41, 59, 0.4)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#38bdf8', fontSize: '0.8rem', fontWeight: '600' }} className="mono">
                <span>LOCATION & AVAILABILITY</span>
              </div>
              <p style={{ marginTop: '0.5rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                {contact.location}
              </p>
            </div>
            
            <div style={{ fontSize: '0.8rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="status-dot" style={{ width: '0.4rem', height: '0.4rem' }}></span>
              <span>{contact.availabilityNote}</span>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form Card */}
        <div
          style={{
            padding: '1.75rem',
            backgroundColor: 'rgba(30, 41, 59, 0.45)',
            backdropFilter: 'blur(12px)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(148, 163, 184, 0.15)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc' }}>
              Send a Direct Message
            </h4>
            <span className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Quick Dispatch
            </span>
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}
              >
                <CheckIcon className="w-8 h-8" />
              </div>
              <h5 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.5rem' }}>
                Message Sent Successfully!
              </h5>
              <p style={{ color: '#94a3b8', fontSize: '0.925rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                Thank you for reaching out, {submittedName || 'there'}! I have received your note and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" className="form-label">
                    Your Name <span style={{ color: '#5eead4' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Your Email <span style={{ color: '#5eead4' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span style={{ color: '#5eead4' }}>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. +1 555 123 4567"
                    value={formState.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="form-label">
                  Subject / Topic <span style={{ color: '#5eead4' }}>*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Opportunity / Collaboration / Project"
                  value={formState.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Your Message <span style={{ color: '#5eead4' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Hello Vishal, I would love to discuss a project / role with you..."
                  value={formState.message}
                  onChange={handleChange}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  🔒 Your information is sent directly and kept private.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ minWidth: '160px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{toastMessage}</span>
        </div>
      )}
    </section>
  )
}
