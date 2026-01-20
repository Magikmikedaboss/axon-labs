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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="kbd">Education</span>
            <span className="text-white/40">•</span>
            <span>Protocol hubs, not prescriptions</span>
          </div>

          <h1 className="h1 mt-5">Protocols</h1>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
            These are research-context hubs built around fundamentals, measurement, and restraint.
            No dosing. No medical advice. Just signal.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="#protocol-hubs">Browse hubs</Button>
            <Button href="/research-materials" variant="ghost">
              View research materials →
            </Button>
          </div>

          <div className="mt-6 text-xs text-white/55">
            Educational content only. Research materials, if offered, are for laboratory use only and not for human consumption.
          </div>
        </div>
      </div>

      <Section id="protocol-hubs" kicker="Hubs" title="Pick a lane, then go deep">
        <div className="grid gap-4 md:grid-cols-3">
          {PROTOCOLS.map((p) => (
            <div key={p.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
              <div className="text-xs text-white/60 uppercase tracking-[0.18em]">{p.tag}</div>
              <div className="mt-3 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.summary}</p>

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
            <Step title="3) Review" text="If the data doesn't move, don't invent a story. Iterate or drop it." />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/research-materials">Research materials</Button>
            <Button href="/#library" variant="ghost">
              Read the library →
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="mt-2 text-sm text-white/70 leading-relaxed">{props.text}</div>
    </div>
  );
}
