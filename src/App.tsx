import './App.css'

const values = [
  {
    title: 'People First',
    body: 'We design for real people with real limits. Every product should reduce stress, not add it.',
  },
  {
    title: 'Craft Matters',
    body: 'Details shape trust. We build with care, test deeply, and improve with humility.',
  },
  {
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
    name: 'Bearing Fruit',
    status: 'In active development',
    description:
      'A Christian formation app helping users build gentle, grace-centered habits through guided tools and rhythms.',
    href: 'https://bearingfruit.app',
    cta: 'Visit Bearing Fruit',
  },
  {
    name: 'GeoGroups',
    status: 'Live project',
    description:
      'A place-focused community project built to help people organize and connect around shared local context.',
    href: 'https://geogroups.org',
    cta: 'Visit GeoGroups',
  },
  {
    name: 'Research Publication',
    status: 'Published paper',
    description:
      'Peer-reviewed publication listed on the U.S. National Library of Medicine (PMC).',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10564567/',
    cta: 'Read on PMC',
  },
]

function App() {
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

          <nav className="topnav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#legal">Legal</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-art" aria-hidden="true" />
          <p className="eyebrow">Independent Product Studio</p>
          <h1>
            Build software that feels <em>human</em>.
          </h1>
          <p className="hero-copy">
            Good Life Games creates thoughtful digital products with warm design, clear purpose, and practical value.
            We build tools that help people grow, reflect, and live with intention.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              Explore Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section-head">
            <p className="eyebrow">How We Work</p>
            <h2>Small team. High standards. Practical outcomes.</h2>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-head">
            <p className="eyebrow">Our Process</p>
            <h2>Thoughtful software, built in honest steps.</h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step} className="process-card">
                <p className="process-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <div className="shell">
            <p className="manifesto-line">Most software focuses on maximizing engagement.</p>
            <p className="manifesto-line manifesto-strong">
              We focus on helping people become more grounded, <span>present</span>, and free.
            </p>
          </div>
        </section>

        <section className="section shell" id="projects">
          <div className="section-head">
            <p className="eyebrow">Portfolio</p>
            <h2>Products and projects from Good Life Games</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="project-status">{project.status}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.href} className="project-link" target="_blank" rel="noreferrer">
                  {project.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="legal">
          <div className="section-head">
            <p className="eyebrow">Company & Legal</p>
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
              <span>•</span>
              <a href="/terms.html" target="_blank" rel="noreferrer">
                Terms of Use
              </a>
            </p>
            <p className="legal-line">
              Business contact:{' '}
              <a href="mailto:matthew@goodlifegames.io">matthew@goodlifegames.io</a>
            </p>
          </div>
        </section>

        <section className="section shell" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
            <p>
              For partnership, support, or general questions, email{' '}
              <a href="mailto:matthew@goodlifegames.io">matthew@goodlifegames.io</a>.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <p className="footer-brand">Good Life Games LLC</p>
            <p className="footer-tagline">Useful software with a human center.</p>
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
