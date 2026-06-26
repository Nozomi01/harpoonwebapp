import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the Harpoon Innovation platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
  },
  {
    title: 'Use of the Platform',
    body: 'You may use our platform only for lawful purposes and in accordance with these terms. You agree not to use the platform in any way that violates applicable laws, infringes on the rights of others, or disrupts the experience of other users.',
  },
  {
    title: 'Accounts',
    body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at hello@harpooninnovation.com if you suspect any unauthorized use.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this platform, including text, graphics, logos, and software, is the property of Harpoon Innovation Inc. and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.',
  },
  {
    title: 'User-Generated Content',
    body: 'By submitting content (such as bot code or forum posts) to our platform, you grant us a non-exclusive, royalty-free license to use, display, and distribute that content in connection with our services.',
  },
  {
    title: 'Disclaimer of Warranties',
    body: 'Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of harmful components.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, Harpoon Innovation Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.',
  },
  {
    title: 'Changes to Terms',
    body: 'We reserve the right to modify these Terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the revised Terms.',
  },
  {
    title: 'Contact',
    body: 'For questions about these Terms, contact us at hello@harpooninnovation.com.',
  },
]

export default function TermsOfService() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge">Legal</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Terms of Service
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Last updated: June 2026
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 48, fontSize: 15 }}>
            Please read these Terms of Service carefully before using the Harpoon Innovation platform. These terms govern your access to and use of our website and services.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }} viewport={{ once: true }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 10 }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 15 }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
