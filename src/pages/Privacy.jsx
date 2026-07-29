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

export default function Privacy() {
  return (
    <motion.div
      className="wrap"
      style={s.wrap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={s.back}>← Back to Home</Link>
      <h1 style={s.heading}>Privacy Policy</h1>
      <p style={s.p}>
        At {site.name}, we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2 style={s.sub}>Information We Collect</h2>
      <p style={s.p}>
        We may collect personal information such as your name, email address, phone number, and
        billing details when you fill out a contact form, sign up for a consultation, or engage our
        services. We also automatically collect certain data including IP address, browser type,
        device information, and usage patterns through cookies and analytics tools.
      </p>

      <h2 style={s.sub}>How We Use Your Information</h2>
      <p style={s.p}>
        We use the information we collect to provide, maintain, and improve our marketing and
        automation services; to communicate with you about projects, inquiries, and support; to send
        relevant updates and promotional content (with your consent); and to comply with legal
        obligations.
      </p>

      <h2 style={s.sub}>Data Protection</h2>
      <p style={s.p}>
        We implement industry-standard security measures including encryption, access controls, and
        secure servers to protect your personal data. However, no method of electronic storage or
        transmission is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 style={s.sub}>Third-Party Sharing</h2>
      <p style={s.p}>
        We do not sell your personal information. We may share data with trusted third-party
        service providers who assist us in operating our business (e.g. payment processors,
        analytics platforms, email delivery services) under strict confidentiality agreements.
      </p>

      <h2 style={s.sub}>Contact Us</h2>
      <p style={s.p}>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href={`mailto:${site.email}`} style={{ color: 'var\(--primary)' }}>{site.email}</a> or
        call {site.phone}.
      </p>

      <div style={s.hr} />
      <p style={{ ...s.p, fontSize: 13, color: 'var(--text-muted)' }}>
        Last updated: January 2026
      </p>
    </motion.div>
  )
}
