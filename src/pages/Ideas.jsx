import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lightbulb, Rocket, Map, Globe, Code2, Users, Trophy, Zap, ArrowRight, Star } from 'lucide-react'

const roadmap = [
  {
    phase: 'Phase 1', title: 'Foundation', status: 'done', color: 'var(--color-green)',
    items: ['Core arena engine', 'Basic bot API (v1)', 'Harpoon throw & pull', 'FOV system', 'Closed beta'],
  },
  {
    phase: 'Phase 2', title: 'Early Access', status: 'active', color: 'var(--color-cyan)',
    items: ['Full API v2 release', 'Ranked matchmaking', 'Real-time spectate', 'Replay system', 'Community forum'],
  },
  {
    phase: 'Phase 3', title: 'Competitive', status: 'upcoming', color: 'var(--color-purple)',
    items: ['Seasonal ranked leagues', 'Official tournaments', 'Bot marketplace', 'Team battles (2v2)', 'AI coaching tools'],
  },
  {
    phase: 'Phase 4', title: 'Platform', status: 'future', color: 'var(--color-orange)',
    items: ['Custom arena builder', 'API v3 with new mechanics', 'Mobile viewer app', 'Educational curriculum', 'Enterprise licensing'],
  },
]

const visions = [
  { icon: <Globe size={28} />, color: 'cyan', title: 'A Global Standard', desc: 'We want Harpoon Arenas to become the definitive platform for competitive AI programming — the chess of coding games.' },
  { icon: <Users size={28} />, color: 'purple', title: 'A Learning Ecosystem', desc: 'Partner with universities and coding bootcamps to make bot-writing a standard exercise in AI, algorithms, and game theory.' },
  { icon: <Trophy size={28} />, color: 'orange', title: 'Professional Competition', desc: 'Create sponsored tournaments with real prizes, streaming audiences, and professional commentary — like esports for coders.' },
  { icon: <Code2 size={28} />, color: 'cyan', title: 'Open Research', desc: 'Publish anonymized battle data to support AI behavior research and create a dataset for reinforcement learning experimentation.' },
]

export default function Ideas() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge section-badge-purple"><Lightbulb size={11} /> Our Ideas</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Where we're going<br /><span className="text-gradient">and why it matters</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Our vision extends far beyond a game. We're building the infrastructure for a new generation of competitive programmers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Idea */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-badge section-badge-orange"><Rocket size={11} /> The Big Idea</span>
              <h2 className="section-title">Programming as<br /><span className="text-gradient-orange">performance</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                Right now, coding is largely a solitary activity — you write, you test, you ship. Great, but not exactly thrilling to watch. We believe code can be performance art.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                Imagine watching two AI bots — each representing hours of strategic thinking by their human authors — clash in real time. The harpoon flies, the pull activates, one bot slams into a wall. The crowd erupts. <em style={{ color: 'var(--text-primary)' }}>That programmer just outsmarted another programmer.</em>
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                That's the world we're building. A world where your code is your avatar, your algorithm is your skill, and every match is a proof of intelligence.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: <Star size={20} />, color: 'cyan', q: 'Why a game?', a: 'Games provide instant, meaningful feedback loops. You write code, you see results, you feel the win or loss. No metric beats "my bot survived."' },
                  { icon: <Map size={20} />, color: 'purple', q: 'Why the harpoon?', a: 'Classical bots just shoot. The harpoon introduces spatial reasoning, force vectors, and timing — richer skill expression with a lower learning curve.' },
                  { icon: <Globe size={20} />, color: 'orange', q: 'Why now?', a: 'AI tools are everywhere, but "learning to code AI" still feels abstract. A real-time visible consequence makes every line of code matter immediately.' },
                ].map((item, i) => (
                  <motion.div key={i} className="glass-card"
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div className={`feature-icon feature-icon-${item.color}`} style={{ margin: 0, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, marginBottom: 6 }}>{item.q}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item.a}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision pillars */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge"><Lightbulb size={11} /> Long-Term Vision</span>
            <h2 className="section-title">Four pillars of our future</h2>
            <div className="glow-divider" />
          </motion.div>

          <div className="grid-2" style={{ textAlign: 'left' }}>
            {visions.map((v, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{ padding: 40 }}>
                <div className={`feature-icon feature-icon-${v.color}`} style={{ width: 60, height: 60 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 14 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 15 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-orange"><Map size={11} /> Roadmap</span>
            <h2 className="section-title">Where we are &<br /><span className="text-gradient">where we're headed</span></h2>
            <div className="glow-divider" />
          </motion.div>

          <div className="grid-4" style={{ textAlign: 'left' }}>
            {roadmap.map((phase, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{
                  background: 'var(--bg-card)', border: `1px solid ${phase.color}30`,
                  borderRadius: 'var(--radius-lg)', padding: 28,
                  opacity: phase.status === 'future' ? 0.65 : 1,
                  position: 'relative', overflow: 'hidden',
                }}>
                {phase.status === 'active' && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    padding: '3px 10px', borderRadius: 50, fontSize: 10, fontWeight: 700,
                    background: 'var(--color-cyan-dim)', color: 'var(--color-cyan)',
                    border: '1px solid var(--border-cyan)', letterSpacing: '0.08em',
                  }}>LIVE</div>
                )}
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.12em', color: phase.color, marginBottom: 6,
                }}>{phase.phase}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, marginBottom: 20 }}>{phase.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {phase.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-secondary)' }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
                        background: phase.status === 'done' ? phase.color : 'transparent',
                        border: `2px solid ${phase.status === 'done' ? phase.color : 'var(--text-muted)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {phase.status === 'done' && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                        {phase.status === 'active' && <div style={{ width: 6, height: 6, borderRadius: '50%', background: phase.color }} />}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))',
              border: '1px solid var(--border-cyan)',
              borderRadius: 'var(--radius-xl)', padding: '72px 48px',
            }}>
            <span className="section-badge" style={{ marginBottom: 28 }}><Zap size={11} /> Get Involved</span>
            <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
              Help shape<br /><span className="text-gradient">what comes next</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 44px', lineHeight: 1.7 }}>
              Join our Discord, participate in playtests, and vote on upcoming features. This game is built by the community, for the community.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary"><Users size={15} /> Join Community</Link>
              <Link to="/game" className="btn btn-secondary">Explore the Game <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
