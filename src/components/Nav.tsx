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
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 grid place-items-center shadow-lg shadow-blue-600/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="font-bold text-lg text-slate-900">Axon Labs</span>
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
