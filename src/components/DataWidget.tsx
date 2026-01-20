export default function DataWidget(props: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  image?: string;
}) {
  const { title, children, className, image } = props;

  return (
    <div className={`widget ${className || ''} rounded-xl`}>
      {image && (
        <div className="relative overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={title || "Widget image"}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      )}
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
