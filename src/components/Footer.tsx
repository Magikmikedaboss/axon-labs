import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} {SITE.name}. Data over hype.
        </div>
        <div className="text-xs text-slate-500 max-w-xl">
          Educational content only. Research materials, if offered, are for laboratory use only and not
          for human consumption. No medical advice.
        </div>
      </div>
    </footer>
  );
}
