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

export default function Terms() {
  return (
    <motion.div
      className="wrap"
      style={s.wrap}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" style={s.back}>← Back to Home</Link>
      <h1 style={s.heading}>Terms of Service</h1>
      <p style={s.p}>
        By accessing or using the services provided by {site.name}, you agree to be bound by these
        Terms of Service. If you do not agree with any part of these terms, you may not use our
        services.
      </p>

      <h2 style={s.sub}>Service Description</h2>
      <p style={s.p}>
        {site.name} provides digital marketing, AI automation, Shopify development, and related
        services as described on our website. The scope, deliverables, and timelines for each
        project will be outlined in a separate proposal or agreement. We reserve the right to
        modify or discontinue any service without prior notice.
      </p>

      <h2 style={s.sub}>User Responsibilities</h2>
      <p style={s.p}>
        You agree to provide accurate and complete information required for the delivery of
        services. You are responsible for maintaining the confidentiality of any account credentials
        and for all activities that occur under your account. You must not use our services for any
        unlawful or prohibited purpose.
      </p>

      <h2 style={s.sub}>Payment Terms</h2>
      <p style={s.p}>
        Fees for services are outlined in the relevant proposal or pricing page. Payments are due
        according to the agreed schedule — typically upfront or monthly. Late payments may result in
        a suspension of services. All fees are non-refundable except as expressly stated in our
        Refund Policy.
      </p>

      <h2 style={s.sub}>Intellectual Property</h2>
      <p style={s.p}>
        Upon full payment, you retain ownership of the final deliverables created specifically for
        your project (e.g. ad creatives, copy, automations). {site.name} retains the right to
        display completed work in its portfolio unless otherwise agreed in writing. All underlying
        tools, frameworks, and methodologies used remain the intellectual property of {site.name}.
      </p>

      <h2 style={s.sub}>Limitation of Liability</h2>
      <p style={s.p}>
        {site.name} shall not be liable for any indirect, incidental, special, or consequential
        damages arising out of or in connection with the use of our services, including but not
        limited to loss of revenue, data, or business opportunities. Our total liability for any
        claim shall not exceed the total amount paid by you for the specific service giving rise to
        the claim.
      </p>

      <div style={s.hr} />
      <p style={{ ...s.p, fontSize: 13, color: 'var(--text-muted)' }}>
        Last updated: January 2026
      </p>
    </motion.div>
  )
}
