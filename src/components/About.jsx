import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  return (
    <section
      id="about"
      className="px-6 py-24 sm:px-12 lg:px-16"
      ref={ref}
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="font-display text-[clamp(100px,18vw,240px)] font-extrabold leading-none tracking-[-0.06em] text-[rgba(240,237,232,0.07)]">
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            About this place
          </p>
          <h2 className="mb-6 font-display text-[clamp(28px,3.5vw,50px)] font-bold leading-[1.15] tracking-[-0.03em]">
            Not a pro. Just someone who looks at things.
          </h2>
          <p className="max-w-[420px] font-body text-[15px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
            This is a personal archive of shots taken on weekends, trips,
            random afternoons. No client work. No briefs. Just what looked
            interesting through a lens.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

