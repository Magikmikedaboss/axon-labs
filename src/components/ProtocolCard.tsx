import Button from "./Button";

export default function ProtocolCard(props: {
  title: string;
  desc: string;
  tag: string;
  image?: string;
}) {
  const { title, desc, tag, image } = props;
  return (
    <div className="surface-sharp p-6 hover:bg-slate-50 transition-colors duration-200 rounded-xl">
      {image && (
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      )}
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
