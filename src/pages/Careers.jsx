import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, ChevronDown, Zap, Heart, Globe, Coffee, Users, Rocket } from 'lucide-react'

const openings = [
  {
    title: 'Senior Game Engine Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote / SF',
    color: 'cyan',
    desc: 'Own core systems in our physics simulation engine. You\'ll work on the tick loop, collision detection, and performance optimization. C++ experience preferred; strong algorithmic thinking required.',
    skills: ['C++', 'Physics Simulation', 'Game Engines', 'Performance'],
  },
  {
    title: 'Frontend Engineer (React)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    color: 'cyan',
    desc: 'Build the player dashboard, replay viewer, and arena spectator UI. You care deeply about smooth animation, WebGL rendering, and developer experience. TypeScript and React expertise needed.',
    skills: ['React', 'TypeScript', 'WebGL', 'Canvas'],
  },
  {
    title: 'Game Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote / SF',
    color: 'purple',
    desc: 'Help shape the evolution of our game mechanics. You\'ll design new arena types, balance bot stats, propose API features, and translate community feedback into design decisions.',
    skills: ['Game Design', 'Balance', 'Documentation', 'Playtesting'],
  },
  {
    title: 'Developer Advocate',
    department: 'Community',
    type: 'Full-time',
    location: 'Remote',
    color: 'orange',
    desc: 'Write tutorials, run workshops, build community relationships, and help developers go from "hello world" to "ranked champion." Strong communication and genuine love for coding communities required.',
    skills: ['JavaScript', 'Writing', 'Public Speaking', 'Community'],
  },
  {
    title: 'AI Research Intern',
    department: 'Research',
    type: 'Internship',
    location: 'Remote',
    color: 'purple',
    desc: 'Work with our battle data to study emergent AI behaviors, bot strategy patterns, and reinforcement learning approaches. Academic background in ML/AI or strong hobby project history welcome.',
    skills: ['Python', 'ML', 'Data Analysis', 'Research'],
  },
]

const perks = [
  { icon: <Globe size={22} />, color: 'cyan', title: '100% Remote', desc: 'Work from anywhere. We have team members across 3 continents and it works great.' },
  { icon: <Heart size={22} />, color: 'orange', title: 'Full Benefits', desc: 'Health, dental, vision, and mental health coverage for full-time employees.' },
  { icon: <Coffee size={22} />, color: 'purple', title: 'Home Office Budget', desc: '$1,500 setup stipend + $100/month for co-working or equipment.' },
  { icon: <Rocket size={22} />, color: 'cyan', title: 'Equity', desc: 'All full-time team members receive meaningful equity. We grow together.' },
  { icon: <Users size={22} />, color: 'purple', title: 'Team Retreats', desc: 'Twice-yearly retreats to collaborate in person, debate mechanics, and play each other\'s bots.' },
  { icon: <Zap size={22} />, color: 'orange', title: 'Fast Decisions', desc: 'No endless meetings. Own your work, ship it, and see the impact immediately.' },
]

function JobCard({ job }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      background: 'var(--bg-card)', border: `1px solid ${open ? `var(--border-${job.color === 'cyan' ? 'cyan' : job.color === 'purple' ? 'purple' : 'rgba(255,107,53,0.25)'})` : 'var(--border)'}`,
      borderRadius: 'var(--radius-lg)', overflow: 'hidden', transition: 'border-color 0.3s',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', padding: '28px 32px', background: 'transparent',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 20, textAlign: 'left',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
            <span className={`tag tag-${job.color}`}>{job.department}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Clock size={11} /> {job.type}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
              <MapPin size={11} /> {job.location}
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--text-primary)' }}>{job.title}</h3>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, color: 'var(--text-muted)' }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}>
            <div style={{ padding: '0 32px 32px', borderTop: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14, margin: '24px 0 20px' }}>{job.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                {job.skills.map(s => <span key={s} className="tag tag-cyan" style={{ fontSize: 11 }}>{s}</span>)}
              </div>
              <a href="mailto:hello@harpooninnovation.com" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                <Briefcase size={14} /> Apply for This Role
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Careers() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge section-badge-orange"><Briefcase size={11} /> Careers</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Build the future<br /><span className="text-gradient-orange">of the arena</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              We're a small, ambitious team that cares deeply about craft, games, and programming education. If that sounds like you, keep reading.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Why join us */}
      <section className="section">
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge"><Heart size={11} /> Why Harpoon Innovation</span>
            <h2 className="section-title">Perks & benefits</h2>
            <div className="glow-divider" />
          </motion.div>
          <div className="grid-3" style={{ textAlign: 'left' }}>
            {perks.map((p, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }} viewport={{ once: true }}
                style={{ padding: 30 }}>
                <div className={`feature-icon feature-icon-${p.color}`}>{p.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, marginBottom: 8 }}>{p.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
            <span className="section-badge section-badge-purple"><Briefcase size={11} /> Open Positions</span>
            <h2 className="section-title">{openings.length} open roles</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>Click any role to see details and apply.</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {openings.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No matching role */}
      <section className="section section-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              maxWidth: 600, margin: '0 auto',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', padding: '60px 48px',
            }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 14 }}>
              Don't see the right fit?
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>
              Send us an open application anyway. If you're excellent at what you do and love what we're building, we'd love to hear from you.
            </p>
            <a href="mailto:hello@harpooninnovation.com" className="btn btn-primary">
              <Zap size={15} /> Send Open Application
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
