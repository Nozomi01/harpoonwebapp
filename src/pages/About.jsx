import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Rocket, Heart, Globe, Lightbulb, Shield, Users, ArrowRight, Zap } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div variants={{ visible: { transition: { staggerChildren: 0.12 } } }} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="section-badge"><Users size={11} /> Who We Are</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              We believe <span className="text-gradient">coding should feel</span><br />like play
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Harpoon Innovation was born from a simple idea: what if the most effective way to learn AI programming was through an adrenaline-fueled battle arena?
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="section-badge section-badge-orange"><Rocket size={11} /> Our Story</span>
              <h2 className="section-title">From a garage to<br /><span className="text-gradient-orange">a global arena</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                It started with a late-night argument about who could write a smarter Robocode bot. Two developers, a whiteboard covered in harpoon physics diagrams, and a stubborn belief that classic programming games deserved a modern, more visceral reinvention.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                After two years of prototyping, dozens of playtest groups, and more coffee than we care to admit, Harpoon Arenas went live — and players haven't stopped coding since.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Today, Harpoon Innovation is a small but fierce team of engineers, game designers, and competitive programmers united by a single mission: make AI programming fun, accessible, and wildly competitive.
              </p>
            </motion.div>

            {/* Story timeline */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {[
                { year: '2022', title: 'The Idea', desc: 'Two developers argued about Robocode and started sketching a harpoon mechanic on a napkin.', color: 'var(--color-cyan)' },
                { year: '2023', title: 'First Prototype', desc: 'A working arena engine with 10 test players, 3 mechanics, and way too many bugs.', color: 'var(--color-purple)' },
                { year: '2024', title: 'Closed Beta', desc: 'Invited 500 programmers. Got feedback, rebuilt core systems, launched the FOV radar.', color: 'var(--color-orange)' },
                { year: '2025', title: 'Early Access', desc: '12,000+ active players, weekly tournaments, and the harpoon pull is even more satisfying.', color: 'var(--color-cyan)' },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ display: 'flex', gap: 24, marginBottom: 28, position: 'relative' }}>
                  {/* Timeline line */}
                  {i < 3 && <div style={{ position: 'absolute', left: 37, top: 50, width: 2, height: 40, background: 'var(--border)' }} />}
                  <div style={{
                    width: 76, height: 76, flexShrink: 0, borderRadius: 'var(--radius-md)',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: item.color,
                  }}>{item.year}</div>
                  <div style={{ paddingTop: 4 }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-purple"><Lightbulb size={11} /> Mission & Vision</span>
            <h2 className="section-title">What drives us forward</h2>
            <div className="glow-divider" />
          </motion.div>

          <div className="grid-2" style={{ textAlign: 'left' }}>
            {[
              {
                icon: <Rocket size={28} />, color: 'cyan',
                title: 'Our Mission',
                desc: 'To make AI programming accessible, exciting, and deeply rewarding for everyone — from students writing their first loop to senior engineers building expert-level strategies. We believe learning should feel like winning.',
              },
              {
                icon: <Globe size={28} />, color: 'purple',
                title: 'Our Vision',
                desc: 'A world where anyone, anywhere, can express their algorithmic creativity in a real-time competitive environment. Harpoon Arenas will be the global standard for competitive AI programming games.',
              },
            ].map((item, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }} viewport={{ once: true }}
                style={{ padding: 40 }}>
                <div className={`feature-icon feature-icon-${item.color}`} style={{ width: 64, height: 64 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 16 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 15 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge"><Heart size={11} /> Our Values</span>
            <h2 className="section-title">The principles we<br /><span className="text-gradient">code by</span></h2>
            <div className="glow-divider" />
          </motion.div>

          <div className="grid-3" style={{ textAlign: 'left' }}>
            {[
              { icon: <Zap size={22} />, color: 'cyan', title: 'Speed Matters', desc: 'We ship fast, iterate faster, and never let perfect be the enemy of great. Players deserve improvements, not roadmaps.' },
              { icon: <Shield size={22} />, color: 'orange', title: 'Fair Competition', desc: 'Every bot competes under identical rules. No pay-to-win mechanics. The best code always wins.' },
              { icon: <Lightbulb size={22} />, color: 'purple', title: 'Open Knowledge', desc: 'We publish our game mechanics, share AI research, and foster a community where strategies are discussed openly.' },
              { icon: <Heart size={22} />, color: 'cyan', title: 'Player First', desc: 'Every feature decision starts with one question: does this make the game more fun for the player writing the code?' },
              { icon: <Users size={22} />, color: 'purple', title: 'Community Power', desc: 'Our best features came from player suggestions. We listen, we respond, and we build together.' },
              { icon: <Globe size={22} />, color: 'orange', title: 'Global Reach', desc: 'The arena is open to everyone. We support 12 languages and offer free tiers so cost is never a barrier.' },
            ].map((v, i) => (
              <motion.div key={i} className="glass-card glass-card-purple"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }} viewport={{ once: true }}
                style={{ padding: 32 }}>
                <div className={`feature-icon feature-icon-${v.color}`}>{v.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, marginBottom: 10 }}>{v.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2,
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            {[
              { num: '4', label: 'Team Members', sub: 'and growing', color: 'var(--color-cyan)' },
              { num: '2+', label: 'Years Building', sub: 'since 2022', color: 'var(--color-purple)' },
              { num: '12K+', label: 'Players', sub: 'worldwide', color: 'var(--color-orange)' },
              { num: '∞', label: 'Strategies', sub: 'waiting to be written', color: 'var(--color-cyan)' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{
                  padding: '48px 32px', textAlign: 'center',
                  background: 'rgba(7,7,30,0.8)',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}>
                <div style={{ fontSize: '3.2rem', fontFamily: 'var(--font-display)', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'var(--text-primary)', fontSize: 15, fontWeight: 600, marginTop: 12 }}>{s.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Want to join us?</h2>
            <p className="section-subtitle">We're always looking for passionate people who love games, code, and a good challenge.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/careers" className="btn btn-primary"><Rocket size={15} /> View Open Roles</Link>
              <Link to="/team" className="btn btn-secondary">Meet the Team <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
