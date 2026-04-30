import ScrollReveal from './ScrollReveal'
import T from './T'
import { TranslationKey } from '@/lib/translations'

const categories: { labelKey: TranslationKey | null; staticLabel?: string; items: { name: string }[] }[] = [
  {
    labelKey: 'stack_languages',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
    ],
  },
  {
    labelKey: 'stack_frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'CSS / Tailwind' },
      { name: 'Material UI' },
      { name: 'Styled Components' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'mobile',
    items: [
      { name: 'React Native' },
      { name: 'Expo' },
    ],
  },
  {
    labelKey: 'stack_backend',
    items: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: '.NET' },
      { name: 'Express' },
      { name: 'Apollo' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'tooling',
    items: [
      { name: 'Git / GitHub' },
      { name: 'Azure DevOps' },
      { name: 'Storybook' },
      { name: 'Vite / Webpack' },
      { name: 'Jest / Vitest' },
      { name: 'Testing Library' },
      { name: 'Cypress' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'workflow',
    items: [
      { name: 'Figma' },
      { name: 'Scrum / Kanban' },
      { name: 'CI/CD' },
    ],
  },
  {
    labelKey: 'stack_database',
    items: [
      { name: 'SQL / PostgreSQL' },
      { name: 'Firebase' },
      { name: 'GraphQL' },
    ],
  },
  {
    labelKey: null,
    staticLabel: 'cloud & infra',
    items: [
      { name: 'AWS' },
      { name: 'S3' },
      { name: 'Sentry' },
      { name: 'Dynatrace' },
      { name: 'Elastic' },
      { name: 'CloudWatch' },
    ],
  },
  {
    labelKey: 'stack_publish',
    items: [
      { name: 'Apple App Store' },
      { name: 'Google Play Store' },
      { name: 'EAS Build' },
    ],
  },
  {
    labelKey: 'stack_ai',
    items: [
      { name: 'Claude API' },
      { name: 'OpenAI / ChatGPT' },
      { name: 'N8N' },
      { name: 'Evolution API' },
      { name: 'WhatsApp Bot' },
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
