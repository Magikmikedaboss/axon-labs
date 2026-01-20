export default function Section(props: {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  const { id, title, kicker, children } = props;
  return (
    <section id={id} className="py-14 sm:py-16">
      <div className="wrap">
        <div className="max-w-2xl">
          {kicker ? (
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">{kicker}</div>
          ) : null}
          <div className="h2 mt-3">{title}</div>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
