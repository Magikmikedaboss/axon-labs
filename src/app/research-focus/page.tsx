import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";
import RuoAnchor from "@/components/RuoAnchor";

export default function ResearchFocusPage() {
  return (
    <SiteShell>
      <div className="wrap pt-10 sm:pt-14 pb-14">
        <div className="surface p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            <span className="kbd">Research</span>
            <span className="text-slate-400">•</span>
            <span>Focus areas & context</span>
          </div>

          <h1 className="h1 mt-5">Research Focus Areas</h1>
          <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
            Axon Labs publishes research-first context around biohacking-adjacent topics. These focus
            areas are educational frameworks, not instructions, recommendations, or claims.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/research-materials">Explore research materials</Button>
            <Button href="/what-is-biohacking" variant="ghost">
              Start with biohacking →
            </Button>
          </div>

          <div className="mt-8 border border-slate-300 bg-slate-50 p-6 text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Compliance note:</strong> All content on Axon Labs is
            educational only. We do not provide medical, cosmetic, or therapeutic advice. Any materials
            referenced are intended for <strong className="text-slate-900">Research Use Only (RUO)</strong>{" "}
            and are not for human or veterinary use.
          </div>

          {/* ===== Focus Sections ===== */}
          <div className="mt-10 space-y-6">
            {/* Aesthetic Biology Section */}
            <section className="border border-slate-300 bg-slate-50 p-4 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">
                  Focus Area
                </div>
                <RuoAnchor />
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">Aesthetic Biology</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
                Research Context for Skin, Hair, and Cellular Appearance
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Aesthetics are often treated as superficial. In biology, they are anything but.
                </p>
                <p>
                  Skin texture, hair characteristics, pigmentation, and visible aging are observable outputs
                  of cellular signaling, structural proteins, and environmental stress responses. Because
                  these outputs are measurable, they are frequently studied in laboratory research.
                </p>
                <p>
                  At Axon Labs, aesthetic biology is explored strictly as a <strong>research domain</strong>,
                  not as a cosmetic or therapeutic pursuit.
                </p>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <Card title='What researchers mean by "aesthetic biology"'>
                  In research settings, aesthetic biology refers to study of pathways that influence visible
                  characteristics, including:
                  <ul className="mt-3 space-y-2">
                    <li>• Structural protein behavior (e.g., collagen and elastin)</li>
                    <li>• Cellular turnover and regeneration signaling</li>
                    <li>• Pigmentation and UV-response pathways</li>
                    <li>• Hair follicle growth cycles and signaling</li>
                    <li>• Barrier function and hydration mechanisms</li>
                    <li>• Cellular stress and oxidative response</li>
                  </ul>
                  <p className="mt-3">
                    These processes are studied to understand <strong>how appearance emerges from biology</strong>,
                    not to promise or prescribe outcomes.
                  </p>
                </Card>

                <Card title="Why appearance is a useful research signal">
                  From a research perspective, aesthetic markers are valuable because they are:
                  <ul className="mt-3 space-y-2">
                    <li>• <strong>Observable</strong> — measurable visually or instrumentally</li>
                    <li>• <strong>Responsive</strong> — influenced by environment, stress, and signaling</li>
                    <li>• <strong>Multifactorial</strong> — shaped by interacting systems</li>
                  </ul>
                  <p className="mt-3">
                    This makes aesthetic biology a practical domain for studying signal quality, timing, and interaction
                    in controlled environments.
                  </p>
                </Card>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card title="Peptides in aesthetic research (context only)">
                  Certain peptides are investigated in research for how they interact with pathways related to:
                  <ul className="mt-3 space-y-2">
                    <li>• Collagen synthesis and structural signaling</li>
                    <li>• Pigmentation regulation</li>
                    <li>• Hair follicle signaling cycles</li>
                    <li>• Barrier integrity and hydration mechanisms</li>
                    <li>• Cellular stress response modulation</li>
                  </ul>
                  <div className="mt-4 border border-slate-300 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">Important distinctions:</strong>
                    <ul className="mt-2 space-y-2">
                      <li>• Studied does not mean proven</li>
                      <li>• Mechanism does not equal outcome</li>
                      <li>• Research context does not imply personal use</li>
                    </ul>
                  </div>
                </Card>

                <Card title="Common misconceptions">
                  Aesthetic research is often misunderstood online. Common errors include:
                  <ul className="mt-3 space-y-2">
                    <li>• Assuming pathway interaction guarantees visible change</li>
                    <li>• Treating research compounds as cosmetic products</li>
                    <li>• Confusing short-term surface changes with long-term adaptation</li>
                    <li>• Ignoring environment, nutrition, and stress as major variables</li>
                  </ul>
                  <p className="mt-3">
                    Responsible research separates <strong>observation</strong> from <strong>application</strong>.
                  </p>
                </Card>
              </div>

              <div className="mt-6 border border-slate-300 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">Axon Labs&apos; position</div>
                <div className="mt-3 grid gap-4 md:grid-cols-2 text-sm text-slate-600">
                  <div className="border border-slate-300 bg-slate-50 p-5">
                    <div className="font-semibold text-slate-900">We focus on</div>
                    <ul className="mt-3 space-y-2">
                      <li>• Clear definitions</li>
                      <li>• Research boundaries</li>
                      <li>• Documentation and traceability</li>
                      <li>• Separating science from marketing language</li>
                    </ul>
                  </div>
                  <div className="border border-slate-300 bg-slate-50 p-5">
                    <div className="font-semibold text-slate-900">We do not</div>
                    <ul className="mt-3 space-y-2">
                      <li>• Promote cosmetic outcomes</li>
                      <li>• Provide usage guidance</li>
                      <li>• Make appearance-based claims</li>
                      <li>• Offer medical or cosmetic advice</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button href="/research-materials">Browse RUO materials</Button>
                <Button href="/what-is-biohacking" variant="ghost">
                  Read "What is Biohacking?" →
                </Button>
              </div>
            </section>

            {/* Placeholder for future sections (optional) */}
            <section className="border border-slate-300 bg-slate-50 p-4 sm:p-7">
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">Coming next</div>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">Recovery & Tissue Signaling</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
                Explore how cellular repair mechanisms, tissue adaptation pathways, and recovery signaling are studied in laboratory research. We&apos;ll cover what&apos;s known, what&apos;s speculative, and how to distinguish between data and marketing claims.
              </p>
            </section>

            <section className="border border-slate-300 bg-slate-50 p-4 sm:p-7">
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">Coming next</div>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">Cellular Stress & Longevity Research</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
                Understand how researchers study cellular stress responses, aging pathways, and longevity markers. We&apos;ll examine the science behind popular claims and provide clear, research-based context on what&apos;s actually measurable and what remains theoretical.
              </p>
            </section>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-slate-300 bg-slate-50 p-4 sm:p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-3 text-sm text-slate-600 leading-relaxed">{props.children}</div>
    </div>
  );
}
