import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Portfolio', path: '/#portfolio' },
  { label: 'Services', path: '/#services' },
  { label: 'Pricing', path: '/#pricing' },
  { label: 'Case Studies', path: '/#case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/#faq' },
  { label: 'Contact', path: '/#contact' },
]

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 40px',
  background: 'var(--bg-translucent)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderBottom: '1px solid var(--line)',
}

const brandStyle = {
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: '-0.5px',
}

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
}

const navLinkStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--text)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  whiteSpace: 'nowrap',
}

const menuBtnStyle = {
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: 28,
  cursor: 'pointer',
  color: 'var(--text)',
  padding: 0,
  lineHeight: 1,
}

const mobileMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--bg-translucent)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderBottom: '1px solid var(--line)',
  padding: '12px 0',
}

const mobileLinkStyle = {
  padding: '10px 40px',
  fontSize: 15,
  fontWeight: 500,
  color: 'var(--text)',
  textDecoration: 'none',
}

const responsiveStyles = `
  @media (max-width: 900px) {
    .topbar .nav { display: none !important; }
    .topbar .btn { display: none !important; }
    .topbar .menu-btn { display: flex !important; }
  }
`

export default function Header({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault()
      const id = path.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => {
          const retry = document.getElementById(id)
          if (retry) retry.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
    setMenuOpen(false)
  }

  return (
    <>
      <style>{responsiveStyles}</style>
      <motion.header className="topbar" style={headerStyle}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="brand" style={brandStyle}>
          <span style={{ fontFamily: "'Playfair Display', serif" }}>Open</span>
          <span style={{ color: 'var\(--primary)' }}>Agent</span>
        </div>

        <nav className="nav" style={navStyle}>
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.path}
              onClick={e => handleNavClick(e, link.path)}
              style={navLinkStyle}
              onMouseEnter={e => e.target.style.color = 'var\(--primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ThemeToggle dark={dark} toggle={toggleTheme} />
          <Link to="/contact" className="btn" style={{ textDecoration: 'none' }}>
            Get a Quote
          </Link>
          <button
            className="menu-btn"
            style={menuBtnStyle}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              style={mobileMenuStyle}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={e => handleNavClick(e, link.path)}
                  style={mobileLinkStyle}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
