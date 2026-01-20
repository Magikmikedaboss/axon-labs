import { NextResponse } from "next/server";

function bad(message: string, code = 400) {
  return NextResponse.json({ ok: false, message }, { status: code });
}

function ok(message = "Subscribed") {
  return NextResponse.json({ ok: true, message }, { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email || "").trim();
  const source = String(body?.source || "unknown").trim();

  if (!email || !email.includes("@") || !email.includes(".")) {
    return bad("Please enter a valid email.");
  }

  const provider = (process.env.SUBSCRIBE_PROVIDER || "convertkit").toLowerCase();

  // Minimal anti-abuse: reject very long strings
  if (email.length > 254) return bad("Email looks invalid.");

  try {
    if (provider === "convertkit") {
      const apiKey = process.env.CONVERTKIT_API_KEY;
      const formId = process.env.CONVERTKIT_FORM_ID;

      if (!apiKey || !formId) {
        return bad("Subscription is not configured (ConvertKit env missing).", 500);
      }

      const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          tags: body?.tags || undefined,
          fields: { source },
        }),
      });

      if (!res.ok) {
        return bad("Subscribe failed. Please try again.", 502);
      }

      return ok("Subscribed via ConvertKit.");
    }

    if (provider === "buttondown") {
      const apiKey = process.env.BUTTONDOWN_API_KEY;
      if (!apiKey) return bad("Subscription is not configured (Buttondown env missing).", 500);

      const res = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          notes: `source=${source}`,
          tags: body?.tags || undefined,
        }),
      });

      if (!res.ok) {
        return bad("Subscribe failed. Please try again.", 502);
      }

      return ok("Subscribed via Buttondown.");
    }

    return bad("Unknown SUBSCRIBE_PROVIDER value.", 500);
  } catch {
    return bad("Network error while subscribing. Try again.", 502);
  }
}
