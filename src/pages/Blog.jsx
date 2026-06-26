import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag, BookOpen } from 'lucide-react'

const posts = [
  {
    id: 1, featured: true,
    category: 'Game Design',
    categoryColor: 'cyan',
    title: 'Why the harpoon mechanic changes everything about programming games',
    excerpt: 'When we first prototyped the harpoon, we thought it would be a novelty. Three months of playtesting later, we realized it had fundamentally shifted how players think about spatial strategy in code. Here\'s the story of how one mechanic became the soul of the game.',
    date: 'June 12, 2026',
    readTime: '8 min read',
    author: 'Marcus Chen',
    authorRole: 'Co-Founder',
  },
  {
    id: 2, featured: false,
    category: 'Technical',
    categoryColor: 'purple',
    title: 'Building a deterministic physics engine for competitive play',
    excerpt: 'Fair competition demands that identical inputs always produce identical outputs. Here\'s how we designed our fixed-point physics simulation to be perfectly deterministic at 60 ticks per second.',
    date: 'May 28, 2025',
    readTime: '12 min read',
    author: 'Alex Rivera',
    authorRole: 'CTO',
  },
  {
    id: 3, featured: false,
    category: 'Community',
    categoryColor: 'orange',
    title: 'Season 1 recap: The strategies that dominated the arena',
    excerpt: 'After 40,000 ranked matches in Season 1, clear meta patterns emerged. We break down the top 5 strategies, why they worked, and what Season 2 changes will do to the meta.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    author: 'Marcus Chen',
    authorRole: 'Co-Founder',
  },
  {
    id: 4, featured: false,
    category: 'Tutorial',
    categoryColor: 'cyan',
    title: 'Writing your first harpoon bot in under 30 minutes',
    excerpt: 'A step-by-step walkthrough for absolute beginners. By the end, you\'ll have a bot that can move, aim, and throw a harpoon. No prior game development experience required.',
    date: 'April 30, 2025',
    readTime: '15 min read',
    author: 'Tatsuya Yamamoto',
    authorRole: 'Developer',
  },
  {
    id: 5, featured: false,
    category: 'Design',
    categoryColor: 'purple',
    title: 'Designing a game UI that players actually enjoy reading',
    excerpt: 'Battle replays are only useful if you can understand them. Our design process for the new spectator UI — from wireframe to the glowing arena display you see today.',
    date: 'April 14, 2025',
    readTime: '7 min read',
    author: 'Kaitlyn Krueger',
    authorRole: 'Designer',
  },
  {
    id: 6, featured: false,
    category: 'Technical',
    categoryColor: 'orange',
    title: 'The FOV system: ray-casting on a tight performance budget',
    excerpt: 'Running line-of-sight calculations for 8 bots, 60 times per second, without melting the server. Here\'s how we optimized our ray-casting to stay under 2ms per tick.',
    date: 'March 28, 2025',
    readTime: '10 min read',
    author: 'Alex Rivera',
    authorRole: 'CTO',
  },
]

const authorInitials = { 'Marcus Chen': 'MC', 'Alex Rivera': 'AR', 'Tatsuya Yamamoto': 'JK', 'Kaitlyn Krueger': 'SL' }
const authorGradients = {
  'Marcus Chen': 'linear-gradient(135deg, #00d4ff, #0088aa)',
  'Alex Rivera': 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  'Tatsuya Yamamoto': 'linear-gradient(135deg, #10b981, #059669)',
  'Kaitlyn Krueger': 'linear-gradient(135deg, #f472b6, #ec4899)',
}

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const regular = posts.filter(p => !p.featured)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge"><BookOpen size={11} /> Blog</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              From the<br /><span className="text-gradient">Harpoon Innovation</span> team
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Game design decisions, technical deep-dives, community highlights, and tutorials from the people building the arena.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Featured post */}
          {featured && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ marginBottom: 60 }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: 'var(--radius-xl)', padding: '48px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -80, right: -80,
                  width: 300, height: 300, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: 50, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                    background: 'rgba(0,212,255,0.12)', color: 'var(--color-cyan)', border: '1px solid rgba(0,212,255,0.25)',
                    textTransform: 'uppercase',
                  }}>Featured</span>
                  <span className="tag tag-cyan" style={{ fontSize: 10 }}>{featured.category}</span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: 20, maxWidth: 760, lineHeight: 1.25 }}>
                  {featured.title}
                </h2>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 15, maxWidth: 680, marginBottom: 32 }}>
                  {featured.excerpt}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: authorGradients[featured.author],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#fff',
                    }}>{authorInitials[featured.author]}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{featured.author}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{featured.authorRole}</div>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Calendar size={13} /> {featured.date}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Clock size={13} /> {featured.readTime}
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary" style={{ padding: '12px 24px' }}>
                    Read Article <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular posts grid */}
          <div className="grid-3">
            {regular.map((post, i) => (
              <motion.div key={post.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="glass-card"
                style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                  <span className={`tag tag-${post.categoryColor}`}>{post.category}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.4, marginBottom: 14, flex: 1 }}>
                  {post.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7, marginBottom: 24, flex: 2 }}>
                  {post.excerpt.substring(0, 120)}...
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: authorGradients[post.author],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: '#fff',
                    }}>{authorInitials[post.author]}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{post.author}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>{post.readTime}</div>
                    </div>
                  </div>
                  <a href="#" style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    color: 'var(--color-cyan)', fontSize: 13, fontWeight: 500, transition: 'gap 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.gap = '8px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '5px'}>
                    Read <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'rgba(7,7,30,0.5)' }}>
        <div className="container section-center">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            style={{
              maxWidth: 580, margin: '0 auto',
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)', padding: '60px 48px',
            }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              background: 'var(--color-purple-dim)', border: '1px solid var(--border-purple)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px', color: 'var(--color-purple)',
            }}>
              <BookOpen size={22} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 14 }}>
              Stay in the loop
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
              New articles, game updates, and strategy guides delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <input className="form-input" type="email" placeholder="your@email.com" style={{ borderRadius: 50 }} />
              <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
