import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    children: [
      { label: 'Who We Are', path: '/about' },
      { label: 'Our Ideas', path: '/ideas' },
      { label: 'Our Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
    ],
  },
  { label: 'The Game', path: '/game' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null) }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(2, 2, 18, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--color-cyan), var(--color-purple))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)',
          }}>
            <Zap size={18} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '0.05em' }}>
            HARPOON <span className="text-gradient">INNOVATION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {navLinks.map(link => (
            link.children ? (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '8px 14px', background: 'transparent',
                  color: openDropdown === link.label ? 'var(--color-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                  transition: 'color 0.2s', cursor: 'pointer',
                }}>
                  {link.label} <ChevronDown size={14} />
                </button>
                {openDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: 'rgba(7, 7, 30, 0.95)', backdropFilter: 'blur(20px)',
                    border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                    padding: '8px', minWidth: 180,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}>
                    {link.children.map(child => (
                      <Link key={child.path} to={child.path} style={{
                        display: 'block', padding: '10px 16px',
                        color: location.pathname === child.path ? 'var(--color-cyan)' : 'var(--text-secondary)',
                        fontSize: 14, borderRadius: 'var(--radius-sm)',
                        transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.target.style.background = 'var(--color-cyan-dim)'; e.target.style.color = 'var(--color-cyan)' }}
                        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = location.pathname === child.path ? 'var(--color-cyan)' : 'var(--text-secondary)' }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.path} to={link.path} style={{
                padding: '8px 14px',
                color: location.pathname === link.path ? 'var(--color-cyan)' : 'var(--text-secondary)',
                fontSize: 14, fontWeight: 500, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--color-cyan)'}
                onMouseLeave={e => e.target.style.color = location.pathname === link.path ? 'var(--color-cyan)' : 'var(--text-secondary)'}>
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 20 }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: 12 }}>
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'transparent', color: 'var(--text-primary)', padding: 6, display: 'none' }}
            className="mobile-menu-btn">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(2, 2, 18, 0.97)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)', padding: '20px 0',
        }}>
          <div className="container">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.label}>
                  <div style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 0 6px' }}>
                    {link.label}
                  </div>
                  {link.children.map(child => (
                    <Link key={child.path} to={child.path} style={{
                      display: 'block', padding: '10px 16px', color: 'var(--text-secondary)',
                      fontSize: 15, borderRadius: 'var(--radius-sm)',
                    }}>{child.label}</Link>
                  ))}
                </div>
              ) : (
                <Link key={link.path} to={link.path} style={{
                  display: 'block', padding: '12px 0',
                  color: location.pathname === link.path ? 'var(--color-cyan)' : 'var(--text-primary)',
                  fontSize: 16, fontWeight: 500, borderBottom: '1px solid var(--border)',
                }}>{link.label}</Link>
              )
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
