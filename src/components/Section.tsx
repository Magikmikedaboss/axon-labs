export default function Section(props: {
  id?: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { id, kicker, title, children, className } = props;

  return (
    <section id={id} className={`section-spacer ${className || ''}`}>
      <div className="wrap">
        <div className="mb-8">
          {kicker && (
            <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              {kicker}
            </div>
          )}
          <h2 className="h2">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
