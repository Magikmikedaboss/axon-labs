import Button from "./Button";

export default function ProtocolCard(props: {
  title: string;
  desc: string;
  tag: string;
}) {
  const { title, desc, tag } = props;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
      <div className="text-xs text-white/60 uppercase tracking-[0.18em]">{tag}</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
      <div className="mt-5">
        <Button href="#library" variant="ghost" className="px-4 py-2">
          Explore research →
        </Button>
      </div>
    </div>
  );
}
