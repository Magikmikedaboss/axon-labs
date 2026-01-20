export default function DataWidget(props: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { title, children, className } = props;

  return (
    <div className={`widget ${className || ''}`}>
      {title && (
        <div className="widget-header">
          <div className="widget-title">{title}</div>
        </div>
      )}
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
}
