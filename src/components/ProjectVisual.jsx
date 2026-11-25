import React from 'react';

export function ProjectVisual({ project }) {
  const { visualType, theme, title, metrics } = project;

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${theme.bg} select-none`}
    >
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient studio glow */}
      <div
        className="absolute -right-12 -top-12 h-56 w-56 rounded-full blur-3xl opacity-35 transition-transform duration-700 group-hover:scale-125"
        style={{ background: theme.accent }}
      />
      <div
        className="absolute -bottom-16 left-8 h-48 w-48 rounded-full blur-3xl opacity-25 transition-transform duration-700 group-hover:translate-x-6"
        style={{ background: theme.secondary }}
      />

      {/* Bespoke UI Mockup Centerpiece */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono-meta rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80 backdrop-blur-md">
            {project.badge}
          </span>
          <span className="font-mono-meta text-[11px] text-white/55">
            {project.language}
          </span>
        </div>

        {/* Visual center representation per project */}
        <div className="my-auto py-3">
          {visualType === 'aviation' && (
            <div className="mx-auto max-w-[92%] rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur-md shadow-2xl">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e5524a]" />
                  <span className="font-mono-meta text-[11px] text-white/70">
                    AEROGARAGE // MULTI-PORTAL
                  </span>
                </div>
                <span className="font-mono-meta text-[10px] text-[#45e0ea]">
                  WS LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Airlines', 'Trainees', 'Admin'].map((portal, i) => (
                  <div
                    key={portal}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5"
                  >
                    <div className="font-mono-meta text-[10px] text-white/50">
                      0{i + 1}
                    </div>
                    <div className="mt-1 text-xs font-medium text-white">
                      {portal}
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: i === 0 ? '88%' : i === 1 ? '72%' : '95%',
                          background: i === 2 ? '#45e0ea' : '#e5524a',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {visualType === 'schemematch' && (
            <div className="mx-auto max-w-[92%] rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur-md shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono-meta text-[11px] text-[#45e0ea]">
                  ELIGIBILITY ENGINE · AI COPILOT
                </span>
                <span className="font-mono-meta rounded bg-[#45e0ea]/15 px-2 py-0.5 text-[10px] text-[#45e0ea]">
                  94% MATCH
                </span>
              </div>
              <div className="space-y-2">
                {[
                  ['Demographic & Sector', '96%'],
                  ['Loan & EMI Projection', 'DPR Ready'],
                  ['Multilingual Copilot', 'Active'],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <span className="text-xs text-white/80">{label}</span>
                    <span className="font-mono-meta text-[11px] text-white/60">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {visualType === 'audiosphere' && (
            <div className="mx-auto max-w-[92%] rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur-md shadow-2xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono-meta text-[11px] text-[#ffb3b3]">
                  16-STEP SEQUENCER · 124 BPM
                </span>
                <span className="font-mono-meta text-[10px] text-white/50">
                  WEB AUDIO
                </span>
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 16 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-6 rounded ${
                      [0, 3, 4, 7, 8, 10, 12, 15].includes(idx)
                        ? 'bg-[#ffb3b3] shadow-[0_0_12px_rgba(255,179,179,0.45)]'
                        : 'border border-white/10 bg-white/[0.04]'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 flex h-7 items-end gap-1">
                {[30, 65, 45, 90, 55, 80, 40, 95, 70, 50, 85, 60, 75, 40, 65, 35].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#45e0ea]/60 to-[#ffb3b3]/90"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>
          )}

          {visualType !== 'aviation' &&
            visualType !== 'schemematch' &&
            visualType !== 'audiosphere' && (
              <div className="mx-auto max-w-[92%] rounded-xl border border-white/15 bg-black/45 p-5 backdrop-blur-md">
                <div className="font-mono-meta text-[11px] uppercase tracking-widest text-white/50">
                  github.com/suyals
                </div>
                <div className="mt-2 font-display-editorial text-2xl text-white sm:text-3xl">
                  {title}
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-white/65">
                  {project.summary}
                </p>
              </div>
            )}
        </div>

        {/* Bottom metric pills */}
        <div className="flex flex-wrap items-center gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 backdrop-blur-sm"
            >
              <span className="font-mono-meta text-[10px] text-white/45">
                {m.label}
              </span>
              <span className="font-mono-meta text-[11px] text-white">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
