import { useEffect, useRef, useState } from 'react'
import './App.css'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'People First',
    body: 'We design for real people with real limits. Every product should reduce stress, not add it.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </svg>
    ),
    title: 'Playful at Heart',
    body: 'The best tools don\u2019t feel like chores. We design with the visual richness, delight, and sense of progress that makes people want to come back.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: 'Long-Term Good',
    body: 'We pursue products that are useful, honest, and sustainable for years.',
  },
]

const process = [
  {
    step: '01',
    title: 'Listen Deeply',
    body: 'We start with lived experience, not assumptions. The problem has to be human before it can be technical.',
  },
  {
    step: '02',
    title: 'Ship the Core',
    body: 'We prioritize the smallest version that can genuinely help someone, then iterate from real usage.',
  },
  {
    step: '03',
    title: 'Refine with Care',
    body: 'We improve details, clarity, and reliability over time so products stay useful and trustworthy.',
  },
]

const projects = [
  {
    name: 'Heart Health Mountain',
    tag: 'Research & Mobile App',
    status: 'Published Research',
    description:
      'A sensor-controlled digital game built for NIH-funded clinical trials in heart failure and hypertension self-management. Developed with Dr. Kavita Radhakrishnan at UT Austin, featured in multiple peer-reviewed studies (2020\u20132025) including cultural adaptations for the Lumbee Tribe and Spanish-speaking populations.',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10564567/',
    cta: 'Read on PubMed Central',
    featured: true,
  },
  {
    name: 'Bearing Fruit',
    tag: 'Mobile App',
    status: 'Shipping 2026',
    description:
      'A grace-centered spiritual formation app with 12 Biblical practices, interactive prayer tools, and spaced-repetition scripture memorization \u2014 designed to help Christians build gentle, lasting rhythms of faith.',
    href: 'https://bearingfruit.app',
    cta: 'Visit Bearing Fruit',
  },
  {
    name: 'GeoGroups',
    tag: 'Web App',
    status: 'Pilot',
    description:
      'A decision-support tool helping church leaders place members into geographically optimal small groups \u2014 bringing spatial intelligence to community building.',
    href: 'https://geogroups.org',
    cta: 'Visit GeoGroups',
  },
  {
    name: 'Tab Triage',
    tag: 'Web App + Extension',
    status: 'In Development',
    description:
      'A local-first URL triage system that deduplicates, summarizes, and scores relevance for large link batches \u2014 turning browser tab overload into a ranked, actionable inbox.',
  },
  {
    name: 'CommandSpeed',
    tag: 'Web App',
    status: 'In Development',
    description:
      'A gamified keyboard shortcut trainer for spreadsheet power users. Race the clock through progressive difficulty levels to master Excel and Google Sheets shortcuts.',
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealSection({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${className ?? ''}`} id={id}>
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="topbar-pill shell">
          <a className="brand" href="#top" aria-label="Good Life Games home">
            <span className="brand-mark" aria-hidden="true">
              GLG
            </span>
            <span className="brand-text">Good Life Games</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav className={`topnav ${menuOpen ? 'topnav-open' : ''}`} aria-label="Primary">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#legal" onClick={() => setMenuOpen(false)}>Legal</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-content fade-in">
            <p className="eyebrow">Independent Product Studio</p>
            <h1>
              Software for the <em>good life</em>.
            </h1>
            <p className="hero-copy">
              We build tools with the warmth and engagement of play &mdash; helping people
              manage their health, deepen their faith, and work with intention.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#projects">
                Explore Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <RevealSection className="section shell" id="about">
          <div className="section-head">
            <p className="eyebrow">How We Work</p>
            <h2>Small team. High standards. Practical outcomes.</h2>
          </div>

          <p className="founder-line">
            Founded by Matthew O&apos;Hair &mdash; a software engineer and published researcher building tools at the
            intersection of health, faith, and productivity.
          </p>

          <div className="value-grid">
            {values.map((value, i) => (
              <article key={value.title} className="value-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="section shell">
          <div className="section-head">
            <p className="eyebrow">Our Process</p>
            <h2>Thoughtful software, built in honest steps.</h2>
          </div>

          <div className="process-grid">
            {process.map((item, i) => (
              <article key={item.step} className="process-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="process-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="manifesto">
          <div className="shell">
            <p className="manifesto-line">Most software is designed to keep you scrolling.</p>
            <p className="manifesto-line manifesto-strong">
              We build tools that help you grow &mdash; grounded, <span>present</span>, and free.
            </p>
          </div>
        </RevealSection>

        <RevealSection className="section shell" id="projects">
          <div className="section-head">
            <p className="eyebrow">Portfolio</p>
            <h2>Products and research from Good Life Games</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <article
                key={project.name}
                className={`project-card ${project.featured ? 'project-featured' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="project-meta">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.href && (
                  <a href={project.href} className="project-link" target="_blank" rel="noreferrer">
                    {project.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="section shell" id="legal">
          <div className="section-head">
            <p className="eyebrow">Company &amp; Legal</p>
            <h2>Transparent operations for partners and platforms</h2>
          </div>
          <div className="legal-card">
            <p className="legal-line">
              Good Life Games LLC is an independent software studio building consumer products with a focus on
              thoughtful design, reliability, and long-term value.
            </p>
            <p className="legal-line">
              Legal docs:
              <a href="/privacy.html" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <span>&bull;</span>
              <a href="/terms.html" target="_blank" rel="noreferrer">
                Terms of Use
              </a>
            </p>
            <p className="legal-line">
              Business contact:{' '}
              <a href="mailto:matthew@goodlifegames.io">matthew@goodlifegames.io</a>
            </p>
          </div>
        </RevealSection>

        <RevealSection className="section shell" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p>
              For partnership, support, or general questions, email{' '}
              <a href="mailto:matthew@goodlifegames.io">matthew@goodlifegames.io</a>.
            </p>
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <p className="footer-brand">Good Life Games LLC</p>
            <p className="footer-tagline">Play well. Live well.</p>
          </div>
          <p className="footer-links">
            <a href="/privacy.html" target="_blank" rel="noreferrer">
              Privacy
            </a>
            <a href="/terms.html" target="_blank" rel="noreferrer">
              Terms
            </a>
            <a href="mailto:matthew@goodlifegames.io">Email</a>
          </p>
          <p className="footer-status">
            <span className="status-dot" aria-hidden="true" />
            System operational
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
