import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Header({ projectCount, notesCount, onOpenWorkArchive, onOpenBrief }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'work', count: projectCount, href: '#work', onClick: null },
    { label: 'notes', count: notesCount, href: '#insights', onClick: null },
    { label: 'about', href: '#about', onClick: null },
    { label: 'contact', href: '#contact', onClick: null },
  ];

  return (
    <>
      <header
        className="fixed top-5 left-0 right-0 z-40 flex items-center justify-between px-[var(--gutter)] text-white mix-blend-difference pointer-events-none"
      >
        <a
          href="#hero"
          className="pointer-events-auto font-wordmark text-xl font-bold tracking-tight sm:text-2xl"
          aria-label={`${PROFILE.name}, back to top`}
        >
          {PROFILE.brand}
        </a>

        {/* Desktop nav matching melon.studio */}
        <nav className="pointer-events-auto hidden items-center gap-7 sm:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="f-underline text-[15px] font-normal tracking-tight"
            >
              {item.label}
              {item.count !== undefined && (
                <sup className="font-mono-meta ml-1 text-[10px] opacity-70">
                  ({item.count})
                </sup>
              )}
            </a>
          ))}
          <button
            type="button"
            onClick={onOpenWorkArchive}
            className="font-mono-meta rounded-full border border-white/30 px-3 py-1 text-[11px] transition hover:bg-white hover:text-black cursor-pointer"
          >
            archive
          </button>
          <button
            type="button"
            onClick={() => onOpenBrief()}
            className="font-mono-meta rounded-full bg-white px-3.5 py-1 text-[11px] text-black transition hover:opacity-80 cursor-pointer"
          >
            let&apos;s talk
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-xs sm:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
          <span className="font-mono-meta text-[11px]">menu</span>
        </button>
      </header>

      {/* Mobile full-screen drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0f0000] p-6 text-white sm:hidden">
          <div className="flex items-center justify-between">
            <span className="font-wordmark text-xl font-bold">{PROFILE.brand}</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-full border border-white/20 p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display-editorial text-4xl text-white"
              >
                {item.label}
                {item.count !== undefined && (
                  <sup className="font-mono-meta ml-2 text-sm text-white/50">
                    ({item.count})
                  </sup>
                )}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 border-t border-white/15 pt-5">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBrief();
              }}
              className="w-full rounded-full bg-[#e5524a] py-3 text-sm font-medium text-white"
            >
              Start a project / Get in touch
            </button>
          </div>
        </div>
      )}
    </>
  );
}
