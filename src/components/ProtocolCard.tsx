import Button from "./Button";

export default function ProtocolCard(props: {
  title: string;
  desc: string;
  tag: string;
}) {
  const { title, desc, tag } = props;
  return (
    <div className="surface-sharp p-6 hover:bg-slate-50 transition-colors duration-200">
      <div className="text-xs font-semibold tracking-wider uppercase text-blue-600">{tag}</div>
      <div className="mt-3 text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
      <div className="mt-5">
        <Button href="#library" variant="ghost" className="px-4 py-2">
          Explore research →
        </Button>
      </div>
    </div>
  );
}
