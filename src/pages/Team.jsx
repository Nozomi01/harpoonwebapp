import { useState } from 'react'
import { motion } from 'framer-motion'
import { Share2, Network, Terminal, Mail } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────
   Local Zhao Li Ying photos — served from /public/team/
   Sources: Wikimedia Commons (CC BY-SA), downloaded locally
───────────────────────────────────────────────────────────────── */
const ZLY = {
  pose1: '/team/zly1.jpg',  // Chinese Restaurant announcement — natural pose
  pose2: '/team/zly2.jpg',  // Chinese Restaurant (cropped) — close-up portrait
  pose3: '/team/zly3.jpg',  // Tokyo Film Festival 2024 — red carpet full gown
  pose4: '/team/zly4.jpg',  // Tokyo Film Festival 2024 — evening look
  pose5: '/team/zly5.jpg',  // Tokyo Film Festival 2024 (cropped) — upper body
}

/* ─────────────────────────────────────────────────────────────────
   Team data
───────────────────────────────────────────────────────────────── */
const team = [
  {
    name: 'Mei Lin Zhao',
    role: 'Co-Founder & CEO',
    photo: ZLY.pose1,
    glow: 'rgba(0,212,255,0.5)',
    accent: '#00d4ff',
    bio: 'Former game engine engineer at Unity. Obsessed with competitive programming since college. Designed the original harpoon physics model on a whiteboard and refused to let anyone erase it.',
    tags: ['Game Design', 'Business', 'AI'],
  },
  {
    name: 'Sofia Laurent',
    role: 'Lead Designer',
    photo: ZLY.pose2,
    glow: 'rgba(244,114,182,0.5)',
    accent: '#f472b6',
    bio: 'UX and visual design lead with a background in motion graphics and competitive gaming. Every particle effect, every animation, every UI detail has her fingerprints on it.',
    tags: ['UX/UI', 'Motion', 'Brand'],
  },
  {
    name: 'Elena Vasquez',
    role: 'CTO',
    photo: ZLY.pose3,
    glow: 'rgba(139,92,246,0.5)',
    accent: '#8b5cf6',
    bio: 'Built real-time multiplayer systems for 8 years. Responsible for the deterministic physics engine and the FOV system that makes every fight feel completely fair.',
    tags: ['Systems', 'Architecture', 'C++'],
  },
  {
    name: 'Jordan Kim',
    role: 'Senior Developer',
    photo: ZLY.pose4,
    glow: 'rgba(16,185,129,0.5)',
    accent: '#10b981',
    bio: 'Full-stack specialist with a deep love for developer experience. Built the entire bot API and SDK from scratch. If your error message makes sense, Jordan wrote it.',
    tags: ['Frontend', 'API', 'DX'],
  },
]

const advisors = [
  {
    name: 'Dr. Priya Nair',
    role: 'AI Research Advisor',
    photo: ZLY.pose5,
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
  },
  {
    name: 'Hana Yamamoto',
    role: 'Gaming Industry Advisor',
    photo: ZLY.pose2,
    accent: '#06b6d4',
    glow: 'rgba(6,182,212,0.4)',
  },
]

/* ─────────────────────────────────────────────────────────────────
   TeamCard
───────────────────────────────────────────────────────────────── */
function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden',
        background: 'rgba(7,7,30,0.85)',
        border: `1px solid ${hovered ? member.accent + '55' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 32px 80px ${member.glow}, 0 0 0 1px ${member.accent}30` : 'none',
        transform: hovered ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        cursor: 'default',
      }}>

      {/* ── Photo ─────────────────────────────────────── */}
      <div style={{ position: 'relative', paddingTop: '118%', overflow: 'hidden' }}>

        {/* Colour bloom */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: `radial-gradient(ellipse at 50% 20%, ${member.glow} 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0.55,
          transition: 'opacity 0.4s',
        }} />

        <img
          src={member.photo}
          alt={member.name}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            filter: hovered
              ? 'saturate(1.18) contrast(1.06) brightness(1.05)'
              : 'saturate(1.05) contrast(1.01)',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'filter 0.5s ease, transform 0.6s ease',
          }}
        />

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '60%', zIndex: 2, pointerEvents: 'none',
          background: `linear-gradient(to top,
            rgba(7,7,30,1) 0%,
            rgba(7,7,30,0.9) 22%,
            rgba(7,7,30,0.45) 55%,
            transparent 100%)`,
        }} />

        {/* Role badge */}
        <div style={{
          position: 'absolute', top: 18, right: 18, zIndex: 3,
          padding: '5px 14px', borderRadius: 50,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'rgba(4,4,20,0.78)', backdropFilter: 'blur(12px)',
          border: `1px solid ${member.accent}45`, color: member.accent,
        }}>{member.role}</div>

        {/* Name + tags on photo bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, padding: '0 24px 20px' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.3vw, 1.3rem)',
            fontWeight: 800, lineHeight: 1.15, marginBottom: 10,
          }}>{member.name}</h3>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {member.tags.map(tag => (
              <span key={tag} style={{
                padding: '3px 10px', borderRadius: 50,
                fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
                background: `${member.accent}18`,
                border: `1px solid ${member.accent}35`,
                color: member.accent,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bio & socials ────────────────────────────────── */}
      <div style={{ padding: '20px 24px 24px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: 13.5, lineHeight: 1.78, marginBottom: 20 }}>
          {member.bio}
        </p>

        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { icon: <Share2 size={13} />, label: 'Twitter' },
            { icon: <Network size={13} />, label: 'LinkedIn' },
            { icon: <Terminal size={13} />, label: 'GitHub' },
            { icon: <Mail size={13} />, label: 'Email' },
          ].map((s, i) => (
            <a key={i} href="#" title={s.label} style={{
              width: 33, height: 33, borderRadius: 9,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-muted)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${member.accent}18`
                e.currentTarget.style.borderColor = `${member.accent}45`
                e.currentTarget.style.color = member.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '8%', right: '8%',
        height: 2, borderRadius: 2,
        background: `linear-gradient(90deg, transparent, ${member.accent}70, transparent)`,
        opacity: hovered ? 1 : 0.35,
        transition: 'opacity 0.4s',
      }} />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   AdvisorCard
───────────────────────────────────────────────────────────────── */
function AdvisorCard({ person, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 22, overflow: 'hidden',
        background: 'rgba(7,7,30,0.8)',
        border: `1px solid ${hovered ? person.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 20px 60px ${person.glow}` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
      }}>
      <div style={{ position: 'relative', paddingTop: '82%', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `radial-gradient(ellipse at 50% 10%, ${person.glow} 0%, transparent 65%)`,
        }} />
        <img src={person.photo} alt={person.name} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(7,7,30,1) 0%, transparent 100%)',
        }} />
      </div>
      <div style={{ padding: '12px 24px 24px', textAlign: 'center' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, marginBottom: 5 }}>{person.name}</h4>
        <p style={{ color: person.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{person.role}</p>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────── */
export default function Team() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-badge">Our People</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: 680, margin: '0 auto 20px' }}>
              The minds behind<br /><span className="text-gradient">the arena</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              A small, fierce team of builders obsessed with making AI programming the most fun thing you've ever done.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Team */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: 52 }}>
            <span className="section-badge section-badge-purple">Core Team</span>
            <h2 className="section-title">Meet the founders & builders</h2>
          </motion.div>

          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
            {team.map((member, i) => <TeamCard key={member.name} member={member} index={i} />)}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: 48 }}>
            <span className="section-badge">Advisors</span>
            <h2 className="section-title">Guided by experience</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 300px)', gap: 24 }}>
            {advisors.map((a, i) => <AdvisorCard key={a.name} person={a} index={i} />)}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section section-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-orange">Culture</span>
            <h2 className="section-title">How we work</h2>
            <div className="glow-divider" />
          </motion.div>
          <div className="grid-4" style={{ textAlign: 'left' }}>
            {[
              { emoji: '🌏', title: '100% Remote', desc: 'Team across 3 continents. Async-first, no mandatory standups.' },
              { emoji: '⚡', title: 'Tiny & Fast', desc: 'Four people move faster than a hundred. We ship weekly.' },
              { emoji: '🎮', title: 'Players First', desc: "We all play. If it's not fun, we don't ship it." },
              { emoji: '💡', title: 'Open Ideas', desc: 'Everyone has a roadmap vote. Best idea wins, regardless of title.' },
            ].map((c, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09 }} viewport={{ once: true }}
                style={{ padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{c.emoji}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, marginBottom: 8 }}>{c.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-center" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(0,212,255,0.08))',
              border: '1px solid var(--border-purple)',
              borderRadius: 'var(--radius-xl)', padding: '72px 48px',
            }}>
            <h2 className="section-title">Could this be you?</h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              We hire for passion over pedigree. If you love building, playing, or designing — we want to hear from you.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/careers" className="btn btn-primary">View Open Roles</a>
              <a href="mailto:hello@harpoonstudios.io" className="btn btn-secondary">
                <Mail size={15} /> Say Hello
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .team-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}
