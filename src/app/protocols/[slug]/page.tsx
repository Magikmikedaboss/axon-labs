import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";
import { PROTOCOLS } from "@/lib/protocols";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROTOCOLS.map((p) => ({ slug: p.slug }));
}

export default function ProtocolHubPage({ params }: { params: { slug: string } }) {
  const p = PROTOCOLS.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <SiteShell>
      <div className="wrap pt-10 sm:pt-14 pb-14">
        <div className="surface p-7 sm:p-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">{p.tag}</div>
          <h1 className="h1 mt-3">{p.title}</h1>
          <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">{p.summary}</p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/protocols" variant="ghost">
              ← All protocols
            </Button>
            <Button href="/research-materials">Research materials</Button>
            <Button href="/#newsletter" variant="ghost">
              Get Protocol Notes
            </Button>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Educational content only. This hub is informational and not medical advice. No dosing guidance is provided.
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Panel title="What this hub covers">
            <ul className="space-y-2 text-sm text-slate-600">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </Panel>

          <Panel title="Risk notes (read first)">
            <ul className="space-y-2 text-sm text-slate-600">
              {p.riskNotes.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </Panel>

          <Panel title="Quick links">
            <div className="flex flex-col gap-2 text-sm">
              {p.topics.map((t) => (
                <a key={t.href} href={t.href} className="border border-slate-300 bg-slate-50 px-4 py-3 hover:bg-slate-100 transition">
                  {t.label}
                </a>
              ))}
            </div>
          </Panel>
        </div>

        {/* Educational sections (placeholder content you can expand later) */}
        <div className="mt-6 space-y-4">
          <ArticleSection
            id="what-are-peptides"
            title="What peptides are (simple definition)"
            text="Peptides are short amino-acid chains that can participate in signaling processes. Different peptides interact with different pathways, and context matters more than marketing."
          />
          <ArticleSection
            id="quality"
            title="Quality & sourcing"
            text="In gray markets, quality varies dramatically. Documentation, handling, cold-chain practices, and independent testing are difference between useful research material and expensive uncertainty."
          />
          <ArticleSection
            id="measure"
            title="Measurement checklist"
            text="Pick a small set of metrics you can actually track. Establish a baseline. Change one variable. Re-check. If results aren't measurable, treat it as speculation."
          />
          <ArticleSection
            id="circadian"
            title="Circadian basics (sleep hub)"
            text='Light timing and consistency dominate outcomes. Most "advanced tools" work poorly when foundational inputs are unstable.'
          />
          <ArticleSection
            id="environment"
            title="Sleep environment"
            text="Temperature, noise, light, and bedtime routines are boring, but they're levers that keep working."
          />
          <ArticleSection
            id="tracking"
            title="Tracking & metrics"
            text="Track enough to learn, not enough to spiral. Consistency beats perfect measurement."
          />
          <ArticleSection
            id="baselines"
            title="Baselines & labs (longevity hub)"
            text="If you're changing inputs, you need baselines. Without them, you're reading tea leaves."
          />
          <ArticleSection
            id="lifestyle"
            title="Lifestyle levers"
            text="Longevity isn't a stack. It's a system: movement, nutrition, stress, sleep, and consistent checks."
          />
          <ArticleSection
            id="experiments"
            title="Experiment framework"
            text="Define a hypothesis, a timeframe, a measurement plan, and a stop condition. Anything else is vibe-based science."
          />
        </div>
      </div>
    </SiteShell>
  );
}

function Panel(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-sharp p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-3">{props.children}</div>
    </div>
  );
}

function ArticleSection(props: { id: string; title: string; text: string }) {
  return (
    <section id={props.id} className="surface p-7 sm:p-10">
      <div className="text-lg font-semibold text-slate-900">{props.title}</div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">{props.text}</p>
    </section>
  );
}
