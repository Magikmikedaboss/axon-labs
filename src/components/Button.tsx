import Link from "next/link";
import { cn } from "./cn";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline" | "technical";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = "primary", 
  size = "md",
  className 
}: Props): React.ReactElement {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  
  const sizes = {
    sm: "px-3 py-1.5 text-[11px] sm:text-xs",
    md: "px-4 py-2 text-xs sm:text-sm",
    lg: "px-5 py-2.5 text-sm sm:text-base lg:px-6 lg:py-3"
  };
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
    outline: "bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400",
    technical: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 font-mono text-xs tracking-wider uppercase"
  };

  const style = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={style}>
        {children}
      </Link>
    ) as React.ReactElement;
  }

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  ) as React.ReactElement;
}
