import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProtocolCard from "@/components/ProtocolCard";
import NewsletterForm from "@/components/NewsletterForm";
import InfoWidget from "@/components/InfoWidget";
import DataWidget from "@/components/DataWidget";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="wrap pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="surface p-8 sm:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex flex-wrap items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-1.5 text-[10px] sm:text-xs text-slate-600">
                  <span className="kbd">Research-first</span>
                  <span className="text-slate-400">•</span>
                  <span className="hidden sm:inline">Biohacking education + protocols</span>
                  <span className="sm:hidden">Biohacking education</span>
                </div>

                <h1 className="h1 mt-6">{SITE.tagline}</h1>
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Axon Labs is a research-driven guide to peptides, signaling pathways, and performance
                  systems. Built for curious optimizers who want clarity, not hype.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="#protocols" size="md">Explore Protocols</Button>
                  <Button href="#library" variant="ghost" size="md">Learn</Button>
                </div>

                <div className="mt-6 text-xs text-slate-500 leading-relaxed">
                  Educational content only. No medical advice. Research materials, if offered, are for
                  laboratory use only.
                </div>

                {/* trust strip */}
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <TrustPill title="Data over anecdotes" text="Clear explanations with sources." />
                  <TrustPill title="No miracle claims" text="We avoid hype and hard-sell." />
                  <TrustPill title="Transparency first" text="Standards, testing, boundaries." />
                </div>
              </div>

              {/* Right column: conversion box */}
              <div className="lg:w-[400px]">
                <NewsletterForm source="home-hero" compact />

                <InfoWidget 
                  className="mt-4"
                  title="Note"
                >
                  Axon Labs is an educational platform. If you're exploring research materials, understand
                  regulatory boundaries and consult qualified professionals where appropriate.
                </InfoWidget>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROTOCOLS */}
      <Section
        id="protocols"
        kicker="Start here"
        title="Protocols built for informed optimizers"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ProtocolCard
            tag="Recovery"
            title="Tissue signaling & resilience"
            desc="Understand pathways involved in repair, adaptation, and recovery. Learn what's supported, what's speculative, and what's risky."
          />
          <ProtocolCard
            tag="Sleep"
            title="Downshift, deepen, rebuild"
            desc="Sleep is highest-ROI biohack. We map fundamentals and where advanced tools actually fit, if at all."
          />
          <ProtocolCard
            tag="Longevity"
            title="Long-game cellular health"
            desc="Reduce noise, improve inputs, and focus on measurable markers. The goal is sustainable optimization, not shortcuts."
          />
        </div>
      </Section>

      {/* LIBRARY */}
      <Section id="library" kicker="Research library" title="Peptides, explained without the fog machine">
        <div className="surface p-8 sm:p-12">
          <div className="grid gap-6 md:grid-cols-3">
            <LibraryItem
              title="What peptides are"
              text="Short amino-acid chains that can act as signals. Different peptides, different targets, different risks."
            />
            <LibraryItem
              title="Quality & sourcing"
              text="The real differentiator. We cover testing, storage, stability, and why cheap gets expensive."
            />
            <LibraryItem
              title="How to think in protocols"
              text="Measure, change one variable, measure again. If it can't be tracked, it's mostly a story."
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button href="#newsletter" size="md">Get free welcome packet</Button>
            <Button href="#standards" variant="ghost" size="md">
              Read standards →
            </Button>
          </div>
        </div>
      </Section>

      {/* STANDARDS */}
      <Section id="standards" kicker="Trust" title="Ethics before everything">
        <div className="grid gap-4 md:grid-cols-2">
          <DataWidget title="What we do">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Explain mechanisms in plain English</li>
              <li>Separate data from influencer folklore</li>
              <li>Promote measurement and restraint</li>
              <li>Publish boundaries clearly</li>
            </ul>
          </DataWidget>

          <DataWidget title="What we don't do">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>No medical claims or guarantees</li>
              <li>No dosing instructions</li>
              <li>No miracle stack marketing</li>
              <li>No pressure tactics</li>
            </ul>
          </DataWidget>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section id="newsletter" kicker="Stay sharp" title="Protocol Notes, delivered weekly">
        <div className="surface p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-slate-600 leading-relaxed">
                Get clear research context, practical optimization fundamentals, and what matters this
                week summaries. Built for people who prefer signal over noise.
              </p>
              <div className="mt-4 text-xs text-slate-500">
                No spam. Unsubscribe anytime. Educational content only.
              </div>
            </div>

            <NewsletterForm source="home-newsletter" />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}

function TrustPill(props: { title: string; text: string }) {
  return (
    <div className="surface-sharp p-4 sm:p-5">
      <div className="text-xs sm:text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-1.5 text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-normal">{props.text}</div>
    </div>
  );
}

function LibraryItem(props: { title: string; text: string }) {
  return (
    <div className="surface-sharp p-5 sm:p-6">
      <div className="text-xs sm:text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-snug sm:leading-relaxed">{props.text}</div>
    </div>
  );
}
