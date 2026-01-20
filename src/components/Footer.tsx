import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/70">
          © {new Date().getFullYear()} {SITE.name}. Data over hype.
        </div>
        <div className="text-xs text-white/50 max-w-xl">
          Educational content only. Research materials, if offered, are for laboratory use only and not
          for human consumption. No medical advice.
        </div>
      </div>
    </footer>
  );
}
