import ScrollReveal from './ScrollReveal'
import T from './T'
import TH from './TH'

const links = [
  { label: 'email', value: 'lucas.rosa.js@icloud.com', href: 'mailto:lucas.rosa.js@icloud.com' },
  { label: 'github', value: 'github.com/rosajsx', href: 'https://github.com/rosajsx' },
  { label: 'linkedin', value: 'linkedin.com/in/lucrosa', href: 'https://www.linkedin.com/in/lucrosa/' },
  { label: 'site', value: 'buildbyrosa.com', href: 'https://buildbyrosa.com' },
]

export default function Contact() {
  return (
    <div id="contact" className="contact-section">
      <section>
        <ScrollReveal><div className="section-label"><T k="section_contact" /></div></ScrollReveal>
        <ScrollReveal>
          <h2 className="contact-headline">
            <TH k="contact_headline" />
          </h2>
        </ScrollReveal>
        <ScrollReveal style={{ transitionDelay: '0.12s' }}>
          <div className="contact-links">
            {links.map(link => (
              <a key={link.label} href={link.href} className="contact-link-item" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">
                  {link.value}
                  <span className="contact-link-arrow">↗</span>
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
