'use client'

import { projects } from '@/lib/projects'
import { useLang } from '@/context/LangContext'
import ScrollReveal from './ScrollReveal'
import T from './T'

const gridCols: Record<number, string> = {
  1: '1fr',
  2: '1fr 1fr',
  3: 'repeat(3, 1fr)',
}

export default function Projects() {
  const { lang } = useLang()
  const cols = gridCols[projects.length] ?? 'repeat(3, 1fr)'

  return (
    <div id="projects" className="projects-section">
      <section>
        <ScrollReveal>
          <div className="section-label">
            <T k="section_projects" />
          </div>
        </ScrollReveal>
        <div className="projects-grid" style={{ gridTemplateColumns: cols }}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.slug} style={{ transitionDelay: `${i * 0.05}s` }}>
              <a href={`/projects/${p.slug}`} className="project-card">
                <div className="project-number">{p.index[lang]}</div>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-problem">{p.tagline[lang]}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-link">
                  <T k="project_link" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
