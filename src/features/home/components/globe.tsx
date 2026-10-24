export function Globe() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 -bottom-20 size-96 text-primary sm:-right-20 sm:-bottom-24 sm:size-112"
    >
      <div className="absolute inset-12 rounded-full border border-primary/15" />
      <img
        src="/icons/cursor-magic.svg"
        alt=""
        width={128}
        height={128}
        className="absolute inset-32 size-32 opacity-25 dark:invert"
      />
      <div className="absolute inset-5 rounded-full border border-primary/15" />
      <div className="absolute inset-0 rounded-full border border-dashed border-primary/10" />
      <div className="absolute inset-5 rounded-full">
        <span className="absolute top-1/2 -left-1.5 size-3 rounded-full border-2 border-background bg-primary/80" />
        <span className="absolute top-1/2 -right-1 size-2 rounded-full bg-primary/40" />
      </div>
      <div className="absolute inset-12 rounded-full">
        <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-primary/60" />
      </div>
    </div>
  )
}
