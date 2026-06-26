import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────
   Local Zhao Li Ying photos — served from /public/team/
   Sources: Wikimedia Commons (CC BY-SA), downloaded locally
───────────────────────────────────────────────────────────────── */
const ZLY = {
  pose1: '/team/john.png',  // Chinese Restaurant announcement — natural pose
  pose2: '/team/designer.png',  // Chinese Restaurant (cropped) — close-up portrait
  pose3: '/team/ryan_wang.png',  // Tokyo Film Festival 2024 — red carpet full gown
  pose4: '/team/japan.png',  // Tokyo Film Festival 2024 — evening look
  pose5: '/team/james_head.png',  // Dr. James Head
}

/* ─────────────────────────────────────────────────────────────────
   Team data
───────────────────────────────────────────────────────────────── */
const team = [
  {
    name: 'John Ellsworth',
    role: 'Co-Founder & CEO',
    photo: ZLY.pose1,
    glow: 'rgba(0,212,255,0.5)',
    accent: '#00d4ff',
    bio: 'Former Human Resources Specialist. Obsessed with competitive programming since college. Designed the original harpoon physics model on a whiteboard and refused to let anyone erase it.',
    tags: ['Game Design', 'Business', 'AI'],
  },
  {
    name: 'Ryan Wang',
    role: 'CTO',
    photo: ZLY.pose3,
    glow: 'rgba(139,92,246,0.5)',
    accent: '#8b5cf6',
    bio: 'Senior Software Engineer & Marketing Automation Specialist. Built real-time multiplayer systems for 8 years. Responsible for the deterministic physics engine and the FOV system that makes every fight feel completely fair.',
    tags: ['Systems', 'Architecture', 'Web Tech Stacks', 'Blockchain'],
  },
  {
    name: 'Tatsuya Yamamoto',
    role: 'Senior Developer',
    photo: ZLY.pose4,
    glow: 'rgba(16,185,129,0.5)',
    accent: '#10b981',
    bio: 'Full-stack specialist with a deep love for developer experience. Built the entire bot API and SDK from scratch. If your error message makes sense, Jordan wrote it.',
    tags: ['Frontend', 'API', 'DX'],
  },
  {
    name: 'Kaitlyn Krueger',
    role: 'UI Designer',
    photo: ZLY.pose2,
    glow: 'rgba(244,114,182,0.5)',
    accent: '#f472b6',
    bio: 'UX and visual design lead with a background in motion graphics and competitive gaming. Every particle effect, every animation, every UI detail has her fingerprints on it.',
    tags: ['UX/UI', 'Motion', 'Brand'],
  },
]

const advisors = [
  {
    name: 'Dr. James Head',
    role: 'AI Research Advisor',
    photo: ZLY.pose5,
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
  },
  {
    name: 'Hana Alamassi',
    role: 'Gaming Industry Advisor',
    photo: '/team/hana.png',
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
        padding: '32px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

      {/* ── Colour bloom behind avatar ─────────────────── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 180,
        background: `radial-gradient(ellipse at 50% 0%, ${member.glow} 0%, transparent 70%)`,
        opacity: hovered ? 0.9 : 0.5,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* ── Circular avatar ────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 20 }}>
        {/* Animated glow ring */}
        <div style={{
          position: 'absolute', inset: -4,
          borderRadius: '50%',
          background: `conic-gradient(from 0deg, ${member.accent}90, transparent 60%, ${member.accent}60, transparent 100%)`,
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.4s',
          animation: hovered ? 'spin 4s linear infinite' : 'none',
        }} />
        {/* Inner dark ring to separate glow from image */}
        <div style={{
          position: 'absolute', inset: -1,
          borderRadius: '50%',
          border: `2px solid ${member.accent}40`,
        }} />
        <div style={{
          width: 203, height: 203,
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              filter: hovered
                ? 'saturate(1.18) contrast(1.06) brightness(1.05)'
                : 'saturate(1.05) contrast(1.01)',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'filter 0.5s ease, transform 0.6s ease',
            }}
          />
        </div>
      </div>

      {/* ── Name, role, tags ───────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 16, width: '100%' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
          fontWeight: 800, lineHeight: 1.2, marginBottom: 6,
        }}>{member.name}</h3>
        <div style={{
          display: 'inline-block',
          padding: '4px 14px', borderRadius: 50, marginBottom: 12,
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          background: `${member.accent}15`,
          border: `1px solid ${member.accent}40`,
          color: member.accent,
        }}>{member.role}</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          {member.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px', borderRadius: 50,
              fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
              background: `${member.accent}10`,
              border: `1px solid ${member.accent}30`,
              color: member.accent,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* ── Divider ────────────────────────────────────── */}
      <div style={{
        width: '80%', height: 1, marginBottom: 16,
        background: `linear-gradient(90deg, transparent, ${member.accent}40, transparent)`,
      }} />

      {/* ── Bio & socials ──────────────────────────────── */}
      <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 13, lineHeight: 1.75, marginBottom: 20, textAlign: 'left' }}>
        {member.bio}
      </p>


      {/* Accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '8%', right: '8%',
        height: 2, borderRadius: 2,
        background: `linear-gradient(90deg, transparent, ${member.accent}70, transparent)`,
        opacity: hovered ? 1 : 0.35,
        transition: 'opacity 0.4s',
      }} />

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
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
        borderRadius: 22,
        background: 'rgba(7,7,30,0.8)',
        border: `1px solid ${hovered ? person.accent + '45' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 20px 60px ${person.glow}` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
        padding: '28px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Colour bloom */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 150,
        background: `radial-gradient(ellipse at 50% 0%, ${person.glow} 0%, transparent 70%)`,
        opacity: hovered ? 0.9 : 0.45,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Circular avatar */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: 16 }}>
        <div style={{
          position: 'absolute', inset: -3,
          borderRadius: '50%',
          border: `2px solid ${person.accent}50`,
          opacity: hovered ? 1 : 0.6,
          transition: 'opacity 0.4s',
        }} />
        <div style={{
          width: 143, height: 143,
          borderRadius: '50%',
          overflow: 'hidden',
        }}>
          <img src={person.photo} alt={person.name} style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, marginBottom: 6 }}>{person.name}</h4>
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
              <a href="mailto:hello@harpooninnovation.com" className="btn btn-secondary">
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
