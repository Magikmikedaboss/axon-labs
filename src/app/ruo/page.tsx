import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";

export default function RuoExplainedPage() {
  return (
    <SiteShell>
      <div className="wrap pt-10 sm:pt-14 pb-14">
        <div className="surface p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="kbd">RUO</span>
            <span className="text-white/40">•</span>
            <span>Research Use Only</span>
          </div>

          <h1 className="h1 mt-5">Research Use Only (RUO)</h1>
          <p className="mt-4 text-white/70 max-w-3xl leading-relaxed">
            This page explains what "Research Use Only" means at Axon Labs. It&apos;s anchor we link to
            from research focus areas, materials pages, and documentation references.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/research-materials">View research materials</Button>
            <Button href="/research-focus" variant="ghost">
              Research focus areas →
            </Button>
          </div>

          {/* Compliance banner */}
          <div className="mt-8 rounded-2xl border border-white/15 bg-black/40 p-6 text-xs text-white/65 leading-relaxed">
            <strong className="text-white/80">Compliance notice:</strong> Axon Labs publishes educational content
            and provides materials intended for <strong className="text-white/80">Research Use Only (RUO)</strong>.
            RUO materials are <strong className="text-white/80">not for human or veterinary use</strong>. We do not
            provide medical, cosmetic, diagnostic, or therapeutic advice. We do not provide usage or dosing guidance.
          </div>

          <div className="mt-10 space-y-6">
            <Section title="What RUO means (in plain language)">
              <p>
                "Research Use Only" indicates a material is supplied strictly for laboratory and research purposes.
                RUO materials are not marketed as drugs, supplements, cosmetic treatments, or therapies.
              </p>
              <p className="mt-3">
                RUO does not mean "safe" or "approved." It means a material is intended for research contexts where
                qualified parties define, control, and document how it is handled within lawful and ethical boundaries.
              </p>
            </Section>

            <Section title="What Axon Labs provides">
              <div className="grid gap-4 md:grid-cols-2">
                <Card title="Research-first context">
                  Clear definitions, pathway-level discussion, and educational framing designed to reduce confusion and
                  hype. We emphasize what is known, what is unknown, and what research language does not imply.
                </Card>
                <Card title="Documentation mindset">
                  Materials are presented with a documentation-first approach: traceability, labeling discipline, and
                  information intended to support transparency and reproducibility.
                </Card>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card title="Qualified access (RUO materials)">
                  Where offered, materials are positioned for qualified researchers and lawful research use. Access is
                  never marketed as an outcome, improvement, or personal transformation.
                </Card>
                <Card title="Clear boundaries">
                  We keep the line sharp: research context and documentation, not instructions or medical claims.
                </Card>
              </div>
            </Section>

            <Section title="What Axon Labs does not provide">
              <div className="grid gap-4 md:grid-cols-2">
                <Card title="No medical or cosmetic claims">
                  We do not claim that any material diagnoses, treats, cures, mitigates, or prevents disease, nor do we
                  claim cosmetic outcomes or appearance changes.
                </Card>
                <Card title="No usage guidance">
                  We do not publish dosing, administration, "how to use," "how to take," or application instructions of
                  any kind for humans or animals.
                </Card>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card title="No personalized recommendations">
                  We do not provide individual advice, tailored protocols for personal use, or outcome-driven guidance.
                </Card>
                <Card title="No outcome-based testimonials">
                  We do not use "results" stories or outcome testimonials as marketing. Our emphasis is documentation,
                  clarity, and research context.
                </Card>
              </div>
            </Section>

            <Section title="Documentation and traceability (what matters in RUO)">
              <p>
                In legitimate research environments, RUO work is grounded in documentation. Typical expectations include:
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Lot / batch identification and labeling discipline</li>
                <li>• Certificate of Analysis (COA) availability (when applicable)</li>
                <li>• Storage and handling notes as documentation context</li>
                <li>• Clear separation between research context and marketing claims</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-5 text-xs text-white/65 leading-relaxed">
                <strong className="text-white/80">Note:</strong> Documentation is provided for transparency and
                traceability. Researchers are responsible for verifying suitability and following applicable laws,
                institutional policies, and ethical requirements.
              </div>
            </Section>

            <Section title="How to read Axon Labs content (the lens)">
              <p>
                Axon Labs content is written to help readers understand research language without turning it into hype.
                A simple rule we follow:
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card title="Allowed: research framing">
                  "Studied in research related to X pathways."<br />
                  "Investigated for receptor binding behavior."<br />
                  "Observed in controlled laboratory settings."
                </Card>
                <Card title="Not allowed: human outcome framing">
                  "Helps with…"<br />
                  "Improves…"<br />
                  "Use this to…"<br />
                  "Take this for…"
                </Card>
              </div>
            </Section>

            <Section title="Purchasing and responsibility (if materials are offered)">
              <p>
                If RUO materials are offered through Axon Labs, purchase and access imply acknowledgment that:
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Materials are RUO and not for human or veterinary use</li>
                <li>• No instructions or advice are provided by Axon Labs</li>
                <li>• The purchaser is responsible for lawful handling and use</li>
                <li>• The purchaser is responsible for compliance with applicable policies and regulations</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white/85">Our posture is simple</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We sell clarity and documentation. We do not sell outcomes.
                </p>
              </div>
            </Section>

            {/* Bottom CTAs */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold text-white/85">Where to go next</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-3xl">
                If you&apos;re new here, start with our orientation page. If you&apos;re browsing research topics, use Research
                Focus Areas. If you&apos;re qualified and looking for materials, browse RUO catalog.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button href="/what-is-biohacking">What is Biohacking?</Button>
                <Button href="/research-focus" variant="ghost">
                  Research focus areas →
                </Button>
                <Button href="/research-materials" variant="ghost">
                  Research materials →
                </Button>
              </div>
            </div>

            {/* Final compliance */}
            <div className="rounded-2xl border border-white/15 bg-black/40 p-6 text-xs text-white/65 leading-relaxed">
              <strong className="text-white/80">Final reminder:</strong> Nothing on Axon Labs is medical advice or
              personal guidance. RUO means research use only, not for human or veterinary use.
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-7">
      <div className="text-xs uppercase tracking-[0.18em] text-white/60">RUO</div>
      <h2 className="mt-2 text-xl font-semibold">{props.title}</h2>
      <div className="mt-3 text-sm text-white/70 leading-relaxed">{props.children}</div>
    </section>
  );
}

function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-white/85">{props.title}</div>
      <div className="mt-3 text-sm text-white/70 leading-relaxed">{props.children}</div>
    </div>
  );
}
