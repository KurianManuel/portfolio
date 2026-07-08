import { useEffect, useRef, useState } from 'react'

// Detects touch-primary devices so the custom cursor never renders on mobile.
// Also respects prefers-reduced-motion since cursor-follow is a motion effect.
function shouldEnableCursor() {
  if (typeof window === 'undefined') return false
  const isTouchPrimary = window.matchMedia('(pointer: coarse)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isWideEnough = window.innerWidth >= 1024
  return !isTouchPrimary && !prefersReducedMotion && isWideEnough
}

export function useCustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    setEnabled(shouldEnableCursor())

    const handleResize = () => setEnabled(shouldEnableCursor())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (enabled) {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = ''
    }
    return () => { document.body.style.cursor = '' }
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Lag the dot behind the actual cursor position for a ~80ms feel
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.18
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.x - 4}px, ${posRef.current.y - 4}px, 0)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [enabled])

  return { enabled, dotRef }
}
