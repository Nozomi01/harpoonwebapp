import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, Crosshair, Code2, Shield, Zap, Move, Target, RefreshCw, ArrowRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Game() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge section-badge-orange"><Crosshair size={11} /> The Game</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Every mechanic.<br /><span className="text-gradient-orange">Every advantage.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Harpoon Arenas is built on deep, interlocking systems. Master each one and your bot becomes unstoppable.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Philosophy */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-badge"><Code2 size={11} /> Philosophy</span>
              <h2 className="section-title">Inspired by Robocode.<br /><span className="text-gradient">Reimagined entirely.</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                Classic programming games gave us the idea: your code IS your gameplay. But we wanted something more visceral. More spatial. More about physics and timing, not just damage output.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                The harpoon changes everything. Instead of just shooting and dodging, you can now create pull-force traps, chain enemies into walls, steal positioning, and punish bad movement with a well-timed yank.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Battles are fully automated — the player never touches the game during a fight. Your strategy, expressed in code, either wins or loses on its own merit.
              </p>
            </motion.div>

            {/* Game rules summary */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card" style={{ padding: 36 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 24, color: 'var(--color-cyan)' }}>
                  Battle Rules
                </h3>
                {[
                  ['Arena size', '1000 × 1000 units'],
                  ['Max bots per match', '2–8 players'],
                  ['Match duration', 'Until 1 bot remains'],
                  ['Harpoon range', '400 units max'],
                  ['FOV angle', '120° (configurable)'],
                  ['Tick rate', '60 ticks/second'],
                  ['Code language', 'JavaScript (ES2022+)'],
                  ['Max bot memory', '64 MB'],
                ].map(([label, value], i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: i < 7 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-cyan)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-orange"><Zap size={11} /> Core Mechanics</span>
            <h2 className="section-title">What your bot can do</h2>
            <div className="glow-divider" />
          </motion.div>

          <div className="grid-3" style={{ textAlign: 'left' }}>
            {[
              {
                icon: <Move size={26} />, color: 'cyan', title: 'Movement System',
                points: ['8-directional movement', 'Configurable speed (1–5)', 'Rotation separate from velocity', 'Collision physics with walls & bots', 'Momentum-based deceleration'],
              },
              {
                icon: <Eye size={26} />, color: 'purple', title: 'Field of View (FOV)',
                points: ['120° default cone angle', 'Adjustable range (100–600 units)', 'Ray-cast based detection', 'Wider FOV = slower rotation', 'Blind spots reward flanking'],
              },
              {
                icon: <Crosshair size={26} />, color: 'orange', title: 'Harpoon System',
                points: ['Projectile physics with arc', 'Attaches on contact', 'Pull force: 80 units/tick', 'Rope max length: 400 units', '3 second cooldown after use'],
              },
              {
                icon: <Shield size={26} />, color: 'cyan', title: 'Health & Damage',
                points: ['100 HP base per bot', 'Harpoon impact: 5 damage', 'Pull wall slam: 20 damage', 'Bot collision: 8 damage', 'No health regeneration'],
              },
              {
                icon: <Target size={26} />, color: 'purple', title: 'Targeting API',
                points: ['getNearestEnemy()', 'getEnemiesInFOV()', 'predictEnemyPosition()', 'getDistanceTo(target)', 'aimAt(target, offset)'],
              },
              {
                icon: <RefreshCw size={26} />, color: 'orange', title: 'Game Loop',
                points: ['onTick(state) — 60x/sec', 'onHarpoonHit(target)', 'onHitByHarpoon(attacker)', 'onCollision(object)', 'onDamage(amount, source)'],
              },
            ].map((m, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 3) * 0.1 }} viewport={{ once: true }}
                style={{ padding: 32 }}>
                <div className={`feature-icon feature-icon-${m.color}`}>{m.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, marginBottom: 20 }}>{m.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {m.points.map((p, pi) => (
                    <li key={pi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)', fontSize: 13 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: `var(--color-${m.color})`, flexShrink: 0 }} />
                      <span style={{ fontFamily: p.startsWith('on') || p.includes('()') ? 'var(--font-mono)' : 'inherit', fontSize: p.includes('()') ? 12 : 13 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Harpoon Deep Dive */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-badge section-badge-orange"><Crosshair size={11} /> The Harpoon</span>
              <h2 className="section-title">The mechanic that<br /><span className="text-gradient-orange">changes everything</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
                The harpoon is Harpoon Arenas' signature mechanic — and the deepest system in the game. It's not just a ranged attack: it's a physics-based repositioning tool that rewards precise timing and creative strategy.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { step: '01', title: 'Throw', desc: 'Launch the harpoon in the direction your bot is facing. It travels in a ballistic arc up to 400 units.', color: 'var(--color-orange)' },
                  { step: '02', title: 'Hook', desc: 'On contact with an enemy, the hook embeds and a rope connection forms between both bots.', color: 'var(--color-cyan)' },
                  { step: '03', title: 'Pull', desc: 'Activate the reel motor. Your bot exerts up to 80 units of force per tick on the hooked enemy.', color: 'var(--color-purple)' },
                  { step: '04', title: 'Exploit', desc: 'Use the pull to slam enemies into walls, position them in your FOV, or set up chain attacks.', color: 'var(--color-orange)' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 48, height: 48, flexShrink: 0, borderRadius: 12,
                      background: `${s.color}15`, border: `1px solid ${s.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: s.color,
                    }}>{s.step}</div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, marginBottom: 4 }}>{s.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Harpoon diagram */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <svg viewBox="0 0 460 480" style={{ width: '100%', maxWidth: 420, borderRadius: 'var(--radius-lg)', background: 'rgba(7,7,30,0.8)', border: '1px solid var(--border)', padding: 20 }}>
                <defs>
                  <radialGradient id="hglow1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="hglow2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Labels */}
                <text x="230" y="25" textAnchor="middle" fill="#475569" fontSize="12" fontFamily="JetBrains Mono, monospace">HARPOON MECHANICS DIAGRAM</text>

                {/* Attacker */}
                <circle cx="100" cy="280" r="40" fill="url(#hglow1)" />
                <circle cx="100" cy="280" r="22" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="2" />
                <circle cx="100" cy="280" r="8" fill="#00d4ff" />
                <text x="100" y="320" textAnchor="middle" fill="#00d4ff" fontSize="11" fontFamily="JetBrains Mono, monospace">ATTACKER</text>

                {/* Target */}
                <circle cx="360" cy="180" r="36" fill="url(#hglow2)" />
                <circle cx="360" cy="180" r="20" fill="rgba(255,107,53,0.15)" stroke="#ff6b35" strokeWidth="2" />
                <circle cx="360" cy="180" r="7" fill="#ff6b35" />
                <text x="360" y="218" textAnchor="middle" fill="#ff6b35" fontSize="11" fontFamily="JetBrains Mono, monospace">TARGET</text>

                {/* Harpoon path */}
                <path d="M 120 268 Q 230 160 342 186" fill="none" stroke="#00d4ff" strokeWidth="2" strokeDasharray="8,5" opacity="0.8" />
                {/* Harpoon tip */}
                <polygon points="342,186 330,180 333,193" fill="#00d4ff" opacity="0.9" />

                {/* Rope after hook */}
                <line x1="122" y1="268" x2="340" y2="186" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                {/* Pull arrow */}
                <line x1="360" y1="170" x2="200" y2="240" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,3" />
                <polygon points="200,240 208,228 212,242" fill="#8b5cf6" />
                <text x="270" y="220" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontFamily="JetBrains Mono, monospace">PULL FORCE</text>

                {/* Stats */}
                <rect x="20" y="360" width="420" height="90" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />
                {[
                  { label: 'SPEED', value: '400 u/tick', x: 70 },
                  { label: 'DAMAGE', value: '5 HP', x: 175 },
                  { label: 'PULL', value: '80 u/tick', x: 280 },
                  { label: 'CD', value: '3s', x: 385 },
                ].map((stat, i) => (
                  <g key={i}>
                    <text x={stat.x} y="388" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">{stat.label}</text>
                    <text x={stat.x} y="410" textAnchor="middle" fill="#00d4ff" fontSize="14" fontFamily="Orbitron, sans-serif" fontWeight="700">{stat.value}</text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Preview */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-badge section-badge-purple"><Code2 size={11} /> Bot API</span>
            <h2 className="section-title">Full API reference preview</h2>
            <p className="section-subtitle">45+ methods, rich event system, typed state object. Everything your strategy needs.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, textAlign: 'left' }}>
            {[
              { category: 'Movement', color: 'var(--color-cyan)', methods: ['moveForward(speed)', 'moveBackward(speed)', 'strafeLeft(speed)', 'strafeRight(speed)', 'rotateTo(angle)', 'rotateBy(degrees)', 'stop()'] },
              { category: 'Harpoon', color: 'var(--color-orange)', methods: ['throwHarpoon()', 'pullHarpoon()', 'releaseHarpoon()', 'isHarpoonAttached()', 'getHarpoonTarget()', 'getHarpoonDistance()'] },
              { category: 'Sensing', color: 'var(--color-purple)', methods: ['getNearestEnemy()', 'getEnemiesInFOV()', 'getAllEnemies()', 'scanDirection(angle)', 'getDistanceTo(entity)', 'isInFOV(entity)'] },
              { category: 'State', color: 'var(--color-cyan)', methods: ['state.position', 'state.health', 'state.angle', 'state.speed', 'state.tick', 'state.arena'] },
            ].map((group, i) => (
              <motion.div key={i} className="glass-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                style={{ padding: 28 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: group.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
                  {group.category}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {group.methods.map((m, mi) => (
                    <div key={mi} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)',
                      padding: '6px 10px', borderRadius: 6, background: 'rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}>{m}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Ready to write your first bot?</h2>
            <p className="section-subtitle">The full documentation, sandbox environment, and tutorial series are waiting for you.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary"><Zap size={15} /> Get Early Access</Link>
              <Link to="/faq" className="btn btn-secondary">Read FAQ <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
