import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Dither from './components/Dither/Dither'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-carbon-950">
      {/* Dithered carbon/lime backdrop — fixed behind all content, non-interactive.
          The Hero paints its own opaque background so its VANET graphic stays untouched. */}
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
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <About />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
