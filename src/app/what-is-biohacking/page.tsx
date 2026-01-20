import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";

function Pill(props: { text: string }) {
  return (
    <div className="border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100 transition">
      {props.text}
    </div>
  );
}

export default function WhatIsBiohackingPage() {
  return (
    <SiteShell>
      {/* Hero Section with Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/biohacking-futuristic-digital-human-hand-reaching-out-with-transparent-body.jpg"
            alt="Biohacking concept"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/80" />
        </div>
        
        <div className="relative z-10 wrap pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 border border-slate-300/20 bg-slate-900/40 backdrop-blur px-4 py-2 text-xs text-slate-200 mb-6">
            <span className="kbd">Orientation</span>
            <span className="text-slate-400">•</span>
            <span>Research-first overview</span>
          </div>

          <h1 className="h1 text-white mb-6">What Is Biohacking?</h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
            A research-first explanation without hype. This page is the starting point for understanding
            how Axon Labs thinks about optimization, protocols, and research context.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/protocols" className="w-full sm:w-auto">Explore protocols</Button>
            <Button href="/research-materials" variant="ghost" className="w-full sm:w-auto">
              View research materials →
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="wrap py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Short Answer - with side image */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="h2 mb-4">The Short Answer</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Biohacking is the practice of <strong className="text-slate-900">intentionally improving how the body functions</strong>{" "}
                by understanding signals, inputs, and feedback loops.
              </p>
              <p className="text-slate-600 leading-relaxed">
                At Axon Labs, biohacking is not about shortcuts, extremes, or chasing outcomes. It's about
                learning how the system works, changing one variable at a time, measuring what actually
                changes, and keeping curiosity inside clear boundaries.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-300">
              <Image
                src="/lab-research-woman-with-blue-eyes-looking-at-camera.jpg"
                alt="Research laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* What Biohacking Is Not */}
          <Section title="What Biohacking Is Not">
            <p className="text-slate-600 leading-relaxed mb-4">
              The word has been stretched thin online, so let's reset it.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                "Not a supplement stack",
                "Not a replacement for medical care",
                "Not a guarantee of results",
                "Not a personality",
                "Not a race to extremes"
              ].map((item, i) => (
                <div key={i} className="border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  • {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              If something promises transformation without discipline or data, it's not biohacking.
              It's marketing.
            </p>
          </Section>

          {/* Core Idea - with visual accent */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-300">
            <div className="absolute inset-0">
              <Image
                src="/biohacking-human-augmented-reality-with-red-and-blue-lights-on-back.jpg"
                alt="Augmented reality concept"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 p-8 sm:p-12">
              <h2 className="h2 mb-6">The Core Idea: Signal Over Substance</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                The human body adapts based on <strong className="text-slate-900">signals</strong>, not products.
              </p>
              
              <div className="grid gap-3 sm:grid-cols-2 mb-6">
                <Pill text="Sleep and circadian rhythm" />
                <Pill text="Physical stress and recovery" />
                <Pill text="Nutrition and energy availability" />
                <Pill text="Environmental inputs" />
                <Pill text="Molecular communication inside cells" />
              </div>
              
              <div className="border border-slate-300 bg-slate-900/40 backdrop-blur p-6">
                <p className="text-slate-200 leading-relaxed">
                  Biohacking asks: <strong className="text-white">What signals am I sending, and how does the system respond over time?</strong>
                  <br /><br />
                  Not: what can I take to feel something right now?
                </p>
              </div>
            </div>
          </div>

          {/* Levels of Biohacking */}
          <Section title="Levels of Biohacking (Context Matters)">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-slate-300 bg-gradient-to-br from-slate-50 to-white p-6">
                <div className="text-sm font-semibold text-slate-900 mb-3">Foundational Biohacking</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  This is where results usually come from:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Consistent sleep timing</li>
                  <li>• Light exposure management</li>
                  <li>• Training load control</li>
                  <li>• Nutrition adequacy</li>
                  <li>• Stress regulation</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500 italic">
                  These are boring. They work.
                </p>
              </div>

              <div className="border border-slate-300 bg-gradient-to-br from-slate-50 to-white p-6">
                <div className="text-sm font-semibold text-slate-900 mb-3">Advanced Biohacking</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  This includes:
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Detailed self-tracking</li>
                  <li>• Bloodwork interpretation (with qualified guidance)</li>
                  <li>• Environmental optimization</li>
                  <li>• Research compounds discussed in laboratory contexts</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500 italic">
                  Advanced tools only make sense when the foundation is stable.
                </p>
              </div>
            </div>
          </Section>

          {/* Where Peptides Fit */}
          <Section title="Where Peptides Fit (Research Context Only)">
            <p className="text-slate-600 leading-relaxed mb-4">
              Peptides are short chains of amino acids studied in research for their role in{" "}
              <strong className="text-slate-900">cellular signaling</strong>.
            </p>
            <div className="border border-slate-300 bg-slate-50 p-6 mb-4">
              <div className="text-sm font-semibold text-slate-900 mb-3">Important Distinctions:</div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Studied does not mean proven</li>
                <li>• Mechanism does not mean outcome</li>
                <li>• Interest does not equal necessity</li>
              </ul>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Axon Labs discusses peptides strictly in a research and educational context. We do not
              provide medical advice, usage guidance, or outcome claims.
            </p>
          </Section>

          {/* Why Restraint Matters */}
          <Section title="Why Restraint Matters">
            <p className="text-slate-600 leading-relaxed mb-4">
              The biggest mistake in biohacking is stacking changes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              When multiple variables change, results can't be attributed, side effects become ambiguous,
              and learning stops.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Real biohacking values fewer inputs, longer observation, and clear stop conditions.
              <strong className="text-slate-900"> Stopping is a valid outcome.</strong>
            </p>
          </Section>

          {/* How Axon Labs Approaches Biohacking */}
          <Section title="How Axon Labs Approaches Biohacking">
            <p className="text-slate-600 leading-relaxed mb-6">
              Axon Labs exists to reduce confusion, clarify terminology, separate research from hype,
              encourage disciplined thinking, and preserve ethical and legal boundaries.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-slate-300 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900 mb-3">We Publish</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Context</li>
                  <li>• Definitions</li>
                  <li>• Standards</li>
                  <li>• Frameworks</li>
                </ul>
              </div>
              <div className="border border-slate-300 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900 mb-3">We Do Not Publish</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Medical advice</li>
                  <li>• Usage instructions</li>
                  <li>• Dosing guidance</li>
                  <li>• Outcome promises</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Who This Platform Is For */}
          <Section title="Who This Platform Is For">
            <p className="text-slate-600 leading-relaxed mb-4">
              Axon Labs is for people who want to understand before acting, value long-term health over
              short-term sensation, respect uncertainty, and are comfortable saying "not enough data yet."
            </p>
            <p className="text-slate-600 leading-relaxed">
              It is not for people seeking miracles.
            </p>
          </Section>

          {/* Compliance Note */}
          <div className="border border-slate-300 bg-slate-50 p-6 text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Compliance note:</strong> All content on Axon Labs is
            educational only. Nothing on this site is intended as medical advice or guidance for human use.
          </div>

          {/* Final CTA */}
          <div className="text-center pt-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/protocols" className="w-full sm:w-auto">Explore protocols</Button>
              <Button href="/#newsletter" variant="ghost" className="w-full sm:w-auto">
                Get Protocol Notes →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
