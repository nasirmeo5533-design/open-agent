import { motion } from 'framer-motion'
import { services } from '../data/content'

const icons = {
  ads: '<svg viewBox="0 0 24 24"><path d="M3 11l14-6v14L3 13z"/><path d="M3 11v2a2 2 0 0 0 2 2h2v4a2 2 0 0 0 4 0v-4h4"/></svg>',
  shopify: '<svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a1.6 1.6 0 0 0 1.6 1.3h8.8a1.6 1.6 0 0 0 1.6-1.3L22 7H6"/></svg>',
  'ai-auto': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.3 1a7.6 7.6 0 0 0-1.7-1l-.3-2.6H10.9l-.3 2.6a7.6 7.6 0 0 0-1.7 1l-2.3-1-2 3.4L4.6 11a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7.6 7.6 0 0 0 1.7 1l.3 2.6h4.2l.3-2.6a7.6 7.6 0 0 0 1.7-1l2.3 1 2-3.4z"/></svg>',
  'ai-agent': '<svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="2.5"/><path d="M12 8V5a2 2 0 0 0-4 0M12 8V5a2 2 0 0 1 4 0M9 13h.01M15 13h.01M9.5 16h5"/></svg>',
  content: '<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L3 11l8 8 7-6zM3 11l3-3 4 4"/><circle cx="8.5" cy="8.5" r="1"/></svg>',
  web: '<svg viewBox="0 0 24 24"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 4l-4 16"/></svg>',
  'google-ads': '<svg viewBox="0 0 24 24"><path d="M3 11l14-6v14L3 13z"/><path d="M3 11v2a2 2 0 0 0 2 2h2v4a2 2 0 0 0 4 0v-4h4"/><circle cx="12" cy="12" r="9"/></svg>',
  social: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesGrid() {
  return (
    <section id="services" style={{ padding: '5rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var\(--primary, #2563eb)' }}>What I do</span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: '0.5rem', color: 'var(--heading, #111)' }}>
          Services built for modern brands
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title + i}
            variants={itemVariants}
            style={{
              background: 'var(--card-bg, #fff)',
              border: '1px solid var(--border, #e5e7eb)',
              borderRadius: 12,
              padding: '1.75rem 1.5rem',
              cursor: 'default',
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var\(--primary, #2563eb)'
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border, #e5e7eb)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              className="ic"
              style={{ width: 40, height: 40, marginBottom: '1rem', color: 'var\(--primary, #2563eb)' }}
              dangerouslySetInnerHTML={{ __html: icons[s.icon] || '' }}
            />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--heading, #111)' }}>{s.title}</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--muted, #6b7280)', margin: 0 }}>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
