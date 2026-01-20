export type Protocol = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  bullets: string[];
  riskNotes: string[];
  topics: Array<{ label: string; href: string }>;
};

export const PROTOCOLS: Protocol[] = [
  {
    slug: "recovery-resilience",
    tag: "Recovery",
    title: "Tissue signaling & resilience",
    summary:
      "A research-context hub for recovery pathways, adaptation, and how to think about repair without getting hypnotized by hype.",
    bullets: [
      "Recovery fundamentals: sleep, protein, load management",
      'What "signaling" means and why context matters',
      "How to evaluate research quality and marketing claims",
      "What to measure before changing anything",
    ],
    riskNotes: [
      "Avoid stacking multiple variables at once.",
      'Be cautious with anything marketed as a "fast fix".',
      "If you can't verify quality/testing, assume risk.",
    ],
    topics: [
      { label: "What are peptides?", href: "#what-are-peptides" },
      { label: "Quality & sourcing", href: "#quality" },
      { label: "Measurement checklist", href: "#measure" },
    ],
  },
  {
    slug: "sleep-downshift",
    tag: "Sleep",
    title: "Downshift, deepen, rebuild",
    summary:
      "Sleep is the highest-ROI optimization lever. This hub prioritizes foundational inputs and explains where advanced tools fit, if at all.",
    bullets: [
      "Circadian basics: light timing, consistency, environment",
      "Recovery architecture: why deep sleep matters",
      "Common pitfalls: stimulants, screens, late training",
      "Measurement without obsession",
    ],
    riskNotes: [
      "Don't treat sleep like an arms race.",
      "One change at a time, minimum 7–14 days.",
    ],
    topics: [
      { label: "Circadian basics", href: "#circadian" },
      { label: "Sleep environment", href: "#environment" },
      { label: "Tracking & metrics", href: "#tracking" },
    ],
  },
  {
    slug: "longevity-long-game",
    tag: "Longevity",
    title: "Long-game cellular health",
    summary:
      "Sustainable optimization focused on measurable markers and boring consistency. Less wizardry, more signal.",
    bullets: [
      "Inputs first: movement, nutrition, stress, sleep",
      "Bloodwork basics and why baselines matter",
      "Separating promising research from wishful thinking",
      "A framework for safe experimentation",
    ],
    riskNotes: [
      'Beware "anti-aging" marketing that promises outcomes.',
      "If it can't be measured, treat it as a hypothesis.",
    ],
    topics: [
      { label: "Baselines & labs", href: "#baselines" },
      { label: "Lifestyle levers", href: "#lifestyle" },
      { label: "Experiment framework", href: "#experiments" },
    ],
  },
];
