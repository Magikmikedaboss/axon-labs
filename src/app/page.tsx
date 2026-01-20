import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProtocolCard from "@/components/ProtocolCard";
import NewsletterForm from "@/components/NewsletterForm";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
        <div className="wrap pt-14 sm:pt-20 pb-10 sm:pb-14">
          <div className="surface p-7 sm:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="kbd">Research-first</span>
                  <span className="text-white/40">•</span>
                  <span>Biohacking education + protocols</span>
                </div>

                <h1 className="h1 mt-5">{SITE.tagline}</h1>
                <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
                  Axon Labs is a research-driven guide to peptides, signaling pathways, and performance
                  systems. Built for curious optimizers who want clarity, not hype.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button href="#protocols" className="sm:w-auto">Explore Protocols</Button>
                  <Button href="#library" variant="ghost" className="sm:w-auto">Learn the science</Button>
                </div>

                <div className="mt-6 text-xs text-white/55">
                  Educational content only. No medical advice. Research materials, if offered, are for
                  laboratory use only.
                </div>

                {/* trust strip */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <TrustPill title="Data over anecdotes" text="Clear explanations with sources." />
                  <TrustPill title="No miracle claims" text="We avoid hype and hard-sell." />
                  <TrustPill title="Transparency first" text="Standards, testing, boundaries." />
                </div>
              </div>

              {/* Right column: conversion box */}
              <div className="md:w-[360px]">
                <NewsletterForm source="home-hero" compact />

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">Note:</span> Axon Labs is an educational
                  platform. If you're exploring research materials, understand regulatory boundaries and
                  consult qualified professionals where appropriate.
                </div>
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
            desc="Understand pathways involved in repair, adaptation, and recovery. Learn what&apos;s supported, what&apos;s speculative, and what&apos;s risky."
          />
          <ProtocolCard
            tag="Sleep"
            title="Downshift, deepen, rebuild"
            desc={`Sleep is the highest-ROI biohack. We map the fundamentals and where "advanced tools" actually fit, if at all.`}
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
        <div className="surface p-7 sm:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <LibraryItem
              title="What peptides are"
              text="Short amino-acid chains that can act as signals. Different peptides, different targets, different risks."
            />
            <LibraryItem
              title="Quality & sourcing"
              text={`The real differentiator. We cover testing, storage, stability, and why "cheap" gets expensive.`}
            />
            <LibraryItem
              title="How to think in protocols"
              text="Measure, change one variable, measure again. If it can&apos;t be tracked, it&apos;s mostly a story."
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="#newsletter">Get the free welcome packet</Button>
            <Button href="#standards" variant="ghost">
              Read standards →
            </Button>
          </div>
        </div>
      </Section>

      {/* STANDARDS */}
      <Section id="standards" kicker="Trust" title="Ethics before everything">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-lg font-semibold">What we do</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Explain mechanisms in plain English</li>
              <li>• Separate data from influencer folklore</li>
              <li>• Promote measurement and restraint</li>
              <li>• Publish boundaries clearly</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-lg font-semibold">What we don't do</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• No medical claims or guarantees</li>
              <li>• No dosing instructions</li>
              <li>• No "miracle stack" marketing</li>
              <li>• No pressure tactics</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section id="newsletter" kicker="Stay sharp" title="Protocol Notes, delivered weekly">
        <div className="surface p-7 sm:p-10">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-white/70 leading-relaxed">
                Get clear research context, practical optimization fundamentals, and "what matters this
                week" summaries. Built for people who prefer signal over noise.
              </p>
              <div className="mt-4 text-xs text-white/55">
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="mt-1 text-xs text-white/65">{props.text}</div>
    </div>
  );
}

function LibraryItem(props: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed">{props.text}</div>
    </div>
  );
}
