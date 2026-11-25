import React, { useEffect, useState } from 'react';
import { Check, Copy, Send, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const COLLAB_TYPES = [
  'Full-Stack Role',
  'Software Internship',
  'AI / Copilot Project',
  'Web App Build',
];

export function BriefModal({ isOpen, onClose, initialTopic = '' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [collabType, setCollabType] = useState(
    initialTopic || COLLAB_TYPES[0]
  );
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTopic) setCollabType(initialTopic);
  }, [initialTopic]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const liveDraft = `Hi Shraddha,\n\nI'm ${name || '[Your Name]'}${
    email ? ` (${email})` : ''
  }, reaching out regarding a ${collabType}.\n\n${
    notes ||
    'We would love to discuss your experience with React 19, Node.js, Redis/BullMQ, and AI-driven platforms like SchemeMatch.'
  }\n\nBest regards,\n${name || '[Your Name]'}`;

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `${collabType} — Inquiry from ${name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(liveDraft)}`;

  const handleCopyDraft = () => {
    navigator.clipboard?.writeText(liveDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Start a conversation or project brief"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0f0000] p-6 text-white shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
          <div>
            <p className="font-mono-meta text-xs uppercase tracking-widest text-[#e5524a]">
              Interactive Brief · Live Draft
            </p>
            <h3 className="font-display-editorial mt-1 text-3xl sm:text-4xl">
              Let&apos;s build something together.
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-white/70 transition hover:bg-white hover:text-black cursor-pointer"
            aria-label="Close brief modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Form inputs */}
          <div className="space-y-5 md:col-span-6">
            <div>
              <label className="font-mono-meta block text-xs uppercase text-white/55">
                Purpose
              </label>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {COLLAB_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setCollabType(type)}
                    className={`rounded-full px-3.5 py-1.5 text-xs transition cursor-pointer ${
                      collabType === type
                        ? 'bg-[#e5524a] text-white'
                        : 'border border-white/15 bg-white/[0.04] text-white/75 hover:border-white/35'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="brief-name"
                className="font-mono-meta block text-xs uppercase text-white/55"
              >
                Your Name
              </label>
              <input
                id="brief-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ananya from Acme"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#45e0ea] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="brief-email"
                className="font-mono-meta block text-xs uppercase text-white/55"
              >
                Reply Email
              </label>
              <input
                id="brief-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#45e0ea] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="brief-notes"
                className="font-mono-meta block text-xs uppercase text-white/55"
              >
                Project or Role Details
              </label>
              <textarea
                id="brief-notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell Shraddha about your team, timeline, or product idea..."
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#45e0ea] focus:outline-none"
              />
            </div>
          </div>

          {/* Live draft preview (melon.studio signature feature) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#160505] p-5 md:col-span-6">
            <div>
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono-meta text-[11px] text-[#45e0ea]">
                  LIVE DRAFT PREVIEW
                </span>
                <span className="font-mono-meta text-[11px] text-white/45">
                  TO: {PROFILE.email}
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-white/85">
                {liveDraft}
              </pre>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
              <a
                href={mailtoHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#e5524a] hover:text-white"
              >
                <Send className="h-4 w-4" />
                <span>Open in Mail</span>
              </a>
              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2.5 text-xs text-white transition hover:border-white cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Draft</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
