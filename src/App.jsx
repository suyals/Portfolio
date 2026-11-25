import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';
import {
  EXPERIENCE_ROWS,
  FOCUS_SLIDES,
  GITHUB_REPOS_EXTRA,
  INSIGHTS_AND_CERTS,
  PROFILE,
  PROJECTS,
  SKILLS_GRID,
} from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectVisual } from './components/ProjectVisual';
import { DoubleArrow, RollingText } from './components/RollingText';
import {
  ProjectCaseStudyDrawer,
  WorkArchiveDrawer,
} from './components/ProjectDrawer';
import { BriefModal } from './components/BriefModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);
  const [briefTopic, setBriefTopic] = useState('');
  const [moreAboutOpen, setMoreAboutOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderDone(true), 650);
    return () => clearTimeout(timer);
  }, []);

  const openProjectById = (id) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  const openBriefWithTopic = (topic = '') => {
    setBriefTopic(topic);
    setBriefOpen(true);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  const activeSlide = FOCUS_SLIDES[slideIdx];

  return (
    <div className="min-h-screen bg-[#0f0000] text-white">
      {/* Subtle melon.studio Preloader Curtain */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-between bg-[#0f0000] px-[var(--gutter)] text-white transition-all duration-700 ease-out pointer-events-none ${
          preloaderDone ? 'opacity-0 -translate-y-4' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        <span className="font-wordmark text-2xl font-bold">{PROFILE.brand}</span>
        <span className="font-mono-meta text-xs text-white/60">
          LOADING PORTFOLIO // 2026
        </span>
      </div>

      {/* Fixed Difference-Blend Topbar */}
      <Header
        projectCount={PROJECTS.length}
        notesCount={INSIGHTS_AND_CERTS.length}
        onOpenWorkArchive={() => setArchiveOpen(true)}
        onOpenBrief={() => openBriefWithTopic('')}
      />

      <main id="main" tabIndex={-1}>
        {/* 1. HERO (DARK) */}
        <Hero onOpenBrief={() => openBriefWithTopic('')} />

        {/* 2. LATEST WORK (DARK) */}
        <section
          id="work"
          data-tone="black"
          aria-label="Selected work"
          className="px-[var(--gutter)] pb-24 pt-14 sm:pb-32 sm:pt-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display-editorial text-[clamp(3.25rem,11.5vw,10.5rem)] leading-[0.86] text-white">
              Latest Work
            </h2>

            <button
              type="button"
              onClick={() => setArchiveOpen(true)}
              className="group inline-flex items-center gap-2.5 pb-2 text-sm font-medium text-white/85 transition hover:text-white cursor-pointer"
            >
              <RollingText>Show all</RollingText>
              <DoubleArrow />
            </button>
          </div>

          {/* Horizontal interactive work ribbon + clean 2-col visual flow */}
          <div className="work-ribbon mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
            {PROJECTS.map((project, idx) => (
              <article
                key={project.id}
                className="group w-[86vw] shrink-0 snap-start sm:w-[58vw] lg:w-[44vw]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`${project.title}: open project details`}
                  className="block w-full text-left cursor-pointer"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/12 transition duration-500 group-hover:-translate-y-1 group-hover:border-[#e5524a]/60">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-white transition group-hover:text-[#e5524a] sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/55">
                        {project.category}, {project.year}
                      </p>
                    </div>
                    <span className="font-mono-meta text-xs text-white/40 transition group-hover:text-white">
                      0{idx + 1} / 0{PROJECTS.length}
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* 3. ABOUT ME (WARM ALABASTER LIGHT CHAPTER) */}
        <section
          id="about"
          data-tone="white"
          className="px-[var(--gutter)] py-24 sm:py-36"
        >
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-6">
            <h2 className="sr-only">About me</h2>

            {/* Giant editorial lede with inline pill badge */}
            <p className="font-display-editorial col-span-full text-[clamp(2rem,5.15vw,6.25rem)] leading-[1.03] tracking-[-0.04em] text-[#0f0000]">
              I&apos;m {PROFILE.firstName}{' '}
              <span
                className="mx-1 inline-flex h-[0.82em] w-[1.45em] translate-y-[0.08em] items-center justify-center rounded-full bg-[#0f0000] align-baseline text-[0.38em] font-semibold tracking-normal text-[#f6efed] shadow-sm"
                title={PROFILE.name}
              >
                SS
              </span>{' '}
              — Full-Stack Developer &amp; CS Engineer based in India, deep into
              resilient web &amp; AI systems.
            </p>

            {/* Right-aligned editorial 2-paragraph bio matching melon.studio grid */}
            <div className="mt-6 grid grid-cols-1 gap-8 md:col-span-6 md:col-start-7 md:mt-14 md:grid-cols-2">
              {PROFILE.aboutBio.map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.6] text-[#0f0000]/80"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <button
                type="button"
                onClick={() => setMoreAboutOpen((v) => !v)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#0f0000]/25 px-5 py-2.5 text-sm font-medium text-[#0f0000] transition hover:bg-[#0f0000] hover:text-[#f6efed] cursor-pointer"
              >
                <RollingText>
                  {moreAboutOpen ? 'Less about me' : 'More about me'}
                </RollingText>
                <DoubleArrow />
              </button>

              {moreAboutOpen && (
                <div className="mt-6 grid grid-cols-1 gap-6 rounded-2xl border border-[#0f0000]/15 bg-[#0f0000]/[0.04] p-6 sm:grid-cols-2">
                  <div>
                    <div className="font-mono-meta text-xs uppercase text-[#0f0000]/50">
                      Core Strengths
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-[#0f0000]/85">
                      <li>• Problem-Solving &amp; Algorithmic Thinking</li>
                      <li>• Team Player &amp; Cross-Portal Collaboration</li>
                      <li>• Adaptability Across AI &amp; Web Stacks</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono-meta text-xs uppercase text-[#0f0000]/50">
                      Quick Facts
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-[#0f0000]/85">
                      <li>• B.Tech CSE @ LPU (CGPA 7.87)</li>
                      <li>• 14+ public repositories on GitHub</li>
                      <li>• Hometown: Prayagraj, Uttar Pradesh</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. EXPERIENCE & TRAINING (DARK CHAPTER) */}
        <section
          id="experience"
          data-tone="black"
          className="px-[var(--gutter)] py-24 sm:py-36"
        >
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-6">
            <header className="md:col-span-5">
              <p className="font-mono-meta mb-3 text-xs uppercase tracking-widest text-[#e5524a]">
                Background
              </p>
              <h2 className="font-display-editorial text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.9] text-white">
                Experience
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                Production engineering, EdTech Java OOP training, and computer
                science academics.
              </p>
            </header>

            <div className="md:col-span-7">
              <div className="divide-y divide-white/15 border-t border-b border-white/15">
                {EXPERIENCE_ROWS.map((row) => (
                  <div
                    key={row.org + row.period}
                    className="group py-7 transition-colors"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-medium text-white transition group-hover:text-[#e5524a] sm:text-2xl">
                          {row.org}
                        </h3>
                        <p className="mt-0.5 text-sm text-white/65">
                          {row.role}
                        </p>
                      </div>
                      <span className="font-mono-meta text-xs text-white/55">
                        {row.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {row.summary}
                    </p>
                    <p className="font-mono-meta mt-3 text-[11px] text-[#45e0ea]/80">
                      {row.stack}
                    </p>
                  </div>
                ))}
              </div>

              {/* Matching melon.studio "As a freelancer I worked with" */}
              <div className="mt-10">
                <p className="font-mono-meta text-xs uppercase tracking-wider text-white/45">
                  Shipped on GitHub (@{PROFILE.handle})
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {GITHUB_REPOS_EXTRA.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/80 transition hover:border-[#e5524a] hover:text-white"
                    >
                      <span>{repo.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CERTIFICATES & ENGINEERING NOTES (WARM ALABASTER LIGHT CHAPTER) */}
        <section
          id="insights"
          data-tone="white"
          className="px-[var(--gutter)] py-24 sm:py-36"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
            <div>
              <p className="font-mono-meta mb-2 text-xs uppercase tracking-widest text-[#b80000]">
                Credentials &amp; Write-ups
              </p>
              <h2 className="font-display-editorial text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.88] text-[#0f0000]">
                Insights &amp; Certs
              </h2>
            </div>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#0f0000]"
            >
              <RollingText>LinkedIn credentials</RollingText>
              <DoubleArrow />
            </a>
          </div>

          <div className="divide-y divide-[#0f0000]/15 border-t border-b border-[#0f0000]/15">
            {INSIGHTS_AND_CERTS.map((item) => (
              <div
                key={item.title}
                onClick={() => {
                  if (item.projectId) {
                    openProjectById(item.projectId);
                  } else if (item.link) {
                    window.open(item.link, '_blank', 'noreferrer');
                  }
                }}
                className="group grid cursor-pointer grid-cols-1 gap-4 py-7 transition hover:bg-[#0f0000]/[0.03] md:grid-cols-12 md:items-center"
              >
                <div className="font-mono-meta text-xs text-[#0f0000]/55 md:col-span-2">
                  {item.date}
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-xl font-medium tracking-tight text-[#0f0000] transition group-hover:text-[#b80000] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#0f0000]/65">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 md:col-span-4 md:justify-end">
                  <span className="font-mono-meta rounded-full border border-[#0f0000]/20 px-3 py-1 text-[11px] text-[#0f0000]/80">
                    {item.tag}
                  </span>
                  <span className="font-mono-meta text-xs text-[#0f0000]/50">
                    {item.meta}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#0f0000]/45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b80000]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SKILLS & TECH STACK GRID (DARK CHAPTER — matching melon.studio Clients Grid) */}
        <section
          id="skills"
          data-tone="black"
          className="px-[var(--gutter)] py-24 sm:py-32"
        >
          <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono-meta mb-2 text-xs uppercase tracking-widest text-[#45e0ea]">
                Technical Matrix
              </p>
              <h2 className="font-display-editorial text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.9] text-white">
                Stack &amp; Tools
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/60 md:col-span-5">
              Languages, frameworks, databases, and infrastructure I build with
              across production portals, AI agents, and student tools.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS_GRID.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col justify-between border-r border-b border-white/15 p-6 transition hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-meta text-[11px] uppercase text-white/45">
                    {skill.group}
                  </span>
                  <span className="font-mono-meta rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] text-[#ffb3b3]">
                    {skill.badge}
                  </span>
                </div>
                <div className="mt-8 text-xl font-medium text-white transition group-hover:text-[#45e0ea]">
                  {skill.name}
                </div>
              </div>
            ))}

            {/* Signature melon.studio open-spot CTA cell */}
            <button
              type="button"
              onClick={() => openBriefWithTopic('Full-Stack Role')}
              className="group col-span-full flex items-center justify-between border-r border-b border-white/15 bg-gradient-to-r from-[#1d0505] to-[#0f0000] p-6 text-left transition hover:from-[#b80000]/30 hover:to-[#0f0000] cursor-pointer"
            >
              <div>
                <div className="font-mono-meta text-xs uppercase text-[#e5524a]">
                  Next Team / Role
                </div>
                <div className="font-display-editorial mt-1 text-2xl text-white sm:text-3xl">
                  This spot&apos;s open. Let&apos;s build together.
                </div>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </section>

        {/* 7. ENGINEERING HIGHLIGHTS CAROUSEL (DARK — matching melon.studio Reviews 01 / 03) */}
        <section
          id="highlights"
          data-tone="black"
          className="border-t border-white/10 px-[var(--gutter)] py-24 sm:py-32"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono-meta text-xs uppercase tracking-widest text-white/50">
                Engineering Focus
              </p>
              <h2 className="font-display-editorial mt-2 text-3xl text-white sm:text-4xl">
                What I ship
              </h2>

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setSlideIdx(
                      (i) => (i - 1 + FOCUS_SLIDES.length) % FOCUS_SLIDES.length
                    )
                  }
                  aria-label="Previous highlight"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <span className="font-mono-meta text-sm text-white/75">
                  0{slideIdx + 1} / 0{FOCUS_SLIDES.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setSlideIdx((i) => (i + 1) % FOCUS_SLIDES.length)
                  }
                  aria-label="Next highlight"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-8">
              <blockquote className="font-display-editorial text-2xl leading-[1.32] text-white/95 sm:text-4xl">
                &ldquo;{activeSlide.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
                <div>
                  <div className="text-base font-medium text-white">
                    {activeSlide.author}
                  </div>
                  <div className="font-mono-meta text-xs text-white/50">
                    {activeSlide.role}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openProjectById(activeSlide.projectId)}
                  className="group inline-flex items-center gap-2 text-sm text-[#45e0ea] transition hover:text-white cursor-pointer"
                >
                  <span>{activeSlide.cta}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT (DARK — matching melon.studio Contact + Brief CTA) */}
        <section
          id="contact"
          data-tone="black"
          className="border-t border-white/15 px-[var(--gutter)] py-24 sm:py-36"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono-meta mb-3 text-xs uppercase tracking-widest text-[#e5524a]">
                Contact
              </p>
              <h2 className="font-display-editorial text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] text-white">
                Let&apos;s work together
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group inline-flex items-center gap-3 text-xl text-white/90 underline decoration-white/30 underline-offset-8 transition hover:text-[#45e0ea] hover:decoration-[#45e0ea] sm:text-3xl cursor-pointer"
                >
                  <span>{PROFILE.email}</span>
                  {emailCopied ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Copy className="h-5 w-5 opacity-50 transition group-hover:opacity-100" />
                  )}
                </button>
                {emailCopied && (
                  <span className="font-mono-meta rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                    Copied to clipboard
                  </span>
                )}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-white/60">
                <a
                  href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#e5524a]" />
                  <span>{PROFILE.phone}</span>
                </a>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{PROFILE.availability}</span>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 md:flex md:justify-end">
              <button
                type="button"
                onClick={() => openBriefWithTopic('')}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-[#e5524a] hover:text-white cursor-pointer"
              >
                <RollingText>Start a project</RollingText>
                <DoubleArrow />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER (matching melon.studio 3-col + Listening/Building bar) */}
      <footer
        id="foot"
        className="border-t border-white/15 bg-[#0f0000] px-[var(--gutter)] py-14 text-white"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-wordmark text-2xl font-bold">{PROFILE.brand}</div>
            <p className="mt-2 text-sm text-white/55">
              {PROFILE.name} — {PROFILE.role}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Capabilities">
            <div className="font-mono-meta text-xs uppercase text-white/40">
              Capabilities
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Full-Stack Web Engineering</li>
              <li>AI Copilots &amp; Agentic Workflows</li>
              <li>Real-Time Systems &amp; REST APIs</li>
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Social">
            <div className="font-mono-meta text-xs uppercase text-white/40">
              Social
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[#45e0ea]"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub (@{PROFILE.handle})</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-[#45e0ea]"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-[#45e0ea]"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <div className="font-mono-meta text-xs uppercase text-white/40">
              Currently Building
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.03] p-3.5">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#45e0ea]" />
              <div>
                <div className="text-sm font-medium text-white">
                  {PROFILE.currentlyBuilding.title}
                </div>
                <div className="font-mono-meta mt-0.5 text-[11px] text-white/50">
                  {PROFILE.currentlyBuilding.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45">
          <span className="font-mono-meta">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React &amp;
            Tailwind CSS.
          </span>
          <span className="font-mono-meta">
            Format inspired by melon.studio · github.com/{PROFILE.handle}
          </span>
        </div>
      </footer>

      {/* Interactive Drawers & Brief Modal */}
      <ProjectCaseStudyDrawer
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <WorkArchiveDrawer
        isOpen={archiveOpen}
        onClose={() => setArchiveOpen(false)}
        projects={PROJECTS}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <BriefModal
        isOpen={briefOpen}
        onClose={() => setBriefOpen(false)}
        initialTopic={briefTopic}
      />
    </div>
  );
}
