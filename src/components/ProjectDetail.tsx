'use client'

import { useLang } from '@/context/LangContext'
import type { Project } from '@/lib/projects'
import ScrollReveal from './ScrollReveal'
import Footer from './Footer'
import T from './T'
import TH from './TH'

export default function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLang()

  return (
    <>
      <div className="project-page">

        {/* Hero */}
        <div className="project-hero">
          <ScrollReveal><div className="project-meta">{project.index[lang]}</div></ScrollReveal>
          <ScrollReveal style={{ transitionDelay: '0.08s' }}>
            <h1
              className="project-detail-title"
              dangerouslySetInnerHTML={{ __html: project.titleHtml }}
            />
          </ScrollReveal>
          <ScrollReveal style={{ transitionDelay: '0.16s' }}>
            <p className="project-tagline">{project.tagline[lang]}</p>
          </ScrollReveal>
          <ScrollReveal style={{ transitionDelay: '0.24s' }}>
            <div className="project-hero-meta">
              <div className="meta-item">
                <div className="meta-label">year</div>
                <div className="meta-value">{project.year}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">role</div>
                <div className="meta-value">{project.role[lang]}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">platform</div>
                <div className="meta-value">{project.platform[lang]}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Screenshots */}
        {(project.cover || project.images?.length) && (
          <ScrollReveal>
            <div className="screenshot-section">
              {project.cover && (
                <div className="screenshot-main">
                  <img src={project.cover} alt={`${project.title} cover`} />
                </div>
              )}
              {project.images && project.images.length > 0 && (
                <div className="screenshot-thumbs">
                  {project.images.map((src, i) => (
                    <div key={i} className="screenshot-thumb">
                      <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* Content */}
        <div className="content-grid">
          <div>
            <ScrollReveal><div className="section-label"><T k="proj_desc_section" /></div></ScrollReveal>
            <ScrollReveal>
              <h2
                className="content-headline"
                dangerouslySetInnerHTML={{ __html: project.headline[lang] }}
              />
            </ScrollReveal>
            <ScrollReveal style={{ transitionDelay: '0.1s' }}>
              <div className="content-body">
                {project.body[lang].map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal style={{ transitionDelay: '0.15s' }}>
            <div className="sidebar">
              <div className="sidebar-block">
                <div className="sidebar-block-label"><T k="tech_label" /></div>
                <div className="tag-list">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="sidebar-block">
                <div className="sidebar-block-label"><T k="results_label" /></div>
                {project.stats.map((stat, i) => (
                  <div key={i} className="sidebar-stat">
                    <div className="sidebar-stat-label">{stat.label[lang]}</div>
                    <div className="sidebar-stat-value">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="cta-section">
            <div className="cta-inner">
              <h2 className="cta-headline">
                <TH k="proj_cta_headline" />
              </h2>
              <div className="cta-actions">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <T k="contact_cta_live" />
                </a>
                <a href="/#projects" className="btn-ghost"><T k="contact_cta_back" /></a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Next Project */}
      <a href={`/projects/${project.next.slug}`} className="next-project">
        <div>
          <div className="next-label"><T k="proj_next_label" /></div>
          <div className="next-name">{project.next.name}</div>
        </div>
        <span className="next-arrow">→</span>
      </a>

      <Footer />
    </>
  )
}
