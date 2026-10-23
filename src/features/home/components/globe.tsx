export function Globe() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 -bottom-20 size-96 text-primary sm:-right-20 sm:-bottom-24 sm:size-112"
    >
      <div className="absolute inset-12 rounded-full border border-primary/15" />
      <span
        className="absolute inset-32 bg-primary/25 mask-contain mask-no-repeat"
        style={{ maskImage: "url('/icons/cursor-magic.svg')" }}
      />
      <div className="absolute inset-5 rounded-full border border-primary/15" />
      <div className="absolute inset-0 rounded-full border border-dashed border-primary/10" />
      <div className="absolute inset-5 animate-spin rounded-full animation-duration-[45s] motion-reduce:animate-none">
        <span className="absolute top-1/2 -left-1.5 size-3 rounded-full border-2 border-background bg-primary/80 shadow-[0_0_16px_color-mix(in_oklch,var(--primary)_30%,transparent)]" />
        <span className="absolute top-1/2 -right-1 size-2 rounded-full bg-primary/40" />
      </div>
      <div className="absolute inset-12 animate-spin rounded-full animation-duration-[65s] shimmer-reverse motion-reduce:animate-none">
        <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-primary/60" />
      </div>
    </div>
  )
}
