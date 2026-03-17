import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PhotoCard({ photo, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45 }}
      style={{
        breakInside: 'avoid',
        marginBottom: 14,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 6,
        cursor: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
      data-cursor="hover"
    >
      <motion.img
        src={photo.thumb}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          display: 'block',
          filter: 'saturate(0.88) contrast(1.04)',
        }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      />

      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(6,6,6,0.88) 0%, rgba(6,6,6,0.2) 45%, transparent 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '18px 20px',
          }}
          initial={{ y: 10 }}
          animate={{ y: hovered ? 0 : 10 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <p
            style={{
              fontFamily: 'Syne, system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {photo.title}
          </p>
          <p
            style={{
              fontFamily: '"Syne Mono", monospace',
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.5)',
              marginTop: 4,
            }}
          >
            {photo.cat} · {photo.id} · {photo.year}
          </p>
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(240,237,232,0.12)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Syne Mono", monospace',
            fontSize: 13,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
        >
          ↗
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

