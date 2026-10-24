import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import LoadingScreen from './LoadingScreen'
import Dither from './Dither/Dither'
import { useState } from 'react'

export default function Layout() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-carbon-950">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.35]"
        aria-hidden="true"
      >
        <Dither
          waveColor={[0.28, 0.36, 0.06]}
          waveSpeed={0.03}
          waveFrequency={2.5}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
        />
      </div>

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}