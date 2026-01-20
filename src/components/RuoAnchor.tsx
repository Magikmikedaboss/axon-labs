import Link from "next/link";

export default function RuoAnchor() {
  return (
    <Link
      href="/ruo"
      className="inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-1.5 text-[11px] uppercase tracking-wider text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition-all duration-200 font-mono"
    >
      RUO
      <span className="text-slate-400">•</span>
      Research Use Only
    </Link>
  );
}
