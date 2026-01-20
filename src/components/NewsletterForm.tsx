"use client";

import { useMemo, useState } from "react";
import Button from "./Button";

type Props = {
  title?: string;
  helper?: string;
  compact?: boolean;
  source?: string; // e.g. "home-hero", "newsletter-section"
};

export default function NewsletterForm({
  title = "Get Protocol Notes",
  helper = "Weekly insights on biohacking, peptide research context, and optimization fundamentals. No spam.",
  compact,
  source = "unknown",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    const e = email.trim();
    return e.length > 5 && e.includes("@") && e.includes(".");
  }, [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "loading") return;

    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMsg(data.message || "Something went sideways. Try again.");
        return;
      }

      setStatus("success");
      setMsg("You're in. Welcome packet incoming. ✅");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Network error. Try again in a moment.");
    }
  }

  return (
    <div className={compact ? "" : "surface-sharp p-6"}>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{helper}</p>

      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />

        <Button className="sm:w-auto w-full" onClick={() => {}}>
          {status === "loading" ? "Joining…" : "Join Protocol Notes"}
        </Button>
      </form>

      <div className="mt-3 text-xs text-slate-500">
        Educational content only. Unsubscribe anytime.
      </div>

      {msg ? (
        <div
          className={`mt-3 border px-4 py-3 text-sm ${
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {msg}
        </div>
      ) : null}
    </div>
  );
}
