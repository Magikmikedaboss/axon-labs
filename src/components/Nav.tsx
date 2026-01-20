"use client";

import { SITE } from "@/lib/site";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="wrap h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 grid place-items-center">
            <span className="text-xs font-bold">A</span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-semibold">{SITE.name}</div>
            <div className="text-[10px] text-white/60">Research-first biohacking</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-xs text-white/70">
          {SITE.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white transition">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button href="/protocols" className="!px-3 !py-1 text-xs">Explore</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition"
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
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <div className="wrap py-4 space-y-3">
            {/* Navigation Links */}
            <nav className="space-y-2">
              {SITE.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <Button
                href="/protocols"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full !px-3 !py-1.5 text-xs"
              >
                Explore Protocols
              </Button>
              <Button
                href="/#newsletter"
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full !px-3 !py-1.5 text-xs"
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
