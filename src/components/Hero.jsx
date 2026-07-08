import { portfolioData } from '../data/portfolioData'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ASCIIText from './ASCIIText/ASCIIText'

const NODES = [
  [180, 140], [420, 240], [680, 120], [380, 480],
  [950, 220], [650, 560], [1080, 480], [900, 680]
]

// Extended adjacency - more edges, no dead ends
const ADJACENCY = [
  [1, 3, 2],       // 0 — added 2 (symmetric with 2→0)
  [0, 2, 3, 4],    // 1
  [1, 4, 0],       // 2
  [0, 1, 5, 4],    // 3
  [2, 3, 5, 6, 1], // 4 — added 1 (symmetric with 1→4)
  [3, 4, 7, 6],    // 5
  [4, 5, 7],       // 6
  [5, 6],          // 7
]

const TRAVEL_DURATION = () => 2500 + Math.random() * 2000
const PAUSE_DURATION = () => 300 + Math.random() * 500

function pickNext(current, lastVisited) {
  const neighbours = ADJACENCY[current]
  const unvisited = neighbours.filter(n => n !== lastVisited)
  const pool = unvisited.length > 0 ? unvisited : neighbours
  return pool[Math.floor(Math.random() * pool.length)]
}

function usePacketWalk(startNode) {
  const [pos, setPos] = useState({ x: NODES[startNode][0], y: NODES[startNode][1] })
  const [opacity, setOpacity] = useState(0)
  const stateRef = useRef({ current: startNode, last: -1 })
  const rafRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    let mounted = true

    function travel() {
      if (!mounted) return
      const { current, last } = stateRef.current
      const next = pickNext(current, last)
      const [x1, y1] = NODES[current]
      const [x2, y2] = NODES[next]
      const duration = TRAVEL_DURATION()
      const start = performance.now()

      setOpacity(1)

      function frame(now) {
        if (!mounted) return
        const t = Math.min((now - start) / duration, 1)
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        setPos({ x: x1 + (x2 - x1) * ease, y: y1 + (y2 - y1) * ease })
        if (t < 1) {
          rafRef.current = requestAnimationFrame(frame)
        } else {
          stateRef.current = { current: next, last: current }
          setOpacity(0)
          timeoutRef.current = setTimeout(() => { if (mounted) travel() }, PAUSE_DURATION())
        }
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    timeoutRef.current = setTimeout(travel, Math.random() * 3000)

    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return { pos, opacity }
}

const PACKET_STARTS = [0, 2, 4, 6]

function Packet({ startNode }) {
  const { pos, opacity } = usePacketWalk(startNode)
  return (
    <circle
      cx={pos.x} cy={pos.y} r="3.5"
      fill="#C8FF34" opacity={opacity}
      style={{ filter: 'drop-shadow(0 0 4px #C8FF34)', transition: 'opacity 0.2s ease' }}
    />
  )
}

export default function Hero() {
  const { hero } = portfolioData

  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  // Deduplicated edge list from adjacency
  const edges = []
  ADJACENCY.forEach((neighbours, i) => {
    neighbours.forEach(j => { if (j > i) edges.push([i, j]) })
  })

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        // Solid carbon through the top ~65%, fading to transparent at the bottom
        // so the Dither backdrop emerges gradually instead of at a hard seam.
        background:
          'linear-gradient(to bottom, #0e0e0e 0%, #0e0e0e 75%, rgba(14,14,14,0) 100%)',
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.4]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8FF34" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C8FF34" stopOpacity="0" />
          </radialGradient>
          {/* Full-viewport name glow — lives in SVG so it's never clipped by a container */}
          <radialGradient id="nameGlow" cx="38%" cy="52%" r="38%">
            <stop offset="0%" stopColor="#8fb320" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#8fb320" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8fb320" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Name glow rect — fills full viewBox, gradient centered on name position */}
        <rect x="0" y="0" width="1200" height="800" fill="url(#nameGlow)" />

        {/* Static edges */}
        <g stroke="#2a2a2a" strokeWidth="1" fill="none">
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={NODES[a][0]} y1={NODES[a][1]}
              x2={NODES[b][0]} y2={NODES[b][1]}
            />
          ))}
        </g>

        {/* Pulse highlight on two edges */}
        <g stroke="#8fb320" strokeWidth="1" fill="none">
          <line x1={NODES[1][0]} y1={NODES[1][1]} x2={NODES[2][0]} y2={NODES[2][1]} opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1={NODES[5][0]} y1={NODES[5][1]} x2={NODES[4][0]} y2={NODES[4][1]} opacity="0">
            <animate attributeName="opacity" values="0;0.5;0" dur="4s" begin="2s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Random walk packets */}
        {PACKET_STARTS.map(startNode => (
          <Packet key={startNode} startNode={startNode} />
        ))}

        {/* Nodes */}
        {NODES.map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="20" fill="url(#nodeGlow)" />
            <circle cx={cx} cy={cy} r="2.5" fill="#C8FF34" opacity="0.85" />
          </g>
        ))}
      </svg>

      {/* Top-right accent tag */}
      <div className="absolute top-24 right-6 md:right-12 font-mono text-[10px] tracking-widest text-carbon-500 hidden sm:block">
        {hero.accentText}
      </div>

      <div className="relative max-w-4xl w-full text-left">
        <p className="opacity-0 animate-fade-up font-mono text-xs md:text-sm tracking-[0.2em] text-lime-muted uppercase mb-6">
          {hero.eyebrow}
        </p>

        {/* Accessible heading for screen readers / SEO — the ASCII canvases below are decorative */}
        <h1 className="sr-only">{hero.firstName} {hero.lastName}</h1>

        {/* ASCII text animation of the name, stacked on two lines like the original.
            Each ASCIIText renders its own line (the canvas has no newline support).
            The wrappers are sized + relatively positioned since ASCIIText fills its
            container via absolute positioning. */}
        <div aria-hidden="true" className="-ml-1">
          <div className="opacity-0 animate-fade-up relative w-[260px] h-28 sm:w-[340px] sm:h-36 md:w-[440px] md:h-48">
            <ASCIIText
              text={hero.firstName.toUpperCase()}
              enableWaves={false}
              enableMouseInteraction={false}
              asciiFontSize={6}
              textFontSize={230}
              planeBaseHeight={10}
            />
          </div>
          <div className="opacity-0 animate-fade-up-delay relative w-[260px] h-28 sm:w-[340px] sm:h-36 md:w-[440px] md:h-48 -mt-14 sm:-mt-16 md:-mt-24">
            <ASCIIText
              text={hero.lastName.toUpperCase()}
              enableWaves={false}
              enableMouseInteraction={false}
              asciiFontSize={6}
              textFontSize={230}
              planeBaseHeight={10}
            />
          </div>
        </div>

        <p className="opacity-0 animate-fade-up-delay font-mono text-xs md:text-sm tracking-wider text-slate-muted mt-8 mb-10">
          {hero.roles.join('  ·  ')}
        </p>

        <div className="opacity-0 animate-fade-up-delay flex flex-col sm:flex-row items-start gap-4">
          <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
            {hero.ctaPrimary}
          </button>
          <button onClick={scrollToContact} className="btn-secondary w-full sm:w-auto">
            {hero.ctaSecondary}
          </button>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 text-carbon-500 hover:text-lime-muted transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </button>
    </section>
  )
}
