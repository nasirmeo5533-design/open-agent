import { motion } from 'framer-motion'
import { portfolio } from '../data/content'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function PortfolioGallery({ onImageClick }) {
  return (
    <section id="portfolio" style={{ padding: '5rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var\(--primary, #2563eb)' }}>
          Proof, not promises
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: '0.5rem', color: 'var(--heading, #111)' }}>
          Real work, real numbers
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {portfolio.map((item, i) => (
          <motion.div
            key={item.name + i}
            variants={itemVariants}
            onClick={() => onImageClick?.(i)}
            style={{
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              cursor: 'pointer',
              aspectRatio: '4 / 3',
              background: 'var(--muted, #f3f4f6)',
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0 }}
            >
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{item.name}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{item.role}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
