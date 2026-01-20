import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProtocolCard from "@/components/ProtocolCard";
import NewsletterForm from "@/components/NewsletterForm";
import InfoWidget from "@/components/InfoWidget";
import DataWidget from "@/components/DataWidget";
import LibraryItem from "@/components/LibraryItem";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <div className="relative min-h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="/future_laboratory-with-a-lot-of-glassware-and-shelves.jpg" 
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 wrap pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[12px] sm:text-xs text-white">
              <span className="kbd">Research-first</span>
              <span className="text-white/70">•</span>
              <span className="hidden sm:inline">Biohacking education + protocols</span>
              <span className="sm:hidden">Biohacking education</span>
            </div>

            <h1 className="h1 mt-6 text-white">{SITE.tagline}</h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed">
              Axon Labs is a research-driven guide to peptides, signaling pathways, and performance
              systems. Built for curious optimizers who want clarity, not hype.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="#protocols" size="md">Explore Protocols</Button>
              <Button href="#library" variant="ghost" size="md">Learn</Button>
            </div>

            <div className="mt-6 text-xs text-white/70 leading-relaxed">
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
          <div className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[400px] lg:max-w-[300px] lg:ml-8">
            <div className="surface p-6 rounded-xl">
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
            image="/fitness-shirtless-men-and-a-woman-posing-for-a-photo_biohacking.jpg"
          />
          <ProtocolCard
            tag="Sleep"
            title="Downshift, deepen, rebuild"
            desc="Sleep is highest-ROI biohack. We map fundamentals and where advanced tools actually fit, if at all."
            image="/young-bodybuilder-sitting-at-gym-showing-fitness.jpg"
          />
          <ProtocolCard
            tag="Longevity"
            title="Long-game cellular health"
            desc="Reduce noise, improve inputs, and focus on measurable markers. The goal is sustainable optimization, not shortcuts."
            image="/lab-research-woman-with-blue-eyes-looking-at-camera.jpg"
          />
        </div>
      </Section>

      {/* LIBRARY */}
      <Section id="library" kicker="Research library" title="Peptides, explained without the fog machine">
        <div className="grid gap-6 md:grid-cols-3">
          <LibraryItem
            title="What peptides are"
            text="Short amino-acid chains that can act as signals. Different peptides, different targets, different risks."
            image="/laboratory-equipment-and-chemicals-arranged-on-a-table.jpg"
          />
          <LibraryItem
            title="Quality & sourcing"
            text="The real differentiator. We cover testing, storage, stability, and why cheap gets expensive."
            image="/research-lab-use-beakers-flasks-and-test-tubes-to-conduct-test.jpg"
          />
          <LibraryItem
            title="How to think in protocols"
            text="Measure, change one variable, measure again. If it can't be tracked, it's mostly a story."
            image="/biohacking-human-augmented-reality-with-red-and-blue-lights-on-back.jpg"
          />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href="#newsletter" size="md">Get free welcome packet</Button>
          <Button href="#standards" variant="ghost" size="md">
            Read standards →
          </Button>
        </div>
      </Section>

      {/* STANDARDS */}
      <Section id="standards" kicker="Trust" title="Ethics before everything">
        <div className="grid gap-4 md:grid-cols-2">
          <DataWidget 
            title="What we do"
            image="/laboratory-equipment-and-chemicals-arranged-on-a-table.jpg"
          >
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Explain mechanisms in plain English</li>
              <li>Separate data from influencer folklore</li>
              <li>Promote measurement and restraint</li>
              <li>Publish boundaries clearly</li>
            </ul>
          </DataWidget>

          <DataWidget 
            title="What we don't do"
            image="/research-lab-use-beakers-flasks-and-test-tubes-to-conduct-test.jpg"
          >
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
        <div className="relative surface p-8 sm:p-12 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/biohacking-human-augmented-reality-with-red-and-blue-lights-on-back.jpg"
              alt="Newsletter background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10">
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
        </div>
      </Section>
    </SiteShell>
  );
}

function TrustPill(props: { title: string; text: string }) {
  return (
    <div className="surface-sharp p-4 sm:p-5 rounded-xl">
      <div className="text-xs sm:text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-1.5 text-xs text-slate-600 leading-snug">{props.text}</div>
    </div>
  );
}
