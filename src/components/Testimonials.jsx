import { motion } from 'framer-motion'
import { testimonials } from '../data/content'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: '5rem 1.5rem',
        background: 'var(--surface, #f8f9fc)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var\(--primary, #2563eb)' }}>
            Client words
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: '0.5rem', color: 'var(--heading, #111)' }}>
            What founders say
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author + i}
              variants={itemVariants}
              style={{
                background: 'var(--card-bg, #fff)',
                border: '1px solid var(--border, #e5e7eb)',
                borderRadius: 12,
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0, color: 'var(--text, #333)' }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var\(--primary, #2563eb)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--heading, #111)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted, #6b7280)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
