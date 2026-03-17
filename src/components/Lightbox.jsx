import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const [touchStartX, setTouchStartX] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onNext, onPrev])

  const onTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const onTouchEnd = (e) => {
    if (touchStartX == null) return
    const dx = e.changedTouches[0].clientX - touchStartX
    if (dx > 50) {
      onPrev()
    } else if (dx < -50) {
      onNext()
    }
    setTouchStartX(null)
  }

  const photo = photos[currentIndex]
  if (!photo) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(6,6,6,0.97)] backdrop-blur-[28px] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key={photo.id}
          ref={containerRef}
          initial={{ scale: 0.9, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 16 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="relative mx-auto flex w-full max-w-5xl flex-col"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            decoding="async"
            className="max-h-[70vh] w-full rounded-[10px] object-contain"
          />

          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-[16px] tracking-tight">
                {photo.title}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.5)]">
                {photo.cat} · {photo.id} · {photo.year}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onPrev}
                className="rounded-full border border-[rgba(240,237,232,0.25)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.8)] transition-colors hover:bg-[rgba(240,237,232,0.1)]"
                data-cursor="hover"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full border border-[rgba(240,237,232,0.25)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.8)] transition-colors hover:bg-[rgba(240,237,232,0.1)]"
                data-cursor="hover"
              >
                Next →
              </button>
              <button
                type="button"
                onClick={onClose}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.6)] transition-colors hover:text-[#f0ede8]"
                data-cursor="hover"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.4)]">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(photos.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

