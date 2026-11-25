import React from 'react';
import { ArrowRight } from 'lucide-react';

export function RollingText({ children, className = '' }) {
  return (
    <span className={`f-roll ${className}`}>
      <span className="f-roll__in">
        <span className="f-roll__t">{children}</span>
        <span className="f-roll__t f-roll__t--b" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}

export function DoubleArrow({ className = '' }) {
  return (
    <span className={`f-arr-wrap ${className}`} aria-hidden="true">
      <ArrowRight className="f-arr f-arr--a h-4 w-4" strokeWidth={1.75} />
      <ArrowRight className="f-arr f-arr--b h-4 w-4" strokeWidth={1.75} />
    </span>
  );
}
