import { motion } from 'framer-motion'

export default function ThemeToggle({ dark, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      style={{
        background: 'none',
        border: '1px solid var(--line)',
        borderRadius: 8,
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: 18,
        color: 'var(--text)',
        transition: 'border-color .2s',
      }}
      aria-label="Toggle theme"
    >
      {dark ? '☀️' : '🌙'}
    </motion.button>
  )
}
