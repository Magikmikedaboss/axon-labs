export default function LibraryItem(props: { title: string; text: string; image?: string }) {
  return (
    <div className="surface-sharp p-5 sm:p-6 rounded-xl">
      {props.image && (
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src={props.image} 
            alt={props.title}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      )}
      <div className="text-xs sm:text-sm font-semibold text-slate-900">{props.title}</div>
      <div className="mt-2.5 text-sm text-slate-600 leading-relaxed">{props.text}</div>
    </div>
  );
}
