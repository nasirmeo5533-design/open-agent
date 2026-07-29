import { Link } from 'react-router-dom'
import { site } from '../data/content'

const socialIcons = {
  x: '<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1 2h7l4.8 6.4zM17.7 20h1.7L7.4 4H5.6z"/></svg>',
  fb: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  in: '<svg viewBox="0 0 24 24"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5zM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7.1 20.4H3.5V9h3.6zM22 0H2A2 2 0 0 0 0 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg>',
}

const pages = ['Home', 'About', 'Portfolio', 'Services', 'Pricing', 'Case Studies', 'Blog', 'FAQ', 'Contact', 'Privacy', 'Terms', 'Refund']

const pagePaths = {
  Home: '/',
  About: '/#about',
  Portfolio: '/#portfolio',
  Services: '/#services',
  Pricing: '/#pricing',
  'Case Studies': '/#case-studies',
  Blog: '/blog',
  FAQ: '/#faq',
  Contact: '/#contact',
  Privacy: '/privacy',
  Terms: '/terms',
  Refund: '/refund',
}

const footerStyle = {
  background: '#0b0b12',
  color: '#ccc',
  padding: '60px 40px 0',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 1fr',
  gap: 48,
  maxWidth: 1200,
  margin: '0 auto',
}

const brandStyle = {
  fontSize: 26,
  fontWeight: 700,
  letterSpacing: '-0.5px',
  marginBottom: 16,
}

const descStyle = {
  fontSize: 14,
  lineHeight: 1.7,
  color: '#999',
  marginBottom: 20,
  maxWidth: 360,
}

const socialsStyle = {
  display: 'flex',
  gap: 12,
}

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid #333',
  color: '#999',
  transition: 'all 0.2s',
}

const headingStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: 1.5,
  marginBottom: 20,
}

const linkStyle = {
  display: 'block',
  fontSize: 14,
  color: '#999',
  textDecoration: 'none',
  padding: '4px 0',
  transition: 'color 0.2s',
}

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 14,
  color: '#999',
  marginBottom: 10,
  textDecoration: 'none',
}

const bottomBarStyle = {
  borderTop: '1px solid #222',
  marginTop: 48,
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12,
  fontSize: 13,
  color: '#666',
}

const responsiveStyles = `
  @media (max-width: 768px) {
    .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .footer-bottom { flex-direction: column !important; text-align: center !important; }
  }
`

export default function Footer() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <footer style={footerStyle}>
        <div className="footer-grid" style={gridStyle}>
          <div>
            <div style={brandStyle}>
              <span style={{ fontFamily: "'Playfair Display', serif", color: '#fff' }}>Open</span>
              <span style={{ color: 'var\(--primary, #2563eb)' }}>Agent</span>
            </div>
            <p style={descStyle}>
              AI-powered marketing & automation for e-commerce and D2C brands. We help you grow with data-driven campaigns and intelligent workflows.
            </p>
            <div style={socialsStyle}>
              {site.socials.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  dangerouslySetInnerHTML={{ __html: socialIcons[s.icon]?.replace('<svg', '<svg width="18" height="18"') || '' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var\(--primary, #2563eb)'; e.currentTarget.style.color = 'var\(--primary, #2563eb)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#999' }}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Pages</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 16px' }}>
              {pages.map(page => (
                <Link
                  key={page}
                  to={pagePaths[page]}
                  style={linkStyle}
                  onMouseEnter={e => e.target.style.color = 'var\(--primary, #2563eb)'}
                  onMouseLeave={e => e.target.style.color = '#999'}
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Contact</h4>
            <a href={`mailto:${site.email}`} style={contactItemStyle}>
              <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: 'var\(--primary, #2563eb)', flexShrink: 0 }}>
                <path d="M18 4H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1.4 2L10 10.5 3.4 6h13.2zM3 14V7.9l7 4.6 7-4.6V14H3z"/>
              </svg>
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} style={contactItemStyle}>
              <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: 'var\(--primary, #2563eb)', flexShrink: 0 }}>
                <path d="M17.9 13.7l-3.5-1.5c-.4-.2-.9-.1-1.2.3l-1.5 1.8c-1.7-.9-3.2-2.3-4.1-4.1l1.8-1.5c.4-.3.5-.8.3-1.2L8.3 4.1c-.2-.5-.7-.7-1.2-.5L3.5 5.1C2.6 5.5 2 6.4 2 7.4 2 13.4 6.6 18 12.6 18c1 0 1.9-.6 2.3-1.5l1.5-3.5c.2-.5 0-1.1-.5-1.3z"/>
              </svg>
              {site.phone}
            </a>
            <div style={contactItemStyle}>
              <svg viewBox="0 0 20 20" style={{ width: 16, height: 16, fill: 'var\(--primary, #2563eb)', flexShrink: 0 }}>
                <path d="M10 0C6.7 0 4 2.7 4 6c0 4.5 6 11 6 11s6-6.5 6-11c0-3.3-2.7-6-6-6zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S8.6 3.5 10 3.5s2.5 1.1 2.5 2.5S11.4 8.5 10 8.5z"/>
              </svg>
              {site.location}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={bottomBarStyle}>
          <span>{site.copyright}</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://bit.ly/44sikZs" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var\(--primary, #2563eb)'}
              onMouseLeave={e => e.target.style.color = '#666'}
            >Digital Marketing eBook</a>
            <a href="https://bit.ly/4fmnlYC" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var\(--primary, #2563eb)'}
              onMouseLeave={e => e.target.style.color = '#666'}
            >Generative AI eBook</a>
          </div>
        </div>
      </footer>
    </>
  )
}
