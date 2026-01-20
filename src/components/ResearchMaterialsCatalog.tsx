"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import NewsletterForm from "./NewsletterForm";
import type { ResearchMaterial } from "@/lib/researchMaterials";

type Props = {
  items: ResearchMaterial[];
};

const CATEGORIES: Array<ResearchMaterial["category"] | "All"> = [
  "All",
  "Peptide",
  "Reference",
  "Lab Supply",
];
const STATUSES: Array<ResearchMaterial["status"] | "All"> = ["All", "In stock", "Limited", "Preorder"];

type SortKey = "availability" | "name_asc" | "category" | "status";

const SORTS: Array<{ key: SortKey; label: string }> = [
  { key: "availability", label: "Availability (In stock first)" },
  { key: "name_asc", label: "Name (A–Z)" },
  { key: "category", label: "Category" },
  { key: "status", label: "Status" },
];

function normalizeParam(v: string | null | undefined) {
  if (!v) return "";
  return decodeURIComponent(String(v)).trim();
}

function isOneOf<T extends string>(value: string, options: readonly T[]) {
  return options.includes(value as T);
}

export default function ResearchMaterialsCatalog({ items }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const allTags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => i.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  // --- initial values from URL ---
  const initialCategory = useMemo(() => {
    const v = normalizeParam(sp.get("cat"));
    return isOneOf(v, CATEGORIES) ? (v as (typeof CATEGORIES)[number]) : "All";
  }, [sp]);

  const initialStatus = useMemo(() => {
    const v = normalizeParam(sp.get("status"));
    return isOneOf(v, STATUSES) ? (v as (typeof STATUSES)[number]) : "All";
  }, [sp]);

  const initialTag = useMemo(() => {
    const v = normalizeParam(sp.get("tag"));
    if (!v) return "All";
    return v === "All" || allTags.includes(v) ? v : "All";
  }, [sp, allTags]);

  const initialQ = useMemo(() => normalizeParam(sp.get("q")), [sp]);

  const initialSort = useMemo(() => {
    const v = normalizeParam(sp.get("sort"));
    return SORTS.some((s) => s.key === v) ? (v as SortKey) : "availability";
  }, [sp]);

  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>(initialCategory);
  const [status, setStatus] = useState<(typeof STATUSES)[number]>(initialStatus);
  const [tag, setTag] = useState<string>(initialTag);
  const [q, setQ] = useState<string>(initialQ);
  const [sort, setSort] = useState<SortKey>(initialSort);

  // Prevent URL-writing loop on first mount
  const didInit = useRef(false);

  // If URL changes via back/forward nav, update state
  useEffect(() => {
    if (!didInit.current) return;

    const nextCategory = (() => {
      const v = normalizeParam(sp.get("cat"));
      return isOneOf(v, CATEGORIES) ? (v as (typeof CATEGORIES)[number]) : "All";
    })();

    const nextStatus = (() => {
      const v = normalizeParam(sp.get("status"));
      return isOneOf(v, STATUSES) ? (v as (typeof STATUSES)[number]) : "All";
    })();

    const nextTag = (() => {
      const v = normalizeParam(sp.get("tag"));
      if (!v) return "All";
      return v === "All" || allTags.includes(v) ? v : "All";
    })();

    const nextQ = normalizeParam(sp.get("q"));

    const nextSort = (() => {
      const v = normalizeParam(sp.get("sort"));
      return SORTS.some((s) => s.key === v) ? (v as SortKey) : "availability";
    })();

    setCategory(nextCategory);
    setStatus(nextStatus);
    setTag(nextTag);
    setQ(nextQ);
    setSort(nextSort);
  }, [sp, allTags]);

  // Mark init after first paint
  useEffect(() => {
    didInit.current = true;
  }, []);

  // Debounced URL sync (so typing in search doesn't spam replace())
  const debounceRef = useRef<number | null>(null);

  function writeUrl(next: {
    cat: string;
    status: string;
    tag: string;
    q: string;
    sort: string;
  }) {
    const params = new URLSearchParams();

    if (next.cat && next.cat !== "All") params.set("cat", next.cat);
    if (next.status && next.status !== "All") params.set("status", next.status);
    if (next.tag && next.tag !== "All") params.set("tag", next.tag);
    if (next.q) params.set("q", next.q);
    if (next.sort && next.sort !== "availability") params.set("sort", next.sort);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  useEffect(() => {
    if (!didInit.current) return;

    // simple debounce for q
    if (debounceRef.current) window.clearTimeout(debounceRef.current);

    debounceRef.current = window.setTimeout(() => {
      writeUrl({
        cat: category,
        status,
        tag,
        q: q.trim(),
        sort,
      });
    }, 180);

    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, status, tag, q, sort]);

  const filteredAndSorted = useMemo(() => {
    const query = q.trim().toLowerCase();

    const filtered = items.filter((m) => {
      if (category !== "All" && m.category !== category) return false;
      if (status !== "All" && m.status !== status) return false;
      if (tag !== "All" && !m.tags.includes(tag)) return false;

      if (query) {
        const hay = [
          m.name,
          m.category,
          m.status,
          m.blurb,
          m.tags.join(" "),
          m.notes.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    const statusRank: Record<ResearchMaterial["status"], number> = {
      "In stock": 0,
      Limited: 1,
      Preorder: 2,
    };

    const categoryRank: Record<ResearchMaterial["category"], number> = {
      Peptide: 0,
      Reference: 1,
      "Lab Supply": 2,
    };

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "availability") {
        const r = statusRank[a.status] - statusRank[b.status];
        if (r !== 0) return r;
        return a.name.localeCompare(b.name);
      }

      if (sort === "name_asc") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "category") {
        const r = categoryRank[a.category] - categoryRank[b.category];
        if (r !== 0) return r;
        return a.name.localeCompare(b.name);
      }

      if (sort === "status") {
        const r = statusRank[a.status] - statusRank[b.status];
        if (r !== 0) return r;
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

    return sorted;
  }, [items, category, status, tag, q, sort]);

  function clear() {
    setCategory("All");
    setStatus("All");
    setTag("All");
    setQ("");
    setSort("availability");
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="surface-sharp p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900">Filters</div>
            <div className="mt-1 text-xs text-slate-600">
              Documentation-first catalog. No medical claims. No usage instructions.
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="border border-slate-300 bg-slate-50 px-3 py-1">
              Showing{" "}
              <span className="font-semibold text-slate-900">{filteredAndSorted.length}</span> of{" "}
              <span className="font-semibold text-slate-900">{items.length}</span>
            </span>
            <button
              onClick={clear}
              className="border border-slate-300 bg-slate-50 px-3 py-1 hover:bg-slate-100 transition"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-5">
          <Select label="Category" value={category} onChange={setCategory} options={CATEGORIES} />
          <Select label="Status" value={status} onChange={setStatus} options={STATUSES} />
          <Select label="Tag" value={tag} onChange={setTag} options={["All", ...allTags]} />
          <Select
            label="Sort"
            value={sort}
            onChange={setSort}
            options={SORTS.map((s) => s.key) as SortKey[]}
            renderOption={(k) => SORTS.find((s) => s.key === k)?.label || k}
          />

          <div>
            <div className="text-xs text-slate-600 mb-1">Search</div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Name, tag, notes…"
              className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredAndSorted.map((m) => (
          <div
            key={m.id}
            className="surface-sharp p-6 hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">{m.category}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{m.name}</div>
              </div>
              <StatusPill status={m.status} />
            </div>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{m.blurb}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {m.tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className="border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-600 hover:bg-slate-100 transition"
                  title="Filter by tag"
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-5 border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-slate-600">Notes</div>
              <ul className="mt-2 space-y-2 text-xs text-slate-600 leading-relaxed">
                {m.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <Button href="/#newsletter" className="px-4 py-2">
                Get documentation updates
              </Button>
              <Button href="/protocols" variant="ghost" className="px-4 py-2">
                Read protocol context →
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Capture */}
      <NewsletterForm source="research-materials" />
    </div>
  );
}

function Select<T extends string>(props: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly T[] | T[];
  renderOption?: (v: T) => string;
}) {
  return (
    <div>
      <div className="text-xs text-slate-600 mb-1">{props.label}</div>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value as T)}
        className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
      >
        {props.options.map((o) => (
          <option key={o} value={o}>
            {props.renderOption ? props.renderOption(o as T) : String(o)}
          </option>
        ))}
      </select>
    </div>
  );
}

function StatusPill({ status }: { status: "In stock" | "Limited" | "Preorder" }) {
  const base = "shrink-0 border px-3 py-1 text-xs font-semibold";
  const map: Record<typeof status, string> = {
    "In stock": "border-green-300 bg-green-50 text-green-800",
    Limited: "border-yellow-300 bg-yellow-50 text-yellow-800",
    Preorder: "border-slate-300 bg-slate-100 text-slate-600",
  };
  return <span className={`${base} ${map[status]}`}>{status}</span>;
}
