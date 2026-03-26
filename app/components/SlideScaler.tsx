'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'

const SLIDE_W = 1920
const SLIDE_H = 1080

export default function SlideScaler({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function updateScale() {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const s = Math.min(vw / SLIDE_W, vh / SLIDE_H)
      setScale(s)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div
      ref={containerRef}
      className="slide-viewport"
    >
      <div
        className="slide-scaler"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
