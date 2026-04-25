import ScrollReveal from './ScrollReveal'
import T from './T'
import { TranslationKey } from '@/lib/translations'

const categories: { labelKey: TranslationKey | null; staticLabel?: string; items: { name: string; sub: string }[] }[] = [
  {
    labelKey: 'stack_languages',
    items: [
      { name: 'TypeScript', sub: 'principal' },
      { name: 'JavaScript', sub: 'ES2022+' },
      { name: 'Python', sub: '' },
    ],
  },
  {
    labelKey: 'stack_frontend',
    items: [
      { name: 'React', sub: 'v18+' },
      { name: 'Next.js', sub: '' },
      { name: 'CSS / Tailwind', sub: '' },
      { name: 'Material UI', sub: '' },
      { name: 'Styled Components', sub: '' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'mobile',
    items: [
      { name: 'React Native', sub: '' },
      { name: 'Expo', sub: 'SDK 50+' },
    ],
  },
  {
    labelKey: 'stack_backend',
    items: [
      { name: 'Node.js', sub: '' },
      { name: 'NestJS', sub: '' },
      { name: '.NET', sub: '' },
      { name: 'Express', sub: '' },
      { name: 'Apollo', sub: 'Client/Server' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'tooling',
    items: [
      { name: 'Git / GitHub', sub: '' },
      { name: 'Azure DevOps', sub: '' },
      { name: 'Storybook', sub: '' },
      { name: 'Vite / Webpack', sub: '' },
      { name: 'Jest / Vitest', sub: '' },
      { name: 'Testing Library', sub: '' },
      { name: 'Cypress', sub: '' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'workflow',
    items: [
      { name: 'Figma', sub: '' },
      { name: 'Scrum / Kanban', sub: '' },
      { name: 'CI/CD', sub: '' },
    ],
  },
  {
    labelKey: 'stack_database',
    items: [
      { name: 'SQL / PostgreSQL', sub: '' },
      { name: 'Firebase', sub: '' },
      { name: 'GraphQL', sub: '' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'cloud & infra',
    items: [
      { name: 'AWS', sub: '' },
      { name: 'S3', sub: '' },
      { name: 'Sentry', sub: '' },
      { name: 'Dynatrace', sub: '' },
      { name: 'Elastic', sub: '' },
      { name: 'CloudWatch', sub: '' },
    ],
  },
  {
    labelKey: 'stack_publish',
    items: [
      { name: 'Apple App Store', sub: '' },
      { name: 'Google Play Store', sub: '' },
      { name: 'EAS Build', sub: '' },
    ],
  },
  {
    labelKey: 'stack_ai',
    items: [
      { name: 'Claude API', sub: '' },
      { name: 'OpenAI / ChatGPT', sub: '' },
      { name: 'N8N', sub: '' },
      { name: 'Evolution API', sub: '' },
      { name: 'WhatsApp Bot', sub: '' },
    ],
  },
]

export default function Stack() {
  return (
    <div id="stack" className="stack-section">
      <section style={{ background: 'transparent' }}>
        <ScrollReveal><div className="section-label"><T k="section_stack" /></div></ScrollReveal>
        <ScrollReveal style={{ transitionDelay: '0.1s' }}>
          <div className="stack-grid">
            {categories.map((cat, i) => (
              <div key={i} className="stack-category">
                <div className="stack-cat-label">
                  {cat.labelKey ? <T k={cat.labelKey} /> : cat.staticLabel}
                </div>
                <div className="stack-items">
                  {cat.items.map(item => (
                    <div key={item.name} className="stack-item">
                      <span className="stack-dot" />
                      {item.name}
                      {item.sub && <span className="stack-item-sub">{item.sub}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
