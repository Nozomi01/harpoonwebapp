import { Link } from 'react-router-dom'
import { Zap, Share2, Terminal, Network, Mail, MapPin, MessageCircle } from 'lucide-react'
const Twitter = Share2
const Github = Terminal
const Linkedin = Network
const Discord = MessageCircle

const footerLinks = {
  Company: [
    { label: 'Who We Are', path: '/about' },
    { label: 'Our Ideas', path: '/ideas' },
    { label: 'Our Team', path: '/team' },
    { label: 'Careers', path: '/careers' },
  ],
  Product: [
    { label: 'The Game', path: '/game' },
    { label: 'How It Works', path: '/game#mechanics' },
    { label: 'Leaderboard', path: '/game#leaderboard' },
    { label: 'API Docs', path: '/game#api' },
  ],
  Resources: [
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Community', path: '/contact' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border)',
      background: 'rgba(2, 2, 18, 0.95)',
      backdropFilter: 'blur(20px)',
    }}>
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-cyan), var(--color-purple), transparent)',
      }} />

      <div className="container" style={{ padding: '72px 28px 40px' }}>
        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--color-cyan), var(--color-purple))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0,212,255,0.3)',
              }}>
                <Zap size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700 }}>
                HARPOON <span className="text-gradient">STUDIOS</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 300, marginBottom: 28 }}>
              Where code becomes combat. Build AI-powered robots, master the harpoon mechanic, and dominate the arena.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Twitter size={16} />, href: '#' },
                { icon: <Github size={16} />, href: '#' },
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Discord size={16} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-cyan)'; e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.background = 'var(--color-cyan-dim)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-card)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="hover-link" style={{ fontSize: 14 }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 40, marginBottom: 32,
          display: 'flex', gap: 32, flexWrap: 'wrap',
        }}>
          {[
            { icon: <Mail size={15} />, text: 'hello@harpoonstudios.io' },
            { icon: <MapPin size={15} />, text: 'San Francisco, CA' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: 14 }}>
              <span style={{ color: 'var(--color-cyan)' }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            © 2025 Harpoon Studios Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{ color: 'var(--text-muted)', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--color-cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
