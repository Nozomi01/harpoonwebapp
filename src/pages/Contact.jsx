import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, Zap } from 'lucide-react'

const contactReasons = ['General Inquiry', 'Game Bug Report', 'Partnership', 'Press / Media', 'Career', 'Educational Use', 'Enterprise']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', reason: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge"><Mail size={11} /> Contact</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Let's talk about<br /><span className="text-gradient">the arena</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Questions, partnerships, press inquiries, or just want to say your bot beat our devs' bots — we want to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 8 }}>Get in touch</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 40, fontSize: 15 }}>
                We're a small team and we read every message personally. Typical response time is under 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: <Mail size={20} />, color: 'cyan', label: 'Email', value: 'hello@harpooninnovation.com', sub: 'For all inquiries' },
                  { icon: <MapPin size={20} />, color: 'purple', label: 'Location', value: 'Chapel Hill, NC', sub: 'Remote-first team' },
                  { icon: <Clock size={20} />, color: 'orange', label: 'Response Time', value: '< 24 hours', sub: 'Mon–Fri, 9am–6pm PT' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className={`feature-icon feature-icon-${item.color}`} style={{ margin: 0, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <div className="glass-card" style={{ padding: 44 }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px', color: '#10b981',
                    }}>
                      <Zap size={28} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 12 }}>Message sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: 28 }}>
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 8 }}>Send us a message</h3>

                    <div className="grid-2" style={{ gap: 20 }}>
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input className="form-input" type="text" placeholder="Marcus Chen" required
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" placeholder="you@example.com" required
                          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Reason for Contact</label>
                      <select className="form-select" value={form.reason}
                        onChange={e => setForm({ ...form, reason: e.target.value })}
                        style={{ background: 'rgba(255,255,255,0.04)', color: form.reason ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                        <option value="" style={{ background: '#07071e' }}>Select a topic...</option>
                        {contactReasons.map(r => <option key={r} value={r} style={{ background: '#07071e' }}>{r}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea className="form-textarea" placeholder="Tell us what's on your mind..." required
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                      <Send size={15} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
