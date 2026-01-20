export default function StatWidget(props: {
  value: string | number;
  label: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
}) {
  const { value, label, trend, className } = props;

  const trendColors = {
    up: "text-green-600",
    down: "text-red-600",
    neutral: "text-slate-600"
  };

  return (
    <div className={`surface-sharp p-5 ${className || ''}`}>
      <div className="text-3xl font-bold text-slate-900 tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600 font-medium">
        {label}
      </div>
      {trend && (
        <div className={`mt-2 text-xs font-semibold ${trendColors[trend]}`}>
          {trend === "up" && "↑"}
          {trend === "down" && "↓"}
          {trend === "neutral" && "→"}
        </div>
      )}
    </div>
  );
}
