import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Eye, Crosshair, Shield, Cpu, Zap, Users, Trophy, Star, ChevronRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', position: 'relative',
        padding: '120px 0 80px',
      }}>
        {/* Radial glow behind hero */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="section-badge">
                <Zap size={11} /> Now in Early Access
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', fontWeight: 900,
              lineHeight: 1.05, marginBottom: 28, letterSpacing: '-0.03em',
            }}>
              Code Your Bot.
              <br />
              <span className="text-gradient">Rule the Arena.</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto 48px',
              lineHeight: 1.7,
            }}>
              Write AI code for your robot warrior. Program movement, deploy the harpoon,
              pull enemies into traps — then watch your strategy unfold in fully automated battles.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/game" className="btn btn-primary">
                <Zap size={16} /> Start Playing
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated arena preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ marginTop: 80, position: 'relative' }}>
            <ArenaPreview />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px 60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
          }}>
            {[
              { num: '12K+', label: 'Active Players', color: 'var(--color-cyan)' },
              { num: '250K+', label: 'Battles Fought', color: 'var(--color-purple)' },
              { num: '8.3M', label: 'Lines of Bot Code', color: 'var(--color-orange)' },
              { num: '99.9%', label: 'Uptime', color: 'var(--color-green)' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 900, color: s.color, lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 8, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <span className="section-badge section-badge-orange">
                <Crosshair size={11} /> What is Harpoon Arenas?
              </span>
              <h2 className="section-title">
                AI combat meets<br /><span className="text-gradient-orange">harpoon warfare</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 28 }}>
                Inspired by classic programming games like Robocode, Harpoon Arenas adds a completely new dimension: the harpoon. Your AI bot can throw a physical harpoon that attaches to enemies — then reel them in for a devastating pull.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 36 }}>
                Master the field-of-view system to spot enemies before they see you. Write smarter movement patterns. Program your escape logic. The better your code, the deadlier your bot.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/game" className="btn btn-primary"><Cpu size={15} /> See Mechanics</Link>
                <Link to="/blog" className="btn btn-secondary">Read the Devlog <ChevronRight size={15} /></Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: <Eye size={20} />, title: 'Field of View System', desc: 'Bots only see enemies within their cone of vision. Strategic positioning is everything.', color: 'cyan' },
                { icon: <Crosshair size={20} />, title: 'Harpoon Mechanics', desc: 'Launch a harpoon that physically attaches to enemies and lets you pull them toward you.', color: 'orange' },
                { icon: <Code2 size={20} />, title: 'Write Real Code', desc: 'Program your bot\'s behavior in a clean API. Every decision your bot makes is yours to design.', color: 'purple' },
                { icon: <Shield size={20} />, title: 'Survival Strategy', desc: 'Avoid danger zones, manage cooldowns, and outlast every opponent in the arena.', color: 'purple' },
              ].map((item, i) => (
                <motion.div key={i} className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ padding: '20px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <div className={`feature-icon feature-icon-${item.color}`} style={{ margin: 0, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontFamily: 'var(--font-display)', marginBottom: 6 }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge">Step by Step</span>
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle">Get from idea to battle in three simple steps.</p>
          </motion.div>

          <div className="grid-3" style={{ textAlign: 'left', marginTop: 20 }}>
            {[
              { num: '01', icon: <Code2 size={28} />, title: 'Write Your Strategy', desc: 'Use our bot API to program movement logic, targeting systems, harpoon deployment timing, and escape maneuvers.', color: 'cyan' },
              { num: '02', icon: <Cpu size={28} />, title: 'Test in the Sandbox', desc: 'Run your bot against practice dummies and replay matches frame by frame. Refine until your logic is razor-sharp.', color: 'purple' },
              { num: '03', icon: <Trophy size={28} />, title: 'Compete & Rank Up', desc: 'Enter official tournaments, climb the global leaderboard, and prove your AI strategy is the strongest in the arena.', color: 'orange' },
            ].map((step, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                style={{ padding: 36, position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: 20, right: 24,
                  fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)', lineHeight: 1,
                }}>{step.num}</div>
                <div className={`feature-icon feature-icon-${step.color}`}>{step.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 14 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODE PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-badge section-badge-purple"><Code2 size={11} /> Code Example</span>
              <h2 className="section-title">Simple API,<br /><span className="text-gradient">Infinite Strategy</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                Our bot API is intuitive enough for beginners but powerful enough for experts. Write in JavaScript, deploy in seconds.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Full movement control', 'FOV-based radar system', 'Harpoon throw & pull API', 'Collision & damage events', 'Async-safe game loop'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: 14 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cyan)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="code-block">
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
                    <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                  ))}
                  <span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>bot.js</span>
                </div>
                <pre>
<span className="code-cm">{'// Define your AI bot strategy'}</span>{'\n'}
<span className="code-kw">export default</span>{' '}<span className="code-kw">class</span>{' '}<span className="code-fn">MyBot</span>{' extends '}<span className="code-fn">BotBase</span>{' {\n'}
{'  '}<span className="code-fn">onTick</span>{'(state) {\n'}
{'    '}<span className="code-cm">{'// Scan for enemies in FOV'}</span>{'\n'}
{'    '}<span className="code-kw">const</span>{' enemy = state.'}<span className="code-fn">getNearestEnemy</span>{'();\n\n'}
{'    '}<span className="code-kw">if</span>{' (enemy && enemy.dist < '}<span className="code-num">{'400'}</span>{') {\n'}
{'      '}<span className="code-cm">{'// Face and throw harpoon'}</span>{'\n'}
{'      '}<span className="code-kw">this</span>{'.'}<span className="code-fn">rotateTo</span>{'(enemy.angle);\n'}
{'      '}<span className="code-kw">this</span>{'.'}<span className="code-fn">throwHarpoon</span>{'();\n'}
{'    } '}<span className="code-kw">else</span>{' {\n'}
{'      '}<span className="code-cm">{'// Patrol the map'}</span>{'\n'}
{'      '}<span className="code-kw">this</span>{'.'}<span className="code-fn">moveForward</span>{'('}<span className="code-num">{'3'}</span>{');\n'}
{'    }\n'}
{'  }\n\n'}
{'  '}<span className="code-fn">onHarpoonHit</span>{'(target) {\n'}
{'    '}<span className="code-cm">{'// Pull enemy toward us!'}</span>{'\n'}
{'    '}<span className="code-kw">this</span>{'.'}<span className="code-fn">pullHarpoon</span>{'();\n'}
{'  }\n}'}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-purple"><Star size={11} /> Features</span>
            <h2 className="section-title">Everything you need to<br /><span className="text-gradient">build the perfect bot</span></h2>
            <div className="glow-divider" />
          </motion.div>
          <div className="grid-4">
            {[
              { icon: <Eye size={22} />, title: 'FOV Radar', desc: 'Realistic line-of-sight detection system with configurable angle and range.', color: 'cyan' },
              { icon: <Crosshair size={22} />, title: 'Harpoon Physics', desc: 'Realistic projectile arc, rope tension, and pull-force calculations.', color: 'orange' },
              { icon: <Code2 size={22} />, title: 'Full Bot API', desc: 'Over 40 API methods to control every aspect of your bot\'s behavior.', color: 'purple' },
              { icon: <Trophy size={22} />, title: 'Ranked Leagues', desc: 'Bronze through Diamond ranked seasons with weekly tournaments.', color: 'cyan' },
              { icon: <Users size={22} />, title: 'Community Battles', desc: 'Challenge friends, fork community bots, share strategies openly.', color: 'purple' },
              { icon: <Shield size={22} />, title: 'Sandbox Mode', desc: 'Test endlessly in a private sandbox with full replay and debug tools.', color: 'orange' },
              { icon: <Cpu size={22} />, title: 'Real-Time Engine', desc: '60fps battle simulation with deterministic physics for fair play.', color: 'cyan' },
              { icon: <Zap size={22} />, title: 'Instant Deploy', desc: 'Upload code and enter battle in under 30 seconds.', color: 'purple' },
            ].map((f, i) => (
              <motion.div key={i} className="glass-card glass-card-purple"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 4) * 0.08 }}
                viewport={{ once: true }}
                style={{ padding: 28, textAlign: 'left' }}>
                <div className={`feature-icon feature-icon-${f.color}`}>{f.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, marginBottom: 10 }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container section-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: '80px 60px',
              position: 'relative', overflow: 'hidden',
            }}>
            {/* Background decoration */}
            <div style={{
              position: 'absolute', top: -100, right: -100,
              width: 400, height: 400, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -80, left: -80,
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <span className="section-badge" style={{ marginBottom: 28 }}>
              <Trophy size={11} /> Join the Arena
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: 600, margin: '0 auto 20px' }}>
              Ready to build your<br /><span className="text-gradient">ultimate AI warrior?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 44px', lineHeight: 1.7 }}>
              Join thousands of developers who are already crafting deadly bots. Free to start, no limits on creativity.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/game" className="btn btn-primary"><Zap size={16} /> Get Early Access</Link>
              <Link to="/team" className="btn btn-secondary">Meet the Team <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

/* ── Arena Preview SVG ── */
function ArenaPreview() {
  return (
    <div style={{
      maxWidth: 760, margin: '0 auto',
      background: 'rgba(7,7,30,0.7)',
      border: '1px solid rgba(0,212,255,0.2)',
      borderRadius: 'var(--radius-xl)',
      padding: '28px',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.05)',
    }}>
      {/* Window chrome */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ flex: 1, textAlign: 'center', color: 'var(--text-muted)', fontSize: 12 }}>
          Harpoon Arenas — Battle #4,821
        </div>
      </div>

      {/* Arena field */}
      <svg width="100%" viewBox="0 0 700 380" style={{ borderRadius: 12, background: 'rgba(2,2,18,0.8)' }}>
        {/* Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,212,255,0.04)" strokeWidth="1"/>
          </pattern>
          <radialGradient id="bot1glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bot2glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bot3glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="700" height="380" fill="url(#grid)" />

        {/* Arena boundary */}
        <rect x="10" y="10" width="680" height="360" rx="8" fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="1.5" strokeDasharray="8,4" />

        {/* FOV cones */}
        <path d="M 180 200 L 280 130 L 320 200 L 280 270 Z" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
        <path d="M 520 140 L 440 100 L 400 160 L 440 220 Z" fill="rgba(255,107,53,0.04)" stroke="rgba(255,107,53,0.15)" strokeWidth="1" />

        {/* Harpoon line */}
        <line x1="200" y1="200" x2="490" y2="145" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" />
        {/* Harpoon tip */}
        <polygon points="490,145 480,138 480,152" fill="#00d4ff" opacity="0.9" />

        {/* Bot 1 (player) */}
        <circle cx="200" cy="200" r="30" fill="url(#bot1glow)" />
        <circle cx="200" cy="200" r="14" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="2" />
        <circle cx="200" cy="200" r="6" fill="#00d4ff" />
        <line x1="200" y1="200" x2="218" y2="191" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bot 2 (enemy) */}
        <circle cx="510" cy="145" r="24" fill="url(#bot2glow)" />
        <circle cx="510" cy="145" r="12" fill="rgba(255,107,53,0.2)" stroke="#ff6b35" strokeWidth="2" />
        <circle cx="510" cy="145" r="5" fill="#ff6b35" />
        <line x1="510" y1="145" x2="495" y2="152" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bot 3 */}
        <circle cx="380" cy="300" r="24" fill="url(#bot3glow)" />
        <circle cx="380" cy="300" r="12" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="380" cy="300" r="5" fill="#8b5cf6" />

        {/* HP bars */}
        <rect x="168" y="222" width="64" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="168" y="222" width="52" height="4" rx="2" fill="#00d4ff" />
        <rect x="480" y="165" width="60" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="480" y="165" width="22" height="4" rx="2" fill="#ff6b35" />

        {/* Labels */}
        <text x="200" y="248" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="JetBrains Mono, monospace">PLAYER_A</text>
        <text x="510" y="190" textAnchor="middle" fill="rgba(255,107,53,0.6)" fontSize="10" fontFamily="JetBrains Mono, monospace">ENEMY_X</text>
        <text x="380" y="326" textAnchor="middle" fill="rgba(139,92,246,0.6)" fontSize="10" fontFamily="JetBrains Mono, monospace">BOT_77</text>
      </svg>

      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, color: 'var(--text-muted)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
        <span style={{ color: 'var(--color-cyan)' }}>● LIVE</span>
        <span>TICK: 2,847</span>
        <span>3 bots remaining</span>
        <span>HARPOON: <span style={{ color: 'var(--color-orange)' }}>HOOKED</span></span>
      </div>
    </div>
  )
}
