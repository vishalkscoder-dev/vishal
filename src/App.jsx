import React, { useState } from 'react'
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

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Dynamic Cursor Spotlight Overlay */}
      <Spotlight />

      {/* Full Edge-to-Edge Hero Video Backdrop Layer */}
      <HeroVideo isVisible={activeSection === 'welcome'} />

      {/* Main Two-Column Container */}
      <div className="portfolio-layout" style={{ position: 'relative', zIndex: 1 }}>
        {/* Left Sticky Header & Nav */}
        <Header activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Right Scrollable Content */}
        <main className="right-content">
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'certificates' && <Certificates />}
          {activeSection === 'gallery' && <Gallery />}
          {activeSection === 'contact' && <Contact />}

          {activeSection !== 'welcome' && <Footer />}
        </main>
      </div>
    </div>
  )
}

export default App
