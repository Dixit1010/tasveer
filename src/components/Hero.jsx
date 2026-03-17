import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let frameId
    let particles = []
    const GRID_SPACING = 90
    const PARTICLE_COUNT = 120
    let mouseX = 0.5
    let mouseY = 0.5

    const resize = () => {
      const rect = wrapperRef.current?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      initParticles(rect.width, rect.height)
    }

    const initParticles = (w, h) => {
      particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
        const x = Math.random() * w
        const y = Math.random() * h
        return {
          baseX: x,
          baseY: y,
          size: 0.4 + Math.random() * 1.4,
          alpha: 0.08 + Math.random() * 0.47,
          speed: 0.1 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
          x,
          y,
        }
      })
    }

    const drawGrid = (w, h) => {
      ctx.strokeStyle = 'rgba(240,237,232,0.022)'
      ctx.lineWidth = 1
      for (let x = 0; x < w; x += GRID_SPACING) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y < h; y += GRID_SPACING) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }
    }

    const animate = (time) => {
      const rect = wrapperRef.current?.getBoundingClientRect()
      if (!rect) return
      const { width: w, height: h } = rect

      ctx.clearRect(0, 0, w, h)
      drawGrid(w, h)

      ctx.fillStyle = '#f0ede8'

      particles.forEach((p) => {
        const offsetX = (mouseX - 0.5) * 35
        const offsetY = (mouseY - 0.5) * 25
        p.x =
          p.baseX +
          offsetX +
          Math.sin((time * 0.001 * p.speed + p.phase)) * 8
        p.y =
          p.baseY +
          offsetY +
          Math.cos((time * 0.001 * p.speed + p.phase)) * 6

        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1
      ctx.strokeStyle = 'rgba(240,237,232,0.07)'
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.07
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      })
      ctx.globalAlpha = 1

      frameId = requestAnimationFrame(animate)
    }

    const handleMouse = (e) => {
      const rect = wrapperRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX = (e.clientX - rect.left) / rect.width
      mouseY = (e.clientY - rect.top) / rect.height
    }

    resize()
    frameId = requestAnimationFrame(animate)
    window.addEventListener('resize', resize)
    wrapperRef.current?.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      wrapperRef.current?.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <section
      ref={wrapperRef}
      className="relative flex h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-24 sm:px-12 lg:px-16"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.38)]"
        >
          
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-4 font-display text-[clamp(56px,10vw,148px)] font-extrabold leading-[0.9] tracking-[-0.04em]"
        >
          Through
          <br />
          <span className="italic font-normal text-[rgba(240,237,232,0.4)]">
            My Lens.
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center gap-8"
        >
          <div className="h-20 w-px bg-gradient-to-b from-[rgba(240,237,232,0.3)] to-transparent" />
          <p className="max-w-xs font-body text-[14px] leading-[1.8] text-[rgba(240,237,232,0.45)]">
            Frames from everyday life — streets, skies, people, and whatever
            catches the eye.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.15)] md:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        ©2026
      </motion.p>

      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.4)]">
          
        </span>
        <motion.div
          className="h-10 w-px bg-[rgba(240,237,232,0.1)]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </section>
  )
}

