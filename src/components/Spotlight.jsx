import React, { useEffect, useState } from 'react'

export const Spotlight = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only enable mouse tracker on non-touch devices
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isHovering) setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovering])

  return (
    <div
      className="spotlight-overlay"
      style={{
        opacity: isHovering ? 1 : 0,
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.14), rgba(94, 234, 212, 0.05) 40%, transparent 80%)`,
      }}
      aria-hidden="true"
    />
  )
}
