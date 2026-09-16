import React, { useState, useEffect, useRef } from 'react'
import { Spotlight } from './components/Spotlight'
import { HeroVideo } from './components/HeroVideo'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certificates } from './components/Certificates'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('welcome')
  const [isWelcomeFade, setIsWelcomeFade] = useState(false)
  const [isPendingFade, setIsPendingFade] = useState(false)
  const welcomeFadeRef = useRef({ pending: false, triggered: false })

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
    if (sectionId === 'welcome') {
      if (window.scrollY < 120) {
        setIsPendingFade(false)
        setIsWelcomeFade(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => {
          setIsWelcomeFade(false)
        }, 800)
        return
      }

      setIsPendingFade(true)
      welcomeFadeRef.current = { pending: true, triggered: false }
      window.scrollTo({ top: 0, behavior: 'smooth' })

      setTimeout(() => {
        if (welcomeFadeRef.current.pending && !welcomeFadeRef.current.triggered) {
          welcomeFadeRef.current.triggered = true
          welcomeFadeRef.current.pending = false
          setIsPendingFade(false)
          setIsWelcomeFade(true)
          setTimeout(() => setIsWelcomeFade(false), 800)
        }
      }, 500)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const isMobile = window.innerWidth < 1024
      const offset = isMobile ? 60 : 96
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const sectionIds = ['welcome', 'about', 'projects', 'skills', 'certificates', 'gallery', 'contact']

    const handleScroll = () => {
      // If navigating to welcome via button, trigger fade as Welcome appears
      if (welcomeFadeRef.current.pending && !welcomeFadeRef.current.triggered) {
        if (window.scrollY <= Math.min(window.innerHeight * 0.7, 500)) {
          welcomeFadeRef.current.triggered = true
          welcomeFadeRef.current.pending = false
          setIsPendingFade(false)
          setIsWelcomeFade(true)
          setTimeout(() => setIsWelcomeFade(false), 800)
        }
      }

      // When at or near the top, welcome section is active
      if (window.scrollY < window.innerHeight * 0.45) {
        setActiveSection('welcome')
        return
      }

      let currentSection = 'welcome'
      for (const id of sectionIds) {
        if (id === 'welcome') continue
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.45) {
            currentSection = id
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        currentSection = 'contact'
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Dynamic Cursor Spotlight Overlay */}
      <Spotlight />

      {/* Full Edge-to-Edge Hero Video Backdrop Layer */}
      <HeroVideo isVisible={activeSection === 'welcome'} isFading={isWelcomeFade} isPendingFade={isPendingFade} />

      {/* Main Two-Column Container */}
      <div className="portfolio-layout" style={{ position: 'relative', zIndex: 1 }}>
        {/* Left Sticky Header & Nav */}
        <Header activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Right Scrollable Content */}
        <main className="right-content">
          {/* Welcome section: occupies the initial Welcome viewport on the right */}
          <section id="welcome" className="welcome-hero-section" aria-label="Welcome" />

          <About />
          <Projects />
          <Skills />
          <Certificates />
          <Gallery />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
