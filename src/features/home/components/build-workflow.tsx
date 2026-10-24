export function BuildWorkflow() {
  return (
    <div aria-hidden="true" className="relative flex items-center gap-3">
      <svg viewBox="0 0 28 144" fill="none" className="h-36 w-7 shrink-0">
        <path d="M14 24v96" className="stroke-border-strong" />
        <path
          d="M14 24v96"
          pathLength="96"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="16 176"
          className="workflow-connector stroke-primary"
        />
        {[24, 72, 120].map((y) => (
          <g key={y}>
            <circle
              cx="14"
              cy={y}
              r="4"
              className="fill-background stroke-border-strong"
            />
            <circle
              cx="14"
              cy={y}
              r="1.5"
              className="workflow-node fill-primary"
              data-step={y}
            />
          </g>
        ))}
      </svg>
      <div className="grid h-36 grid-rows-3 items-center font-mono text-xs text-muted-foreground">
        <span>idea</span>
        <span>build</span>
        <span>ship</span>
      </div>
    </div>
  )
}
