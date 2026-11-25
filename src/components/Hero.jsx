import React, { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Hero({ onOpenBrief }) {
  const [timeStr, setTimeStr] = useState('--:--');
  const [mouse, setMouse] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const ist = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now);
        setTimeStr(`${ist} IST`);
      } catch {
        setTimeStr('10:50 IST');
      }
    };
    updateClock();
    const id = setInterval(updateClock, 15000);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x, y });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[94svh] flex-col justify-between overflow-hidden bg-[#0f0000] px-[var(--gutter)] pb-10 pt-24 text-white"
    >
      {/* Atmospheric melon.studio crimson + cyan wave shader backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-ember-pulse absolute -top-24 left-1/2 h-[65vh] w-[90vw] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(184, 0, 0, 0.55) 0%, rgba(90, 11, 7, 0.35) 45%, rgba(15, 0, 0, 0) 75%)',
          }}
        />
        <div
          className="hero-wave-layer absolute top-[18%] left-[10%] h-[42vh] w-[80vw] rounded-full blur-[110px] opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(69, 224, 234, 0.32) 0%, rgba(20, 151, 172, 0.18) 45%, transparent 72%)',
          }}
        />
        {/* Interactive mouse spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(560px circle at ${mouse.x}% ${mouse.y}%, rgba(229, 82, 74, 0.14), transparent 65%)`,
          }}
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0000] to-transparent" />
      </div>

      {/* Screen-reader H1 */}
      <h1 className="sr-only">
        {PROFILE.name} — {PROFILE.role} in {PROFILE.location}
      </h1>

      {/* Giant kinetic wordmark centerpiece matching melon's liquid hero */}
      <div className="relative z-10 my-auto flex flex-col justify-center py-6 sm:py-10">
        <div className="font-mono-meta mb-4 flex flex-wrap items-center gap-3 text-white/55">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#45e0ea] animate-pulse" />
            github.com/{PROFILE.handle}
          </span>
          <span className="text-white/25">/</span>
          <span>B.Tech CSE · LPU</span>
          <span className="text-white/25">/</span>
          <span>Oracle Agentic AI Certified</span>
        </div>

        <div className="relative select-none">
          <div
            className="font-wordmark text-[clamp(3.3rem,14.5vw,13.5rem)] font-extrabold leading-[0.84] tracking-[-0.055em] text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(115deg, #ffffff 12%, #ffb3b3 46%, #45e0ea 78%, #e5524a 100%)',
            }}
          >
            shraddha
          </div>
          <div className="mt-1 flex items-baseline justify-between gap-4">
            <div className="font-wordmark text-[clamp(3.3rem,14.5vw,13.5rem)] font-extrabold leading-[0.84] tracking-[-0.055em] text-white/95">
              suyal<span className="text-[#e5524a]">.</span>
            </div>
            <div className="hidden max-w-xs pb-3 text-right md:block">
              <p className="font-mono-meta text-[12px] text-white/50">
                CRAFTED IN REACT 19 &amp; NODE.JS
              </p>
              <p className="mt-1 text-sm text-white/75">
                Full-stack systems, Redis + BullMQ architectures, and AI copilots.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Above-the-fold bottom metadata strip (.atf-what-box) */}
      <div className="relative z-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <p className="font-display-editorial max-w-xl text-2xl leading-[1.2] text-white sm:text-3xl">
            {PROFILE.headline}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:col-span-4 md:col-start-8">
          <div className="font-mono-meta flex items-center gap-2 text-white/75">
            <time>{timeStr}</time>
            <span className="text-white/30">·</span>
            <span>{PROFILE.location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>{PROFILE.availability}</span>
          </div>
        </div>

        <div className="flex items-center md:col-span-1 md:justify-end">
          <button
            type="button"
            onClick={() => onOpenBrief()}
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:border-[#e5524a] hover:bg-[#e5524a] cursor-pointer"
          >
            <span>Hire / Brief</span>
            <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
