"use client";

import { useState } from "react";

const links = [
  { href: "#about-essayright", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#method", label: "The Method" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#john", label: "About John" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-2xl font-bold text-navy tracking-tight">
          Essay<span className="text-teal">Right</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark transition-colors shadow-md shadow-teal/20"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navy p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-navy/5 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-navy/70 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark transition-colors mt-2"
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
