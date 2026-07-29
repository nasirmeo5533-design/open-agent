import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../data/content'

const s = {
  wrap: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '56px 24px 80px',
  },
  back: {
    display: 'inline-block',
    color: 'var\(--primary)',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 32,
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 36,
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: 24,
  },
  sub: {
    fontSize: 18,
    fontWeight: 600,
    color: 'var(--text)',
    marginTop: 28,
    marginBottom: 8,
  },
  p: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'var(--text-muted)',
    marginBottom: 12,
  },
  hr: {
    border: 'none',
    borderTop: '1px solid var(--line)',
    margin: '32px 0',
  },
}

export default function Refund() {
  return (
    <motion.div
      className="wrap"
      style={s.wrap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={s.back}>← Back to Home</Link>
      <h1 style={s.heading}>Refund Policy</h1>
      <p style={s.p}>
        At {site.name}, we stand behind the quality of our work. We offer a simple, transparent
        refund policy so you can try our services with complete confidence.
      </p>

      <h2 style={s.sub}>4-Day Money-Back Guarantee</h2>
      <p style={s.p}>
        If you are not satisfied with our services for any reason, you are eligible for a full
        refund within 4 days of your initial purchase. This applies to all our service plans —
        Starter, Premium, and Pro.
      </p>

      <h2 style={s.sub}>Full Refund — No Questions Asked</h2>
      <p style={s.p}>
        We believe in fair treatment. Within the 4-day window, you will receive 100% of your
        payment back. No deductions, no hidden fees, no difficult questions. If you're unhappy,
        we'd rather make it right than keep your money.
      </p>

      <h2 style={s.sub}>How to Request a Refund</h2>
      <p style={s.p}>
        To request a refund, simply contact us via email at{' '}
        <a href={`mailto:${site.email}`} style={{ color: 'var\(--primary)' }}>{site.email}</a> or
        on WhatsApp at{' '}
        <a href={site.wa} style={{ color: 'var\(--primary)' }} target="_blank" rel="noopener noreferrer">
          {site.phone}
        </a>{' '}
        within 4 days of your purchase. Include your order details and we will process your refund
        promptly — typically within 3&ndash;5 business days.
      </p>

      <h2 style={s.sub}>Contact Us</h2>
      <p style={s.p}>
        If you have any questions about our refund policy, please reach out:
      </p>
      <p style={s.p}>
        Email: <a href={`mailto:${site.email}`} style={{ color: 'var\(--primary)' }}>{site.email}</a>
        <br />
        Phone: {site.phone}
        <br />
        WhatsApp:{' '}
        <a href={site.wa} style={{ color: 'var\(--primary)' }} target="_blank" rel="noopener noreferrer">
          {site.wa}
        </a>
      </p>

      <div style={s.hr} />
      <p style={{ ...s.p, fontSize: 13, color: 'var(--text-muted)' }}>
        Last updated: January 2026
      </p>
    </motion.div>
  )
}
