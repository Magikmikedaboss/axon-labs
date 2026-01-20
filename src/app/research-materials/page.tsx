import { Suspense } from "react";
import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ResearchMaterialsCatalog from "@/components/ResearchMaterialsCatalog";
import { RESEARCH_MATERIALS } from "@/lib/researchMaterials";
import RuoAnchor from "@/components/RuoAnchor";

export default function ResearchMaterialsPage() {
  return (
    <SiteShell>
      <div className="wrap pt-10 sm:pt-14 pb-6">
        <div className="surface p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            <span className="kbd">RUO</span>
            <span className="text-slate-400">•</span>
            <span>Research materials catalog</span>
          </div>

          <h1 className="h1 mt-5">Research Materials</h1>
          <div className="mt-3">
            <RuoAnchor />
          </div>
          <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
            Documentation-first catalog for qualified researchers. No medical claims, no usage instructions,
            no dosing guidance. Just traceability, context, and standards.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="#catalog">Browse catalog</Button>
            <Button href="/protocols" variant="ghost">
              View protocol hubs →
            </Button>
          </div>

          <div className="mt-6 border border-slate-200 bg-slate-50 p-5 text-xs text-slate-600 leading-relaxed">
            <div className="font-semibold text-slate-900">Compliance notice</div>
            <div className="mt-2">
              Research Use Only (RUO). Not for human or veterinary use. Axon Labs provides educational context and
              documentation standards, not medical guidance.
            </div>
          </div>
        </div>
      </div>

      <Section id="catalog" kicker="Catalog" title="Find what you need, fast">
        <Suspense fallback={<div className="text-slate-600">Loading catalog...</div>}>
          <ResearchMaterialsCatalog items={RESEARCH_MATERIALS} />
        </Suspense>
      </Section>

      <Section kicker="Standards" title="Documentation is the product">
        <div className="surface p-7 sm:p-10">
          <div className="grid gap-4 md:grid-cols-3">
            <StdCard title="Traceability" text="Prefer materials with clear batch IDs, chain-of-custody practices, and consistent labeling." />
            <StdCard title="Testing mindset" text="Independent testing and documented QC practices reduce uncertainty and improve reproducibility." />
            <StdCard title="Cold-chain respect" text="If cold-chain handling is required, treat it as mandatory, not optional." />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/protocols">Start with protocols</Button>
            <Button href="/#library" variant="ghost">
              Read library →
            </Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}

function StdCard(props: { title: string; text: string }) {
  return (
    <div className="surface-sharp p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{props.text}</div>
    </div>
  );
}
