import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X, FolderGit2, Layers } from 'lucide-react';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCaseStudyDrawer({ project, onClose, onSelectProject, allProjects }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIdx + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="relative h-full w-full max-w-3xl overflow-y-auto border-l border-white/15 bg-[#0f0000] p-6 text-white sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-4">
          <div className="font-mono-meta flex items-center gap-2 text-white/60">
            <Layers className="h-4 w-4 text-[#e5524a]" />
            <span>CASE STUDY // {project.year}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-1.5 text-xs text-white transition hover:bg-white hover:text-black cursor-pointer"
          >
            <span>Close</span>
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/15">
          <ProjectVisual project={project} />
        </div>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono-meta text-xs uppercase tracking-widest text-[#e5524a]">
              {project.category}
            </p>
            <h3 className="font-display-editorial mt-2 text-4xl text-white sm:text-5xl">
              {project.title}
            </h3>
          </div>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#e5524a] hover:text-white"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>View on GitHub</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
          {project.summary}
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/15 py-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-mono-meta text-[11px] uppercase text-white/45">
                {m.label}
              </div>
              <div className="font-display-editorial mt-1 text-2xl text-white sm:text-3xl">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4 className="font-mono-meta text-xs uppercase tracking-wider text-white/50">
            Engineering Highlights
          </h4>
          <ul className="mt-4 space-y-3.5">
            {project.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-[15px] leading-relaxed text-white/80"
              >
                <span className="font-mono-meta mt-1 text-xs text-[#e5524a]">
                  0{idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="font-mono-meta text-xs uppercase tracking-wider text-white/50">
            Technologies Used
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono-meta rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {nextProject && (
          <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
            <span className="font-mono-meta text-xs text-white/45">
              NEXT PROJECT
            </span>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="group inline-flex items-center gap-2 text-lg font-medium text-white transition hover:text-[#e5524a] cursor-pointer"
            >
              <span>{nextProject.title}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function WorkArchiveDrawer({ isOpen, onClose, projects, onSelectProject }) {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filters = ['All', 'Full-Stack & AI', 'Frontend & Audio', 'Systems'];
  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Full-Stack & AI') {
      return ['aerogarage', 'schemematch', 'govassistant'].includes(p.id);
    }
    if (filter === 'Frontend & Audio') {
      return ['audiosphere', 'foodsmile', 'hackher'].includes(p.id);
    }
    return p.id === 'systems-ai-lab';
  });

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0f0000]/95 p-6 text-white backdrop-blur-lg sm:p-12"
      role="dialog"
      aria-modal="true"
      aria-label="All Projects Archive"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div>
            <p className="font-mono-meta text-xs uppercase tracking-widest text-[#e5524a]">
              Selected &amp; GitHub Archive
            </p>
            <h2 className="font-display-editorial mt-1 text-4xl sm:text-6xl">
              All Work <span className="text-white/40">({projects.length})</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-white transition hover:bg-white hover:text-black cursor-pointer"
          >
            <span>Close Archive</span>
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Filter pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-mono-meta rounded-full px-4 py-1.5 text-xs transition cursor-pointer ${
                filter === f
                  ? 'bg-[#e5524a] text-white'
                  : 'border border-white/15 bg-white/[0.04] text-white/70 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                onClose();
                onSelectProject(project);
              }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 transition duration-500 group-hover:border-[#e5524a]/60">
                <ProjectVisual project={project} />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-white transition group-hover:text-[#e5524a]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/55">
                    {project.category}, {project.year}
                  </p>
                </div>
                <span className="font-mono-meta inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                  Case study <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
