import { InteractiveLayer } from "@/components/interactive-layer";
import Image from "next/image";

const skills = [
  "Ruby on Rails",
  "PostgreSQL",
  "REST APIs",
  "Sidekiq",
  "Elasticsearch",
  "Django",
  "Python",
  "JWT & Pundit",
  "Git & GitHub",
  "AI automation",
];

const experience = [
  {
    date: "Oct 2025 — Present",
    role: "Software Engineer · Ruby on Rails",
    company: "Xprolabs / Cancer Care EMR System",
    summary:
      "Building a Rails 8 electronic medical record system for cancer care, with role-based access, clinical scheduling, scan uploads, notifications, and dependable background processing.",
    impact: [
      "Designed invite-only workflows for admins, managers, doctors, and patients.",
      "Built appointment, doctor-slot, document, and status-management features.",
      "Worked with PostgreSQL, Sidekiq, Turbo, Ransack, PaperTrail, and Active Record.",
    ],
  },
  {
    date: "Jan 2025 — Apr 2025",
    role: "Software Developer Intern",
    company: "Techanzy Limited",
    summary:
      "Worked on Django products and an agentic AI call-analysis system, combining backend development with workflow automation and practical prompt engineering.",
    impact: [
      "Improved real-world project performance by 30%.",
      "Automated call uploads with Python scripts and AI-assisted workflows.",
      "Implemented dynamic field filters for cleaner, faster data handling.",
    ],
  },
  {
    date: "Jul 2023 — Oct 2024",
    role: "Software Engineering Fellow",
    company: "Headstarter AI",
    summary:
      "Built AI-oriented web projects through an international software engineering fellowship focused on technical execution and career development.",
    impact: [
      "Shipped weekly AI website projects and deployed two hackathon entries.",
      "Strengthened coding interview and applied problem-solving skills.",
    ],
  },
  {
    date: "Dec 2024 — Mar 2025",
    role: "Career-Prep Fellow",
    company: "Amal Academy",
    summary:
      "Completed an intensive, Stanford-funded professional skills fellowship after selection from more than 4,500 applicants.",
    impact: [
      "Invested 150 hours in communication, leadership, teamwork, and problem solving.",
    ],
  },
];

const projects = [
  {
    title: "MiniJob API",
    type: "Production-style Rails backend",
    description:
      "A job management REST API designed around secure access, fast discovery, consistent resources, and reliable asynchronous work.",
    features: [
      "JWT authentication and role authorization with Devise and Pundit",
      "Elasticsearch/Searchkick discovery with Kaminari pagination",
      "Sidekiq digests, re-indexing, expiry processing, and recurring schedules",
      "Swagger documentation, JSON:API responses, Rack::Attack, and analytics",
    ],
    signal: "API / Search / Async",
  },
  {
    title: "Cancer Care EMR",
    type: "Healthcare operations platform",
    description:
      "A role-aware care system that connects administrators, managers, doctors, and patients around clinical scheduling and records.",
    features: [
      "Invite-only, role-based access and user administration",
      "Doctor availability, exceptions, and appointment workflows",
      "Clinical scan uploads, status changes, and email notifications",
      "Auditing and performance tooling for a maintainable Rails 8 system",
    ],
    signal: "Rails 8 / PostgreSQL",
  },
  {
    title: "NextBot AI",
    type: "Conversational AI project",
    description:
      "An academic project focused on improving user interaction through an intelligent chatbot experience.",
    features: [
      "Led project planning and development",
      "Explored practical AI interaction patterns",
      "Built during the Headstarter AI program",
    ],
    signal: "AI / Product",
  },
  {
    title: "Gym-Fu",
    type: "Personalized fitness frontend",
    description:
      "A fitness website for personalized workout plans and accessible expert guidance, delivered as a university front-end project.",
    features: [
      "Led development and project coordination",
      "Designed a focused fitness browsing experience",
      "Translated user goals into structured workout content",
    ],
    signal: "Frontend / Leadership",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OrbitVisual() {
  return (
    <div className="orbit" aria-label="Animated system diagram representing connected software services">
      <span className="orbit-caption orbit-caption-top">Backend system map</span>
      <span className="orbit-caption orbit-caption-bottom">Lahore / PK · 31.5204° N</span>
      <div className="orbit-grid" />
      <div className="orbit-ring orbit-ring-a" />
      <div className="orbit-ring orbit-ring-b" />
      <div className="orbit-axis orbit-axis-x" />
      <div className="orbit-axis orbit-axis-y" />
      <div className="orbit-center"><span>MF</span><small><i /> system online</small></div>
      <span className="node node-a">API</span>
      <span className="node node-b">DB</span>
      <span className="node node-c">AI</span>
      <span className="node node-d">UX</span>
      <span className="pulse pulse-a" />
      <span className="pulse pulse-b" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <InteractiveLayer />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Muhammad Furqan, home">
          <span>MF</span>
          <span>Furqan.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:m.furqannasir56@gmail.com">
          <span /> Available for opportunities
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="portrait-stage"><Image src="/furqan-cutout.png" alt="Muhammad Furqan" fill sizes="(max-width: 680px) 95vw, 640px" preload className="hero-portrait" /></div>
          <span className="hero-monogram" aria-hidden="true">f.</span>
          <div className="hero-copy">
            <p className="intro-line">Muhammad Furqan · Software engineer</p>
            <h1>Thoughtful software.<br />Powerful systems.</h1>
            <p className="hero-lede">
              Backend-focused engineer working across Ruby on Rails, Django, AI automation,
              and modern web experiences—from clinical workflows to production-ready APIs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
              <a className="button button-quiet" href="/Muhammad-Furqan-Resume.pdf" download>Download résumé</a>
            </div>
            <div className="hero-proof" aria-label="Professional highlights">
              <div><strong>Rails 8</strong><span>Production systems</span></div>
              <div><strong>3.51</strong><span>Software Engineering CGPA</span></div>
              <div><strong>150h</strong><span>Leadership training</span></div>
            </div>
          </div>
          <a className="hero-work-link" href="#work"><span>Selected work</span><strong>Explore the projects ↗</strong></a>
          <a className="hero-down" href="#about" aria-label="Discover more about Furqan">↓</a>
        </section>

        <section className="about-studio section" id="about">
          <p className="about-label">A little about me</p>
          <div><h2 data-word-reveal aria-label="I turn complex problems into software that feels simple.">{"I turn complex problems into software that feels simple.".split(" ").map((word, index) => <span aria-hidden="true" key={index}>{word}{" "}</span>)}</h2><p>I’m Muhammad Furqan, a software engineer based in Lahore. I build with Ruby on Rails, Django, and AI tools, bringing careful thinking to the systems people rely on. My work spans healthcare workflows, secure APIs, search, and background processing.</p><a className="about-resume" href="/Muhammad-Furqan-Resume.pdf" download>Get my résumé <ArrowIcon /></a></div>
        </section>

        <section className="marquee" aria-label="Core capabilities">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading" data-reveal>
            <p>Selected work</p>
            <h2>Built with purpose.</h2>
            <p>I care about the invisible details: access boundaries, background work, clear APIs, and software a team can keep evolving.</p>
          </div>
          <div className="work-scroll-shell">
          <div className="work-sticky">
          <div className="work-toolbar"><span>Selected projects / 01—04</span><span className="work-scroll-hint">Scroll to explore →</span><a href="#experience">Skip to experience ↓</a></div>
          <div className="work-viewport">
          <div className="project-list">
            {projects.map((project, index) => (
              <details className="project" key={project.title}>
                <summary>
                  <div className={`project-art project-art-${index}`} aria-hidden="true">
                    <span className="art-caption">{index < 2 ? "System architecture" : "Project concept"}</span>
                    {index === 0 ? <div className="api-art"><span>MiniJob</span><code>GET /api/v1/jobs</code><div className="api-flow"><span>Authenticate</span><i>→</i><span>Search</span><i>→</i><span>Respond</span></div><pre>{'{\n  "resource": "jobs",\n  "search": "Elasticsearch",\n  "processing": "Sidekiq"\n}'}</pre></div> : index === 1 ? <div className="care-art"><div className="care-emblem"><svg viewBox="0 0 120 120" fill="none"><rect x="9" y="9" width="102" height="102" rx="30" fill="var(--paper)"/><path d="M60 30v60M30 60h60" stroke="var(--orange)" strokeWidth="20" strokeLinecap="round"/><path d="M29 63h17l8-14 12 25 8-11h17" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="care-emblem-dot" /></div><strong>Care, connected.</strong><div><span>Patients</span><span>Doctors</span><span>Appointments</span></div></div> : index === 2 ? <div className="bot-art"><span>NextBot</span><strong>A conversation.<br />A new possibility.</strong><div>Ask. Explore. Discover. <i>↗</i></div></div> : <div className="gym-art"><span>GYM—FU</span><strong>Find your<br />next move.</strong><div>Train with intention. ↗</div></div>}
                    <span className="art-explore"><span>Explore project</span><span>↗</span></span>
                  </div>
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-main">
                    <span className="project-type">{project.type}</span>
                    <strong>{project.title}</strong>
                    <span>{project.description}</span>
                  </span>
                  <span className="project-signal">{project.signal}</span>
                  <span className="project-toggle" aria-hidden="true"><i /><i /></span>
                </summary>
                <div className="project-detail">
                  <span>Implementation notes</span>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          </div>
          <div className="work-progress" aria-hidden="true"><span /></div>
          </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" data-reveal>
          <div className="section-heading sticky-heading">
            <p>Experience</p>
            <h2>Built through practice, sharpened through teams.</h2>
            <a href="/Muhammad-Furqan-Resume.pdf" download>Full résumé <ArrowIcon /></a>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.date}`}>
                <time>{item.date}</time>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.summary}</p>
                <ul>{item.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section capability-section" data-reveal>
          <div className="section-heading">
            <p>Toolkit</p>
            <h2>From request to reliable response.</h2>
          </div>
          <div className="capability-map">
            <div className="capability-row"><span>Design</span><p>UML diagrams · Data modeling · Role architecture · API contracts</p></div>
            <div className="capability-row"><span>Build</span><p>Rails · Django · PostgreSQL · REST APIs · Frontend development</p></div>
            <div className="capability-row"><span>Scale</span><p>Sidekiq · Elasticsearch · Scheduling · Pagination · Rate limiting</p></div>
            <div className="capability-row"><span>Collaborate</span><p>Git · Pull requests · Code review · Conflict resolution · Team leadership</p></div>
          </div>
        </section>

        <section className="section education-section" data-reveal>
          <div className="education-copy">
            <p>Foundation</p>
            <h2>Software engineering with curiosity beyond the syllabus.</h2>
          </div>
          <div className="education-detail">
            <p className="year">2021 — 2025</p>
            <h3>Bachelor of Software Engineering</h3>
            <p>Lahore Garrison University · 3.51 CGPA</p>
            <div className="awards">
              <span>Two-time High Achiever Award</span>
              <span>MERN Full Stack Development · UET</span>
              <span>Web 3.0 Society · Team Management Head</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" data-reveal>
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <p>Have a problem worth engineering?</p>
          <h2>Let’s build something dependable.</h2>
          <div className="contact-actions">
            <a href="mailto:m.furqannasir56@gmail.com">m.furqannasir56@gmail.com <ArrowIcon /></a>
            <a href="https://linkedin.com/in/muhammmadfurqan56" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="tel:+923114671321">+92 311 4671321 <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Muhammad Furqan</p>
        <p>Designed for clarity. Built for the web.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
