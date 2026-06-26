import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, email address, and any messages you send through our contact form. We also collect usage data automatically, including IP addresses, browser type, and pages visited.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to operate and improve our services, respond to your inquiries, send you updates you have opted into, and ensure the security of our platform.',
  },
  {
    title: 'Sharing of Information',
    body: 'We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website, subject to confidentiality agreements.',
  },
  {
    title: 'Cookies',
    body: 'We use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at hello@harpooninnovation.com.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this Privacy Policy, please reach out at hello@harpooninnovation.com.',
  },
]

export default function PrivacyPolicy() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} className="page-wrapper">

      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-badge">Legal</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Privacy Policy
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
            Harpoon Innovation Inc. ("we", "us", or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our website and services.
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
