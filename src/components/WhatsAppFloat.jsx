import { motion } from 'framer-motion'
import { site } from '../data/content'

const containerStyle = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  zIndex: 9999,
}

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: '#25D366',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
}

export default function WhatsAppFloat() {
  return (
    <div style={containerStyle}>
      <motion.a
        href={site.wa}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <svg viewBox="0 0 32 32" style={{ width: 30, height: 30, fill: '#fff' }}>
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.3 20.3 2.6 18.2 2.6 16 2.6 8.2 8.2 2.6 16 2.6S29.4 8.2 29.4 16 23.8 28.8 16 28.8zm8.2-11.4c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-2.3-1.1-3.8-2-5-4.7-.4-.7.4-.7.9-1.2.4-.4.9-1 .9-1.2l-.3-.9c-.1-.4-.3-.7-.3-.9 0-.2-.9-2.2-1.3-3-.3-.8-.7-.7-1-.7h-.9c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.4 3.7 5.8 5.2 3.4 1.5 3.4 1 4 1 .6 0 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.2-.4-.3-.8-.5z"/>
        </svg>
      </motion.a>
    </div>
  )
}
