import ParticleCanvas from './ParticleCanvas'
import TextScramble from './TextScramble'
import T from './T'

export default function Hero() {
  return (
    <div id="hero-wrap">
      <ParticleCanvas />
      <div id="hero">
        <span className="hero-bg-number">LR</span>
        <p className="hero-prompt">
          <span>$</span> lucas.rosa --intro
        </p>
        <h1 className="hero-name">
          <TextScramble text="Lucas" delay={0}>Lucas</TextScramble>
          <br />
          <TextScramble text="Rosa." as="em" delay={180}>Rosa.</TextScramble>
        </h1>
        <p className="hero-desc">
          <T k="hero_desc" />
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary"><T k="hero_cta_contact" /></a>
          <a href="#projects" className="btn-ghost"><T k="hero_cta_projects" /></a>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          scroll
        </div>
        <span className="hero-year">© 2026</span>
      </div>
    </div>
  )
}
