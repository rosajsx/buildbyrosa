import ScrollReveal from "./ScrollReveal";
import T from "./T";
import TH from "./TH";
import { projects } from "@/lib/projects";

export default function About() {
  return (
    <div id="about" className="about-section">
      <section>
        <ScrollReveal>
          <div className="section-label">
            <T k="section_about" />
          </div>
        </ScrollReveal>
        <div className="about-grid">
          <ScrollReveal>
            <h2 className="about-headline">
              <TH k="about_headline" />
            </h2>
          </ScrollReveal>
          <ScrollReveal
            className="about-body"
            style={{ transitionDelay: "0.12s" }}
          >
            <p>
              <T k="about_p1" />
            </p>
            <p>
              <T k="about_p2" />
            </p>
            <p>
              <T k="about_p3" />
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">
                  5<span>+</span>
                </span>
                <span className="stat-label">
                  <T k="stat_years" />
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {projects.length}<span>+</span>
                </span>
                <span className="stat-label">
                  <T k="stat_projects" />
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
