import React, { useState, useEffect } from 'react'
import { Spotlight } from './components/Spotlight'
import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'certificates', 'contact']
    
    // Smooth scrollspy using IntersectionObserver
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="relative">
      {/* Dynamic Cursor Spotlight Overlay */}
      <Spotlight />

      {/* Main Two-Column Container */}
      <div className="portfolio-layout">
        {/* Left Sticky Header & Nav */}
        <Header activeSection={activeSection} />

        {/* Right Scrollable Content */}
        <main className="right-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            <About />
            {/* <Experience /> */}
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
