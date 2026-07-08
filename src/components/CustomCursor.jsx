import { useCustomCursor } from '../hooks/useCustomCursor'

export default function CustomCursor() {
  const { enabled, dotRef } = useCustomCursor()

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-2 h-2 rounded-full bg-lime pointer-events-none z-[100] mix-blend-difference"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  )
}
