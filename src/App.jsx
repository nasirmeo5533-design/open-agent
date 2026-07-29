import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import useTheme from './hooks/useTheme'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import ServicesGrid from './components/ServicesGrid'
import PortfolioGallery from './components/PortfolioGallery'
import Lightbox from './components/Lightbox'
import CaseStudies from './components/CaseStudies'
import PricingCards from './components/PricingCards'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { portfolio } from './data/content'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'

function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesGrid id="services" />
      <PortfolioGallery id="portfolio" />
      <CaseStudies id="case-studies" />
      <PricingCards id="pricing" />
      <Testimonials />
      <FAQ />
      <ContactForm id="contact" />
    </>
  )
}

function App() {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  function closeLightbox() {
    setLightboxOpen(false)
  }

  return (
    <>
      <Header dark={dark} toggleTheme={toggle} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
      {lightboxOpen && (
        <Lightbox
          images={portfolio}
          index={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}

export default App
