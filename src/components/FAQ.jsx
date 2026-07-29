import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" style={{ padding: '5rem 1.5rem', maxWidth: 720, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var\(--primary, #2563eb)' }}>
          Questions?
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: '0.5rem', color: 'var(--heading, #111)' }}>
          Quick answers
        </h2>
      </div>

      <div>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={faq.q + i}
              style={{
                border: '1px solid var(--border, #e5e7eb)',
                borderRadius: 10,
                marginBottom: '0.75rem',
                overflow: 'hidden',
                background: 'var(--card-bg, #fff)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 1.25rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--heading, #111)',
                  textAlign: 'left',
                  lineHeight: 1.4,
                  fontFamily: 'inherit',
                }}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 300, color: 'var\(--primary, #2563eb)', flexShrink: 0, marginLeft: '1rem' }}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 1.25rem 1rem 1.25rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted, #6b7280)' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
