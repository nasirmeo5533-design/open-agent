import { motion } from 'framer-motion'
import { caseStudies } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function CaseStudies() {
  return (
    <section id="case-studies" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var\(--primary, #2563eb)',
          }}
        >
          Proof
        </span>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            margin: '12px 0 0',
            color: '#fff',
          }}
        >
          Real results from real budgets
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}
      >
        {caseStudies.map((c, i) => (
          <motion.div
            key={i}
            variants={item}
            style={{
              background: 'var(--surface, #1a1a2e)',
              borderRadius: 16,
              padding: '28px 24px',
              borderLeft: '4px solid var\(--primary, #2563eb)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var\(--primary, #2563eb)',
              }}
            >
              {c.tag}
            </span>

            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#fff' }}>
              {c.title}
            </h3>

            <div
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: 'color-mix(in srgb, #fff 70%, transparent)',
              }}
              dangerouslySetInnerHTML={{ __html: c.body }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 20px',
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: '1px solid color-mix(in srgb, #fff 15%, transparent)',
              }}
            >
              {c.results.map((r, j) => (
                <div key={j}>
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: 'var\(--primary, #2563eb)',
                      display: 'block',
                    }}
                  >
                    {r.value}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'color-mix(in srgb, #fff 55%, transparent)',
                    }}
                  >
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
