import { SITE } from "@/lib/site";
import Button from "./Button";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="wrap h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
            <span className="text-sm font-bold">A</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{SITE.name}</div>
            <div className="text-xs text-white/60">Research-first biohacking</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {SITE.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#newsletter" variant="ghost" className="hidden sm:inline-flex">
            Get Protocol Notes
          </Button>
          <Button href="/protocols">Explore Protocols</Button>
        </div>
      </div>
    </header>
  );
}
