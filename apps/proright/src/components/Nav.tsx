"use client";

import { useState } from "react";

const links = [
  { href: "#about-proright", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#method", label: "How It Works" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#john", label: "About John" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-2xl font-bold text-navy tracking-tight">
          Pro<span className="text-deep-blue">Right</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 hover:text-deep-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-deep-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-deep-blue-dark transition-colors shadow-md shadow-deep-blue/25"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
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
              className="block text-navy/70 hover:text-deep-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-deep-blue text-white text-center font-semibold px-5 py-2.5 rounded-full hover:bg-deep-blue-dark transition-colors mt-2"
          >
            Schedule a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
