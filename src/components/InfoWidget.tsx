export default function InfoWidget(props: {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
  className?: string;
}) {
  const { title, children, variant = "default", className } = props;
  
  const variantClasses = {
    default: "info-panel",
    warning: "info-panel info-panel-warning",
    success: "info-panel"
  };

  return (
    <div className={`${variantClasses[variant]} ${className || ''}`}>
      <div className="info-panel-content">
        {title && (
          <div className="text-sm font-semibold mb-2 text-slate-900">{title}</div>
        )}
        <div className="text-sm text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
