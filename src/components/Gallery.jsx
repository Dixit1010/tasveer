import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PhotoCard from './PhotoCard'
import { CATEGORIES, PHOTOS } from '../data/photos'

export default function Gallery({ onPhotoClick }) {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? PHOTOS
        : PHOTOS.filter(
            (p) => p.cat.toLowerCase() === filter.toLowerCase(),
          ),
    [filter],
  )

  return (
    <section className="px-6 py-20 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[rgba(240,237,232,0.08)] pb-8 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(40px,6vw,88px)] font-extrabold leading-[0.9] tracking-[-0.04em]">
            Gallery
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.5)]">
            — {String(filtered.length).padStart(2, '0')} photos
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => {
            const active = cat === filter
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className="relative rounded-full border border-[rgba(240,237,232,0.12)] px-5 py-2 text-[10px] font-mono uppercase tracking-[0.15em] text-[rgba(240,237,232,0.35)] transition-colors hover:text-[#060606]"
                data-cursor="hover"
              >
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#f0ede8]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            )
          })}
        </div>

        <motion.div
          className="mt-10"
          layout
          style={{
            columnCount: 1,
            columnGap: '14px',
          }}
        >
          <style>
            {`
              @media (min-width: 640px) {
                .masonry-cols { column-count: 2; }
              }
              @media (min-width: 1024px) {
                .masonry-cols { column-count: 3; }
              }
            `}
          </style>
          <div className="masonry-cols">
            <AnimatePresence>
              {filtered.map((photo) => {
                const globalIndex = PHOTOS.findIndex((p) => p.id === photo.id)
                return (
                  <PhotoCard
                    key={photo.id}
                    photo={photo}
                    index={globalIndex}
                    onClick={onPhotoClick}
                  />
                )
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

