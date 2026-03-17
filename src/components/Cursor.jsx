import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '../hooks/useMousePosition'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useMousePosition()
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let rafId
    const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const render = () => {
      const { x, y } = mouse.current
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`
      }

      ringPos.x += (x - ringPos.x) * 0.12
      ringPos.y += (y - ringPos.y) * 0.12

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x - 18}px, ${
          ringPos.y - 18
        }px, 0)`
      }

      const el = document.elementFromPoint(x, y)
      const hoverTarget = el?.closest?.('[data-cursor="hover"]')
      setHovering(Boolean(hoverTarget))

      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(rafId)
  }, [mouse])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference">
      <div
        ref={dotRef}
        className="pointer-events-none fixed h-2 w-2 rounded-full bg-[#f0ede8]"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed rounded-full border border-[#f0ede8]/80 transition-all duration-200 ${
          hovering ? 'h-14 w-14 border-opacity-70' : 'h-9 w-9 border-opacity-40'
        }`}
      />
    </div>
  )
}

