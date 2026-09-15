import React, { useState, useEffect, useRef } from 'react'
import heroVideoSrc from '../assets/vishal.mp4'

// Dynamically resolve local video file placed in assets or public
const videoModules = import.meta.glob('../assets/*.mp4', { eager: true, import: 'default' })
const resolvedHeroVideo =
  heroVideoSrc ||
  videoModules['../assets/vishal.mp4'] ||
  videoModules['../assets/hero-background.mp4'] ||
  Object.values(videoModules)[0] ||
  null

export const HeroVideo = ({ isVisible = true }) => {
  const [heroHeight, setHeroHeight] = useState('100vh')
  const videoRef = useRef(null)

  useEffect(() => {
    const updateHeroHeight = () => {
      const aboutEl = document.getElementById('about')
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect()
        const scrollY = window.pageYOffset || document.documentElement.scrollTop
        const aboutBottom = rect.bottom + scrollY
        // Covers full initial viewport height (100vh) or down past the bottom of the About section
        const minHeight = window.innerHeight
        const calculatedHeight = Math.max(minHeight, Math.round(aboutBottom + 48))
        setHeroHeight(`${calculatedHeight}px`)
      } else {
        setHeroHeight('100vh')
      }
    }

    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)
    const timer = setTimeout(updateHeroHeight, 250)

    let ro = null
    const aboutEl = document.getElementById('about')
    if (typeof ResizeObserver !== 'undefined' && aboutEl) {
      ro = new ResizeObserver(updateHeroHeight)
      ro.observe(aboutEl)
    }

    return () => {
      window.removeEventListener('resize', updateHeroHeight)
      clearTimeout(timer)
      if (ro) ro.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [isVisible])

  return (
    <div
      className="hero-video-backdrop"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh',
        height: heroHeight,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        display: isVisible ? 'block' : 'none'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={(el) => {
          videoRef.current = el
          if (el) el.muted = true
        }}
        tabIndex={-1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none'
        }}
      >
        {resolvedHeroVideo && <source src={resolvedHeroVideo} type="video/mp4" />}
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark backdrop overlay across the FULL video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.80) 65%, rgba(15, 23, 42, 0.94) 88%, #0f172a 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}
