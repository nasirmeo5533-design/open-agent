import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../data/content'
import { useNavigate } from 'react-router-dom'

const heroStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  zIndex: 1,
}

const slideBaseStyle = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const bgStyle = (img) => ({
  position: 'absolute',
  inset: 0,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)',
}

const contentStyle = {
  position: 'relative',
  zIndex: 2,
  maxWidth: 720,
  padding: '0 24px',
  textAlign: 'center',
  color: '#fff',
}

const eyebrowStyle = {
  display: 'inline-block',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'var\(--primary)',
  marginBottom: 16,
}

const titleStyle = {
  fontSize: 'clamp(32px, 6vw, 60px)',
  fontWeight: 800,
  lineHeight: 1.15,
  margin: '0 0 20px',
  letterSpacing: '-1px',
}

const textStyle = {
  fontSize: 'clamp(15px, 2vw, 18px)',
  lineHeight: 1.7,
  opacity: 0.85,
  margin: '0 0 36px',
  maxWidth: 560,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const ctaStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '14px 36px',
  fontSize: 15,
  fontWeight: 600,
  border: 'none',
  borderRadius: 8,
  background: 'var\(--primary)',
  color: '#fff',
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
}

const dotsWrapStyle = {
  position: 'absolute',
  bottom: 40,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 10,
  zIndex: 3,
}

const dotStyle = (active) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  border: '2px solid rgba(255,255,255,0.6)',
  background: active ? '#fff' : 'transparent',
  cursor: 'pointer',
  padding: 0,
  transition: 'background 0.3s',
})

const progressTrackStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  background: 'rgba(255,255,255,0.15)',
  zIndex: 3,
}

const progressFillStyle = (pct) => ({
  height: '100%',
  width: `${pct}%`,
  background: 'var\(--primary)',
  transition: 'width 0.05s linear',
})

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  const goNext = useCallback(() => {
    setCurrent(prev => (prev + 1) % heroSlides.length)
    setProgress(0)
  }, [])

  const goTo = (i) => {
    setCurrent(i)
    setProgress(0)
  }

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext])

  useEffect(() => {
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / 5000) * 100, 100)
      setProgress(pct)
    }, 40)
    return () => clearInterval(tick)
  }, [current])

  const slide = heroSlides[current]

  const handleCTA = () => {
    if (slide.ctaLink) {
      if (slide.ctaLink.startsWith('#')) {
        const id = slide.ctaLink.slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(`/${slide.ctaLink}`)
      }
    } else {
      navigate('/contact')
    }
  }

  return (
    <section style={heroStyle}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          style={slideBaseStyle}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div style={bgStyle(slide.img)} />
          <div style={overlayStyle} />

          <div style={contentStyle}>
            <motion.span
              style={eyebrowStyle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              style={titleStyle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {slide.title}
            </motion.h1>

            <motion.p
              style={textStyle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slide.text}
            </motion.p>

            <motion.button
              style={ctaStyle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(120,88,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCTA}
            >
              {slide.cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div style={dotsWrapStyle}>
        {heroSlides.map((_, i) => (
          <button key={i} style={dotStyle(i === current)} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      <div style={progressTrackStyle}>
        <div style={progressFillStyle(progress)} />
      </div>
    </section>
  )
}
