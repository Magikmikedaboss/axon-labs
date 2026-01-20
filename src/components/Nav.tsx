"use client";

import { SITE } from "@/lib/site";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200 bg-white/90">
      <div className="wrap h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 border border-slate-300 bg-slate-50 grid place-items-center">
            <span className="text-xs font-bold tracking-wider text-blue-600">A</span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-semibold tracking-tight text-slate-900">{SITE.name}</div>
            <div className="text-[10px] text-slate-500 tracking-wide uppercase">Research-first biohacking</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600">
          {SITE.nav.map((n) => (
            <Link 
              key={n.href} 
              href={n.href} 
              className="hover:text-blue-600 transition-colors duration-200 tracking-wide"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/protocols" size="sm">Explore</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-9 h-9 border border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="wrap py-4 space-y-4">
            {/* Navigation Links */}
            <nav className="space-y-1">
              {SITE.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200 border-l-2 border-transparent hover:border-blue-600"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Button
                href="/protocols"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
                size="sm"
              >
                Explore Protocols
              </Button>
              <Button
                href="/#newsletter"
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
                size="sm"
              >
                Get Protocol Notes →
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
