const items = [
  'React', 'TypeScript', 'React Native', 'Expo', 'Node.js',
  'GraphQL', 'Firebase', 'SQL', 'IA & Automação', 'App Store',
  'Play Store', 'JavaScript', 'Next.js', 'buildbyrosa.com',
]

function Track() {
  return (
    <>
      {items.flatMap((item, i) => [
        <span key={`item-${i}`}>{item}</span>,
        <span key={`sep-${i}`} className="sep">—</span>,
      ])}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
