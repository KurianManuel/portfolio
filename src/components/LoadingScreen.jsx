import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let pageLoaded = false
    let timerDone = false

    const tryDismiss = () => {
      if (pageLoaded && timerDone) {
        // Small extra pause so the logo completes its current pulse cycle visually
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 500) // wait for fade-out before removing from DOM
        }, 300)
      }
    }

    // Minimum 1200ms floor regardless of actual load speed
    const timer = setTimeout(() => {
      timerDone = true
      tryDismiss()
    }, 1200)

    // Wait for actual page load
    if (document.readyState === 'complete') {
      pageLoaded = true
      tryDismiss()
    } else {
      const handleLoad = () => {
        pageLoaded = true
        tryDismiss()
      }
      window.addEventListener('load', handleLoad)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('load', handleLoad)
      }
    }

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[200] bg-carbon-950 flex items-center justify-center
                  transition-opacity duration-500 ease-premium
                  ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src="/logo.png"
          alt="Kurian Manuel"
          className="w-20 h-20 animate-pulse-logo"
          style={{ filter: 'invert(0) brightness(1)' }}
        />
      </div>
    </div>
  )
}
