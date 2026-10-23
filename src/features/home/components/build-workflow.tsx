export function BuildWorkflow() {
  return (
    <div aria-hidden="true" className="relative mt-5 w-full max-w-36">
      <svg viewBox="0 0 144 28" fill="none" className="h-7 w-full">
        <path d="M24 14h96" className="stroke-border-strong" />
        <path
          d="M24 14h96"
          pathLength="96"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="16 176"
          className="workflow-connector stroke-primary"
        />
        {[24, 72, 120].map((x) => (
          <g key={x}>
            <circle
              cx={x}
              cy="14"
              r="4"
              className="fill-background stroke-border-strong"
            />
            <circle
              cx={x}
              cy="14"
              r="1.5"
              className="workflow-node fill-primary"
              data-step={x}
            />
          </g>
        ))}
      </svg>
      <div className="grid grid-cols-3 text-center font-mono text-xs text-muted-foreground">
        <span>idea</span>
        <span>build</span>
        <span>ship</span>
      </div>
    </div>
  )
}
