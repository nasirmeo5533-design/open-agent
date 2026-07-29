import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/content'

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '13px 15px',
  border: '1px solid var(--line)',
  borderRadius: 10,
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const focusHandler = (e) => { e.currentTarget.style.borderColor = 'var\(--primary, #2563eb)' }
  const blurHandler = (e) => { e.currentTarget.style.borderColor = 'var(--line, #e5e7eb)' }

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var\(--primary, #2563eb)' }}>
          Ready?
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginTop: '0.5rem', color: 'var(--heading, #111)' }}>
          Let's grow your brand
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {submitted ? (
            <div style={{ padding: '2rem 0', fontSize: '1rem', color: 'var(--text, #333)', lineHeight: 1.6 }}>
              ✅ Thanks! We'll reach out via WhatsApp or email soon.
            </div>
          ) : (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--heading, #111)' }}>Name</label>
                <input type="text" required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--heading, #111)' }}>Email</label>
                <input type="email" required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--heading, #111)' }}>Phone</label>
                <input type="tel" style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--heading, #111)' }}>Message</label>
                <textarea rows={4} required style={{ ...inputStyle, resize: 'vertical' }} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <button
                type="submit"
                style={{
                  padding: '13px 30px',
                  background: 'var\(--primary, #2563eb)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Send message
              </button>
            </>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            background: '#1a1a2e',
            borderRadius: 14,
            padding: '2rem',
            color: '#fff',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Chat on WhatsApp</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.5rem', color: '#ccc' }}>
            Quick replies. No form delays. Tap the button below and we'll take it from there.
          </p>
          <a
            href={site.wa}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '13px 28px',
              background: '#25D366',
              color: '#fff',
              borderRadius: 10,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: 'inherit',
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', color: '#888' }}>
            {site.founder} — typically replies within minutes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
