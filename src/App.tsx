import { useEffect, useRef, useState } from 'react'
import './App.css'

function GlgMark() {
  return (
    <span className="brand-mark" role="img" aria-label="Good Life Games logo">
      <img src="/logo.png" alt="" className="logo-img" />
    </span>
  )
}

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
    body: 'We don’t sell user data, run ads, or chase engagement metrics. Our products earn their keep by being genuinely useful.',
  },
]

type ProjectLink = {
  label: string
  href: string
  icon?: 'apple' | 'google'
}

type Project = {
  name: string
  tag: string
  status: string
  period: string
  description: string
  highlights: string[]
  image?: string
  imageBg?: string
  monogram?: string
  href?: string
  cta?: string
  extraLinks?: ProjectLink[]
  featured?: boolean
}

type ProjectGroup = {
  title: string
  intro: string
  projects: Project[]
}

const proofPoints = [
  'Live iOS/Android apps',
  'Unity/C# health + learning games',
  'Peer-reviewed digital-health research',
  'React Native / Expo / Next / Node / PostgreSQL',
  'Product design, UX, and small-team delivery',
]

const projectGroups: ProjectGroup[] = [
  {
    title: 'Current Products',
    intro: 'Active Good Life Games products and pilots built around faith, health, community, and useful daily rhythms.',
    projects: [
      {
        name: 'Bearing Fruit',
        tag: 'Faith App',
        status: 'Live / Soft Launch',
        period: '2025 - Present',
        image: '/project-logos/bearing-fruit.png',
        description:
          'A grace-centered spiritual formation app for iOS and Android, designed to help Christians build gentle rhythms of prayer, Scripture, Sabbath, and other holy habits.',
        highlights: [
          'Led product, UX, content strategy, and AI-assisted React Native / Expo development.',
          'Shipped guided prayer, Bible reading, Scripture memorization, habit scheduling, achievement badges, analytics, support tiers, and a Next.js marketing site.',
        ],
        href: 'https://bearingfruit.app',
        cta: 'Visit Bearing Fruit',
        extraLinks: [
          { label: 'App Store', href: 'https://apps.apple.com/us/app/bearing-fruit/id6760858138', icon: 'apple' },
          { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=app.bearingfruit', icon: 'google' },
        ],
        featured: true,
      },
      {
        name: 'GeoGroups',
        tag: 'Web App',
        status: 'Pilot',
        period: '2026',
        image: '/project-logos/geogroups.png',
        description:
          'A lightweight spatial intelligence tool for church small-group coordinators, focused on better placement decisions rather than replacing a church management system.',
        highlights: [
          'Designed around a real coordinator workflow: placement recommendations, coverage visualization, and capacity awareness.',
          'Pilot direction uses React/Next, Node/Express, PostgreSQL, and Mapbox for mapping and geocoding.',
        ],
        href: 'https://geogroups.org',
        cta: 'Visit GeoGroups',
      },
      {
        name: 'HeartHabitz',
        tag: 'Health App',
        status: 'Prototype',
        period: '2025 - 2026',
        image: '/project-logos/hearthabitz.png',
        description:
          'A React Native health-habit app exploring habit support, reminders, sync, and secure account flows for personal health behavior change.',
        highlights: [
          'Designed and guided development of the Expo mobile app and supporting backend.',
          'Stack included React Native, Node.js, Express, PostgreSQL, local-first data, MFA/TOTP authentication, reminders, and sync.',
        ],
      },
    ],
  },
  {
    title: 'Health & Research',
    intro: 'Digital-health games and research collaborations where playful systems supported behavior change and clinical study design.',
    projects: [
      {
        name: 'Heart Health Mountain',
        tag: 'Health Game',
        status: 'Published Research',
        period: '2017 - 2026',
        image: '/project-logos/heart-health-mountain.png',
        description:
          'A sensor-controlled digital health game for heart-failure self-care, built for UT Austin research and extended through NIH-supported studies.',
        highlights: [
          'Built Unity/C# gameplay and self-care mechanics connected to activity-tracker and smart-scale workflows.',
          'Used in peer-reviewed studies, including a JMIR Serious Games randomized controlled trial and related digital-health publications.',
        ],
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10564567/',
        cta: 'Read on PubMed Central',
        featured: true,
      },
      {
        name: 'SAGA Lab Educational Apps, Games & Multimedia',
        tag: 'Educational Games & Apps',
        status: 'University Research',
        period: '2013 - 2017',
        image: '/project-logos/saga.png',
        description:
          'Educational-technology work at UT Austin spanning learning apps, games, digital media production, and interdisciplinary research collaborations.',
        highlights: [
          'Led projects and supervised a team of eight digital artists and programmers.',
          'Worked on Environ, Alien Rescue, Salamander Rescue, and health-game pilots connected to heart failure, hypertension, asthma, and obesity research.',
        ],
      },
    ],
  },
  {
    title: 'Learning / EdTech / Prior Work',
    intro: 'Earlier ventures and training products that shaped the studio approach to learning, collaboration, and game-based engagement.',
    projects: [
      {
        name: 'Yogi',
        tag: 'Learning App',
        status: 'Prior Product',
        period: '2016 - 2020',
        image: '/project-logos/yogi.png',
        imageBg: '#5A20E7',
        description:
          'A game-based learning mobile app built around flashcards, quiz modes, mini-games, progress feedback, and lightweight course authoring.',
        highlights: [
          'Designed and developed Unity/C# systems for authentication, leaderboards, analytics, flashcards, and multiple game modes.',
          'Explored a more playful alternative to conventional studying and review workflows.',
        ],
      },
      {
        name: 'ClioVis',
        tag: 'EdTech Platform',
        status: 'Prior Product',
        period: '2016 - 2021',
        image: '/project-logos/cliovis.png',
        href: 'https://cliovis.com',
        cta: 'Visit ClioVis',
        description:
          'A real-time collaborative timeline, mind-mapping, and presentation platform used by educators and students internationally.',
        highlights: [
          'Co-founded the company and led product design, UX, roadmap, and go-to-market materials.',
          'Contributed Vue.js front-end code and collaborated on a real-time architecture using C# project servers, WebSockets, Kubernetes, Redis, and MySQL.',
        ],
      },
      {
        name: 'National Highway Institute Training Simulations',
        tag: 'Training Simulation',
        status: 'Client Work',
        period: 'Freelance',
        image: '/project-logos/nhi.png',
        description:
          'Interactive 3D training simulations and instructional materials built for professional education and government training contexts.',
        highlights: [
          'Designed and built simulation assets and learning interactions.',
          'Delivered supporting web, graphic, animation, and digital-signage work for education, government, and small-business clients.',
        ],
      },
    ],
  },
  {
    title: 'Emerging Tools',
    intro: 'Small, focused tools exploring AI-assisted workflows, local-first systems, and practical productivity training.',
    projects: [
      {
        name: 'Tab Triage / SignalFoundry',
        tag: 'Productivity Tool',
        status: 'In Development',
        period: '2026',
        image: '/project-logos/tab-triage.png',
        description:
          'A local-first research workflow that turns large batches of URLs and notes into ranked, evidence-backed opportunities.',
        highlights: [
          'Parses, deduplicates, extracts, summarizes, and scores research inputs with cache-first reruns.',
          'Designed around a ranked inbox, evidence workspace, durable opportunity briefs, and conservative suppression of repeated low-signal links.',
        ],
      },
      {
        name: 'CommandSpeed',
        tag: 'Learning Game',
        status: 'In Development',
        period: '2025 - 2026',
        image: '/project-logos/commandspeed.png',
        description:
          'A gamified keyboard-shortcut trainer for spreadsheet power users, modernized from a Unity concept into a React web app.',
        highlights: [
          'Teaches Excel and Google Sheets shortcuts through progressive, timed game levels.',
          'Explores the same Good Life Games pattern: practical skill-building made more engaging through game structure.',
        ],
      },
    ],
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

const manifestoLine1 = 'Most software is designed to keep you scrolling.'
const manifestoWords = ['We', 'build', 'tools', 'that', 'help', 'you', 'grow.']
const accentWord = 'grow.'

function ManifestoReveal() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="manifesto" ref={ref}>
      <div className="shell">
        <p
          className="manifesto-line"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            transitionDelay: '0ms',
          }}
        >
          {manifestoLine1}
        </p>
        <p className="manifesto-line manifesto-strong" aria-label="We build tools that help you grow.">
          {manifestoWords.map((word, i) => (
            <span
              key={i}
              className={`mword${word === accentWord ? ' mword-accent' : ''}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.45s ease-out, transform 0.45s ease-out',
                transitionDelay: `${200 + i * 65}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

const MORPH_CYCLE_MS = 32_000
// Keyframe phase boundaries (fractions of cycle)
// blob 0–7.5%, blob→▽ 7.5–17.5%, ▽ 17.5–26.5%, ▽→heart 26.5–34.5%, heart 34.5–82%, heart→blob 82–100%
const MORPH_NEXT_START: Record<string, number> = { blob: 0.075, triangle: 0.265, heart: 0.82 }

function getMorphPhase(frac: number): string {
  if (frac < 0.075) return 'blob'
  if (frac < 0.175) return 'transition'
  if (frac < 0.265) return 'triangle'
  if (frac < 0.345) return 'transition'
  if (frac < 0.82) return 'heart'
  return 'transition'
}

function StoreIcon({ icon }: { icon: 'apple' | 'google' }) {
  if (icon === 'apple') {
    return (
      <svg className="store-icon store-icon-apple" width="14" height="14" viewBox="-1 -1 22 26" fill="currentColor" aria-hidden="true">
        <path d="M16.365 1.43c0 1.14-.43 2.2-1.13 3.01-.84.99-2.24 1.76-3.39 1.66-.13-1.11.42-2.29 1.1-3.03.77-.84 2.16-1.5 3.42-1.64zM20.5 17.05c-.6 1.38-.88 1.99-1.65 3.2-1.06 1.69-2.56 3.8-4.43 3.81-1.66.02-2.09-1.08-4.34-1.07-2.26.01-2.73 1.09-4.39 1.07-1.86-.02-3.28-1.91-4.35-3.6-2.98-4.7-3.3-10.21-1.45-13.14 1.3-2.08 3.36-3.29 5.29-3.29 1.97 0 3.2 1.08 4.83 1.08 1.58 0 2.54-1.08 4.82-1.08 1.72 0 3.55.94 4.85 2.56-4.26 2.33-3.57 8.4.71 10.45z"/>
      </svg>
    )
  }
  return (
    <svg className="store-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00D7FE" d="M3.06 2.4a1.5 1.5 0 0 0-.55 1.18v16.84c0 .47.21.89.55 1.18l9.05-9.6z" />
      <path fill="#FFCE00" d="M16.4 8.2l-3.34 3.55 3.34 3.55 4.02-2.32a1.36 1.36 0 0 0 0-2.46z" />
      <path fill="#FE3D44" d="M16.4 8.2 4.84 1.52a1.4 1.4 0 0 0-1.78.88l9.99 9.35z" />
      <path fill="#00F076" d="M3.06 21.6c.46.4 1.16.46 1.78.12L16.4 15.3l-3.35-3.55z" />
    </svg>
  )
}

function ProjectLogo({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        className="project-logo"
        src={project.image}
        alt=""
        loading="lazy"
        style={project.imageBg ? { background: project.imageBg } : undefined}
      />
    )
  }
  const initials = project.monogram ?? project.name.charAt(0)
  return (
    <span className={`project-logo project-logo-monogram len-${initials.length}`} aria-hidden="true">
      {initials}
    </span>
  )
}

function ProjectCard({ project, style }: { project: Project; style?: React.CSSProperties }) {
  const [expanded, setExpanded] = useState(false)
  const hasHighlights = project.highlights.length > 0
  const isLink = Boolean(project.href)

  return (
    <article
      className={`project-card ${project.featured ? 'project-featured' : ''} ${isLink ? 'is-link' : ''}`}
      style={style}
    >
      <div className="project-meta">
        <span className="project-tag">{project.tag}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-header">
        <ProjectLogo project={project} />
        <div className="project-headings">
          <p className="project-period">{project.period}</p>
          <h4>{project.name}</h4>
        </div>
      </div>
      <p>{project.description}</p>

      {hasHighlights && (
        <>
          <button
            type="button"
            className="project-details-toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Hide details' : 'Details'}
            <svg
              className={`chevron ${expanded ? 'chevron-open' : ''}`}
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {expanded && (
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </>
      )}

      {project.href && (
        <a href={project.href} className="project-link" target="_blank" rel="noreferrer">
          {project.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      )}
      {project.extraLinks && (
        <p className="project-store-links">
          {project.extraLinks.map((link) => (
            <a key={link.href} className="store-btn" href={link.href} target="_blank" rel="noreferrer">
              {link.icon && <StoreIcon icon={link.icon} />}
              {link.label}
            </a>
          ))}
        </p>
      )}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const heroArtRef = useRef<HTMLDivElement>(null)
  const morphStartRef = useRef(0)
  const morphLockedRef = useRef(false)
  const morphSyncStyleRef = useRef<HTMLStyleElement | null>(null)

  useEffect(() => {
    morphStartRef.current = Date.now()
    const syncStyle = document.createElement('style')
    document.head.appendChild(syncStyle)
    morphSyncStyleRef.current = syncStyle
    return () => {
      syncStyle.remove()
      morphSyncStyleRef.current = null
    }
  }, [])

  const handleArtClick = () => {
    if (morphLockedRef.current) return
    const art = heroArtRef.current
    if (!art) return

    const elapsed = (Date.now() - morphStartRef.current) % MORPH_CYCLE_MS
    const frac = elapsed / MORPH_CYCLE_MS
    const phase = getMorphPhase(frac)
    const target = MORPH_NEXT_START[phase]
    if (target === undefined) return // already mid-transition

    morphLockedRef.current = true

    const delaySec = -(MORPH_CYCLE_MS / 1000 * target)
    const syncStyle = morphSyncStyleRef.current
    art.style.animationName = 'none'
    if (syncStyle) syncStyle.textContent = '.hero-art::before { animation-name: none !important; }'
    void art.offsetHeight // force reflow to restart animation
    art.style.animationName = ''
    art.style.animationDelay = `${delaySec}s`
    if (syncStyle) syncStyle.textContent = `.hero-art::before { animation-delay: ${delaySec}s !important; }`
    morphStartRef.current = Date.now() - target * MORPH_CYCLE_MS

    // Unlock after longest transition completes (heart→blob = 18% of 32s ≈ 5.76s)
    setTimeout(() => { morphLockedRef.current = false }, 6000)
  }

  useEffect(() => {
    const hero = heroRef.current
    const art = heroArtRef.current
    if (!hero || !art) return

    // Parallax target: the click button sits exactly over the shape (z-index 1)
    const artBtn = hero.querySelector('.hero-art-btn') as HTMLElement | null

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      const rect = (artBtn ?? art).getBoundingClientRect()
      const normX = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const normY = ((event.clientY - rect.top) / rect.height - 0.5) * 2

      const clampedX = Math.max(-1, Math.min(1, normX))
      const clampedY = Math.max(-1, Math.min(1, normY))

      art.style.translate = `${(clampedX * 40).toFixed(1)}px ${(clampedY * 28).toFixed(1)}px`
    }

    const handleLeave = () => {
      art.style.translate = '0px 0px'
    }

    artBtn?.addEventListener('pointermove', handleMove)
    artBtn?.addEventListener('pointerleave', handleLeave)

    return () => {
      artBtn?.removeEventListener('pointermove', handleMove)
      artBtn?.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <>
      <header className="topbar">
        <div className="topbar-pill shell">
          <a className="brand" href="#top" aria-label="Good Life Games home">
            <GlgMark />
            <span className="brand-lockup">
              <span className="brand-text">Good Life Games</span>
              <span className="brand-tagline">Play well. Live well.</span>
            </span>
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
            <a href="#legal" onClick={() => setMenuOpen(false)}>Company</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" ref={heroRef}>
          <div className="hero-art" aria-hidden="true" ref={heroArtRef} />
          <div
            className="hero-art-btn"
            role="button"
            tabIndex={0}
            aria-label="Advance shape"
            onClick={handleArtClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleArtClick() }}
          />
          <div className="hero-content fade-in">
            <p className="eyebrow">Independent Product Studio</p>
            <h1>
              Software for the <em>good life.</em>
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
            <h2>Independent studio. High standards. Practical outcomes.</h2>
          </div>

          <p className="founder-line">
            Founded by Matthew O&apos;Hair &mdash; a designer and developer who has spent over a decade building
            learning, health, and game-based products, including published digital-health research.
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

        <ManifestoReveal />

        <RevealSection className="section shell" id="projects">
          <div className="section-head">
            <p className="eyebrow">Portfolio</p>
            <h2>Selected work from Good Life Games and related ventures</h2>
          </div>

          <div className="proof-band" aria-label="Good Life Games proof points">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>

          {projectGroups.map((group, groupIndex) => (
            <section className="project-group" key={group.title} aria-labelledby={`project-group-${groupIndex}`}>
              <div className="project-group-head">
                <h3 id={`project-group-${groupIndex}`}>{group.title}</h3>
                <p>{group.intro}</p>
              </div>

              <div className="project-grid">
                {group.projects.map((project, i) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    style={{ transitionDelay: `${(groupIndex + i) * 80}ms` }}
                  />
                ))}
              </div>
            </section>
          ))}
        </RevealSection>

        <RevealSection className="section shell" id="legal">
          <div className="section-head">
            <p className="eyebrow">Company &amp; Legal</p>
            <h2>The company behind the products.</h2>
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
          </div>
        </RevealSection>

        <RevealSection className="section shell" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Get in touch.</h2>
            <p className="contact-line">
              <strong>App support &mdash;</strong> please reach out through each product&apos;s own site:{' '}
              <a href="https://bearingfruit.app" target="_blank" rel="noreferrer">Bearing Fruit</a>
              {' · '}
              <a href="https://geogroups.org" target="_blank" rel="noreferrer">GeoGroups</a>.
            </p>
            <p className="contact-line">
              <strong>Partnerships, research collaborations, consulting, fractional product/design/dev work, and press &mdash;</strong>{' '}
              <a href="mailto:matthew@goodlifegames.io">matthew@goodlifegames.io</a>.
            </p>
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div className="footer-logo-block">
            <span className="footer-logo">
              <img src="/logo.png" alt="" className="logo-img" aria-hidden="true" />
            </span>
            <div>
              <p className="footer-brand">Good Life Games LLC</p>
              <p className="footer-tagline">Play well. Live well.</p>
            </div>
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
        </div>
      </footer>
    </>
  )
}

export default App
