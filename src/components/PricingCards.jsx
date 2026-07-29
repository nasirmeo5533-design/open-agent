import { motion } from 'framer-motion'
import { pricing } from '../data/content'
import { Link } from 'react-router-dom'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PricingCards() {
  return (
    <section id="pricing" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
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
          Pricing
        </span>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            margin: '12px 0 0',
            color: '#fff',
          }}
        >
          Simple, honest pricing
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}
      >
        {pricing.map((plan, i) => {
          const isPopular = plan.popular

          return (
            <motion.div
              key={i}
              variants={cardAnim}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                position: 'relative',
                background: 'var(--surface, #1a1a2e)',
                borderRadius: 16,
                border: isPopular
                  ? '2px solid var\(--primary, #2563eb)'
                  : '1px solid var(--line, #2d2d4e)',
                boxShadow: isPopular
                  ? '0 0 30px color-mix(in srgb, var\(--primary, #2563eb) 40%, transparent)'
                  : 'none',
                padding: '40px 28px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                overflow: 'visible',
              }}
            >
              {isPopular && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var\(--primary, #2563eb)',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '6px 18px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most popular
                </div>
              )}

              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    margin: 0,
                    color: '#fff',
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 36,
                    fontWeight: 700,
                    color: 'var\(--primary, #2563eb)',
                    margin: '8px 0 0',
                    lineHeight: 1.1,
                  }}
                >
                  {plan.price}
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '12px 0',
                      fontSize: 14,
                      color: 'color-mix(in srgb, #fff 78%, transparent)',
                      borderBottom:
                        j < plan.features.length - 1
                          ? '1px solid color-mix(in srgb, #fff 10%, transparent)'
                          : 'none',
                    }}
                  >
                    <span style={{ color: 'var\(--primary, #2563eb)', fontSize: 16 }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ marginTop: 'auto' }}
              >
                <Link
                  to={isPopular ? '/start' : '/contact'}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px 0',
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                    background: isPopular
                      ? 'var\(--primary, #2563eb)'
                      : 'transparent',
                    color: isPopular ? '#fff' : 'var\(--primary, #2563eb)',
                    border: isPopular
                      ? 'none'
                      : '1px solid var\(--primary, #2563eb)',
                    transition: '0.2s',
                  }}
                >
                  {isPopular ? 'Get started' : 'Contact us'}
                </Link>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      <p
        style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'color-mix(in srgb, #fff 50%, transparent)',
          marginTop: 48,
          lineHeight: 1.7,
        }}
      >
        All prices in PKR. 4-day money-back guarantee.{' '}
        <Link
          to="/refund"
          style={{
            color: 'var\(--primary, #2563eb)',
            textDecoration: 'underline',
          }}
        >
          Refund policy
        </Link>
        .
      </p>
    </section>
  )
}
