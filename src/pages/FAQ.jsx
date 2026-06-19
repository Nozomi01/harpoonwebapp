import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle, Code2, Trophy, CreditCard, Users, Zap } from 'lucide-react'

const faqs = [
  {
    category: 'General', icon: <HelpCircle size={16} />, color: 'cyan',
    questions: [
      { q: 'What is Harpoon Arenas?', a: 'Harpoon Arenas is a competitive programming game where players write JavaScript code to control AI-powered robots that fight in a real-time arena. Unlike traditional games, you never control the bot directly — your code makes all the decisions. The unique twist is the harpoon mechanic: your bot can throw a physical harpoon to hook and pull enemies.' },
      { q: 'Is this the same as Robocode?', a: 'Inspired by Robocode, yes — but Harpoon Arenas is a complete reimagination. We\'ve built a modern physics engine, introduced the harpoon mechanic (entirely original), added a Field of View system, and designed the API from scratch with modern JavaScript. Think of it as Robocode for the 2020s.' },
      { q: 'Do I need to be an experienced programmer?', a: 'Not at all. If you can write a basic JavaScript function, you can write a bot. We offer a starter template, step-by-step tutorials, and a sandbox mode where you can test without pressure. That said, experienced coders will have more tools to express complex strategies.' },
      { q: 'What programming language do I use?', a: 'Bots are written in JavaScript (ES2022+). We chose JavaScript for its accessibility, large community, and modern async support. TypeScript type definitions are provided so IDE users get full autocomplete support.' },
    ],
  },
  {
    category: 'Gameplay', icon: <Trophy size={16} />, color: 'purple',
    questions: [
      { q: 'How does the harpoon mechanic work?', a: 'Your bot can call throwHarpoon() to launch a projectile in the direction it\'s facing. If it hits an enemy, a rope connects both bots. You can then call pullHarpoon() to reel in the enemy with 80 units of force per tick. This can slam enemies into walls for bonus damage, reposition them into your field of view, or set up combo attacks. The harpoon has a 3-second cooldown.' },
      { q: 'What is the Field of View (FOV) system?', a: 'By default, your bot can only "see" enemies within a 120° cone in front of it. You won\'t receive data about enemies outside that cone. This makes positioning and rotation strategic — a wider FOV means you see more, but rotating is slower. You can configure the FOV angle (60°–180°) to match your strategy.' },
      { q: 'How many bots compete in a match?', a: 'Standard matches support 2–8 bots. Our ranked queue uses 4-player free-for-all as the primary mode. 1v1 duels and team-based 2v2 modes are available in the custom match lobby. Tournament formats vary.' },
      { q: 'Can my bot team up with others?', a: 'In free-for-all mode, every bot is an enemy. In 2v2 team mode (available now in custom matches, coming to ranked soon), bots on the same team can share position data and coordinate harpoon timing. The team communication API is limited to data sharing — bots still act independently.' },
      { q: 'What happens when two bots collide?', a: 'Physical collision is simulated. Both bots take 8 HP damage, and a physics impulse pushes them apart. Smart bots account for collision avoidance in their movement logic. Intentional ramming is a legitimate strategy.' },
    ],
  },
  {
    category: 'Technical', icon: <Code2 size={16} />, color: 'orange',
    questions: [
      { q: 'Is the game deterministic?', a: 'Yes. Given the same initial conditions and bot code, every match will play out identically. This is critical for replay accuracy and fair competition. All physics calculations use fixed-point arithmetic at 60 ticks per second.' },
      { q: 'Are there performance limits on my bot code?', a: 'Yes. Your onTick() function must complete within 2 milliseconds. Memory is capped at 64 MB. Code that exceeds these limits will cause your bot to "freeze" for that tick, which is effectively a penalty. We show CPU and memory usage in the sandbox so you can optimize.' },
      { q: 'Can I use external libraries?', a: 'No external npm packages are allowed in competition bots. You can use any standard JavaScript built-in (Math, Map, Set, typed arrays, etc.). This keeps the competition focused on algorithmic skill and prevents compute-heavy ML libraries from dominating.' },
      { q: 'How do I debug my bot?', a: 'The sandbox provides a frame-by-frame replay viewer, console.log() output visible in the replay timeline, bot state inspection at any tick, and a visual FOV overlay. You can also run bots against our benchmark dummies locally using the CLI tool.' },
      { q: 'Is the source code of the engine open?', a: 'Not currently. We plan to open-source the core physics simulation in Phase 3 to allow community-built arena tools and independent verification of match fairness. The bot API spec is fully documented and public.' },
    ],
  },
  {
    category: 'Accounts & Pricing', icon: <CreditCard size={16} />, color: 'cyan',
    questions: [
      { q: 'Is Harpoon Arenas free to play?', a: 'Yes. The free tier gives you full access to the game, ranked matchmaking, sandbox testing, and community features. We offer a Pro tier ($9/month) that adds unlimited match history, advanced analytics, private 1v1 challenges, and priority queue access.' },
      { q: 'Do I need to create an account?', a: 'Yes, an account is required to submit bots and participate in ranked matches. We support sign-in with GitHub, Google, or email/password. Your bot code is stored securely in our cloud under your account.' },
      { q: 'Can I have multiple bots?', a: 'Free users can maintain up to 3 bot slots. Pro users get unlimited slots. Only one bot can be "active" in ranked queue at a time.' },
      { q: 'Are there educational or team plans?', a: 'Yes! We offer classroom plans for educators (free for up to 30 students) and enterprise plans for companies running internal tournaments. Contact us at hello@harpoonstudios.io for details.' },
    ],
  },
  {
    category: 'Community', icon: <Users size={16} />, color: 'purple',
    questions: [
      { q: 'Where can I get help with my bot?', a: 'Our Discord server (#bot-help channel) is the most active community resource. There\'s also a community wiki with strategy guides, example bots, and algorithm patterns shared by top players. Our team reads every support ticket.' },
      { q: 'Can I see other players\' code?', a: 'Bot code is private by default. However, players can voluntarily publish their bots to the "Open Source Bots" section as learning resources. Some top players share code after seasons end. We encourage knowledge sharing but never force it.' },
      { q: 'Are there community-run tournaments?', a: 'Absolutely. Any player can create a custom tournament room with custom rules (bot count, arena size, harpoon cooldown multiplier, etc.). Weekly community tournaments are organized by our top-ranked players and streamed on Twitch.' },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 0', background: 'transparent', color: 'var(--text-primary)',
          fontSize: 15, fontWeight: 500, textAlign: 'left', gap: 16,
        }}>
        <span>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, color: 'var(--color-cyan)' }}>
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 14, paddingBottom: 22 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General')

  const currentFAQ = faqs.find(f => f.category === activeCategory)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge"><HelpCircle size={11} /> FAQ</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Frequently asked<br /><span className="text-gradient">questions</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know about Harpoon Arenas, our game mechanics, and how to get started.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48, alignItems: 'start' }}>
            {/* Category sidebar */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              style={{
                position: 'sticky', top: 100,
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 20,
              }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>
                Categories
              </h3>
              {faqs.map(f => (
                <button key={f.category} onClick={() => setActiveCategory(f.category)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 14px', borderRadius: 'var(--radius-sm)',
                    background: activeCategory === f.category ? 'var(--color-cyan-dim)' : 'transparent',
                    border: activeCategory === f.category ? '1px solid var(--border-cyan)' : '1px solid transparent',
                    color: activeCategory === f.category ? 'var(--color-cyan)' : 'var(--text-secondary)',
                    fontSize: 14, fontWeight: 500, transition: 'all 0.2s',
                    marginBottom: 4, textAlign: 'left',
                  }}>
                  {f.icon}
                  <span>{f.category}</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.6 }}>{f.questions.length}</span>
                </button>
              ))}
            </motion.div>

            {/* Questions */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
                <div className={`feature-icon feature-icon-${currentFAQ.color}`} style={{ margin: 0 }}>{currentFAQ.icon}</div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{currentFAQ.category}</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{currentFAQ.questions.length} questions</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0 32px' }}>
                {currentFAQ.questions.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', padding: '60px 40px',
              maxWidth: 640, margin: '0 auto',
            }}>
            <div style={{
              width: 56, height: 56, borderRadius: 'var(--radius-md)',
              background: 'var(--color-cyan-dim)', border: '1px solid var(--border-cyan)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', color: 'var(--color-cyan)',
            }}>
              <HelpCircle size={24} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 14 }}>
              Still have questions?
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>
              Can't find the answer you're looking for? Our team responds to every message within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary"><Zap size={15} /> Contact Us</Link>
              <a href="#" className="btn btn-secondary">Join Discord</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
