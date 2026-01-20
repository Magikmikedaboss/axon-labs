import SiteShell from "@/components/SiteShell";
import Section from "@/components/Section";
import Button from "@/components/Button";
import NewsletterForm from "@/components/NewsletterForm";
import { PROTOCOLS } from "@/lib/protocols";

export default function ProtocolsPage() {
  return (
    <SiteShell>
      <div className="wrap pt-10 sm:pt-14 pb-6">
        <div className="surface p-7 sm:p-10">
          <div className="inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            <span className="kbd">Education</span>
            <span className="text-slate-400">•</span>
            <span>Protocol hubs, not prescriptions</span>
          </div>

          <h1 className="h1 mt-5">Protocols</h1>
          <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed">
            These are research-context hubs built around fundamentals, measurement, and restraint.
            No dosing. No medical advice. Just signal.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="#protocol-hubs">Browse hubs</Button>
            <Button href="/research-materials" variant="ghost">
              View research materials →
            </Button>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Educational content only. Research materials, if offered, are for laboratory use only and not for human consumption.
          </div>
        </div>
      </div>

      <Section id="protocol-hubs" kicker="Hubs" title="Pick a lane, then go deep">
        <div className="grid gap-4 md:grid-cols-3">
          {PROTOCOLS.map((p) => (
            <div key={p.slug} className="surface-sharp p-6 hover:bg-slate-50 transition-colors duration-200">
              <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">{p.tag}</div>
              <div className="mt-3 text-lg font-semibold text-slate-900">{p.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.summary}</p>

              <div className="mt-5 flex gap-2">
                <Button href={`/protocols/${p.slug}`} className="px-4 py-2">
                  Open hub
                </Button>
                <Button href="/#newsletter" variant="ghost" className="px-4 py-2">
                  Get notes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Framework" title="How to use these hubs">
        <div className="surface p-7 sm:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <Step title="1) Baseline" text="Decide what you're measuring (sleep, training, labs, symptoms) before changing inputs." />
            <Step title="2) One variable" text="Change a single lever. Give it time. Avoid stacks that turn results into guesswork." />
            <Step title="3) Review" text="If data doesn't move, don't invent a story. Iterate or drop it." />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/research-materials">Research materials</Button>
            <Button href="/#library" variant="ghost">
              Read library →
            </Button>
          </div>
        </div>
      </Section>

      <Section kicker="Updates" title="Get Protocol Notes">
        <div className="wrap">
          <NewsletterForm source="protocols-page" />
        </div>
      </Section>
    </SiteShell>
  );
}

function Step(props: { title: string; text: string }) {
  return (
    <div className="surface-sharp p-6">
      <div className="text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{props.text}</div>
    </div>
  );
}
