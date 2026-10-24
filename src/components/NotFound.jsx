import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ASCIIText from './ASCIIText/ASCIIText'
import Dither from './Dither/Dither'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl w-full text-center">
        <p className="opacity-0 animate-fade-up font-mono text-xs md:text-sm tracking-[0.2em] text-lime-muted uppercase mb-6">
          // 404 — route not found
        </p>

        <div aria-hidden="true" className="opacity-0 animate-fade-up-delay mb-10">
          <div className="relative w-[200px] h-24 sm:w-[280px] sm:h-32 md:w-[360px] md:h-40 mx-auto">
            <ASCIIText
              text="404"
              enableWaves={false}
              enableMouseInteraction={false}
              asciiFontSize={8}
              textFontSize={180}
              planeBaseHeight={12}
            />
          </div>
        </div>

        <p className="opacity-0 animate-fade-up-delay font-mono text-sm md:text-base tracking-wider text-slate-muted mb-12">
          The path you requested does not exist in this network.
        </p>

        <Link
          to="/"
          className="opacity-0 animate-fade-up-delay inline-flex items-center gap-2 btn-secondary"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          go.home()
        </Link>
      </div>
    </section>
  )
}