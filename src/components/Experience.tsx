import ScrollReveal from './ScrollReveal'
import T from './T'
import { TranslationKey } from '@/lib/translations'

const jobs: { dateKey: TranslationKey; roleKey: TranslationKey; companyKey: TranslationKey; descKey: TranslationKey; delay: string }[] = [
  { dateKey: 'exp1_date', roleKey: 'exp1_role', companyKey: 'exp1_company', descKey: 'exp1_desc', delay: '0s' },
  { dateKey: 'exp1_date', roleKey: 'exp2_role', companyKey: 'exp2_company', descKey: 'exp2_desc', delay: '0.08s' },
  { dateKey: 'exp1_date', roleKey: 'exp3_role', companyKey: 'exp3_company', descKey: 'exp3_desc', delay: '0.16s' },
  { dateKey: 'exp1_date', roleKey: 'exp4_role', companyKey: 'exp4_company', descKey: 'exp4_desc', delay: '0.24s' },
]

// Only the first date changes with lang ("presente" vs "present"); others are numeric ranges
const staticDates = [null, '2021 — 2022', '2020 — 2021', '2020 — 2021']

export default function Experience() {
  return (
    <div id="experience" className="experience-section">
      <section>
        <ScrollReveal><div className="section-label"><T k="section_experience" /></div></ScrollReveal>
        <div className="timeline">
          {jobs.map((job, i) => (
            <ScrollReveal key={i} className="timeline-item" style={{ transitionDelay: job.delay }}>
              <div className="timeline-date">
                {staticDates[i] ?? <T k="exp1_date" />}
              </div>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-role"><T k={job.roleKey} /></div>
                <div className="timeline-company"><T k={job.companyKey} /></div>
                <p className="timeline-desc"><T k={job.descKey} /></p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
