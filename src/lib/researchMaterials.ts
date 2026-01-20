export type ResearchMaterial = {
  id: string;
  name: string;
  category: "Peptide" | "Reference" | "Lab Supply";
  status: "In stock" | "Limited" | "Preorder";
  blurb: string;
  tags: string[];
  notes: string[];
};

export const RESEARCH_MATERIALS: ResearchMaterial[] = [
  {
    id: "rm-pep-signal-001",
    name: "Signal Peptide Series A (RUO)",
    category: "Peptide",
    status: "Limited",
    blurb:
      "Research material for laboratory work involving signaling pathways. Educational context provided; no usage guidance.",
    tags: ["RUO", "cold-chain", "documentation"],
    notes: [
      "Research Use Only. Not for human or veterinary use.",
      "Storage requirements should be verified per documentation.",
      "Independent testing documentation recommended.",
    ],
  },
  {
    id: "rm-pep-repair-002",
    name: "Tissue Pathway Reference Batch (RUO)",
    category: "Peptide",
    status: "In stock",
    blurb:
      "A reference batch intended for controlled laboratory settings. Designed for researchers who prioritize documentation.",
    tags: ["RUO", "traceable", "QC-first"],
    notes: [
      "No medical claims. No instructions.",
      "Verify chain-of-custody and COA practices.",
    ],
  },
  {
    id: "rm-ref-coa-001",
    name: "COA / QC Documentation Template Pack",
    category: "Reference",
    status: "In stock",
    blurb:
      "A documentation starter pack for labs and researchers: COA checklist, receiving log, storage log, and audit notes.",
    tags: ["templates", "QC", "process"],
    notes: [
      "Good documentation reduces risk and improves reproducibility.",
    ],
  },
  {
    id: "rm-lab-supply-001",
    name: "Cold-chain handling guide (Reference)",
    category: "Reference",
    status: "Preorder",
    blurb:
      "A practical reference covering cold-chain best practices, labeling, and stability considerations for research materials.",
    tags: ["cold-chain", "labeling", "stability"],
    notes: [
      "Reference-only. Always follow manufacturer documentation.",
    ],
  },
];
