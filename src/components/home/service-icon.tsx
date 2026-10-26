import type { SERVICES } from "@/content/resume"
import { cn } from "@/lib/utils"

type ServiceName = (typeof SERVICES)[number]["icon"]

function Artwork({ name }: { name: ServiceName }) {
  switch (name) {
    case "code":
      return (
        <>
          <rect
            x="12"
            y="12"
            width="44"
            height="30"
            rx="4"
            fill="currentColor"
            opacity=".08"
          />
          <g
            className="fill-card stroke-muted-foreground"
            transform="rotate(-6 30 24)"
          >
            <rect x="5" y="5" width="46" height="32" rx="4" />
            <path d="M5 13h46" fill="none" />
          </g>
          <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeWidth="1.8"
          >
            <path d="m18 19-5 5 5 4m17-11 5 4-5 5m-7-9-4 13" />
          </g>
          <g fill="currentColor">
            <circle cx="11" cy="10" r="1" />
            <circle cx="15" cy="9.5" r="1" />
            <circle cx="19" cy="9" r="1" />
          </g>
          <path
            d="m48 30 9 5-5 2-2 5-2-12Z"
            className="transition-transform duration-300 motion-safe:group-hover/service:-translate-x-1 motion-safe:group-hover/service:-translate-y-1 motion-reduce:transition-none"
            fill="currentColor"
            stroke="none"
          />
        </>
      )
    case "phone":
      return (
        <>
          <rect
            x="4"
            y="5"
            width="43"
            height="29"
            rx="4"
            className="fill-card stroke-muted-foreground"
          />
          <path
            d="M4 12h43M19 34v6m-7 0h24"
            className="stroke-muted-foreground"
            fill="none"
          />
          <rect
            x="10"
            y="17"
            width="12"
            height="11"
            rx="2"
            fill="currentColor"
            opacity=".16"
            stroke="none"
          />
          <path
            d="M27 18h12m-12 5h9m-9 5h6"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <g className="origin-center transition-transform duration-300 motion-safe:group-hover/service:-translate-y-1 motion-reduce:transition-none">
            <rect
              x="39"
              y="18"
              width="17"
              height="26"
              rx="3"
              className="fill-background"
              stroke="currentColor"
            />
            <rect
              x="43"
              y="24"
              width="9"
              height="11"
              rx="1.5"
              fill="currentColor"
              opacity=".16"
              stroke="none"
            />
            <path d="M46 39h3" stroke="currentColor" strokeLinecap="round" />
          </g>
        </>
      )
    case "database":
      return (
        <>
          <path
            d="m13 12 17 12 20-13M30 24 14 39m16-15 20 15"
            className="stroke-muted-foreground"
            fill="none"
            strokeDasharray="3 3"
          />
          <path
            d="m13 12 17 12 20 15"
            stroke="currentColor"
            fill="none"
            opacity=".7"
          />
          {[
            [13, 12],
            [50, 11],
            [14, 39],
            [50, 39],
          ].map(([x, y]) => (
            <g
              key={`${x}-${y}`}
              className={cn(
                "transition-transform duration-300 motion-reduce:transition-none",
                x < 30
                  ? "motion-safe:group-hover/service:-translate-x-0.5"
                  : "motion-safe:group-hover/service:translate-x-0.5",
                y < 24
                  ? "motion-safe:group-hover/service:-translate-y-0.5"
                  : "motion-safe:group-hover/service:translate-y-0.5"
              )}
            >
              <rect
                x={x - 5}
                y={y - 5}
                width="10"
                height="10"
                rx="3"
                className="fill-card"
                stroke="currentColor"
              />
              <circle cx={x} cy={y} r="1.5" fill="currentColor" stroke="none" />
            </g>
          ))}
          <rect
            x="21"
            y="15"
            width="18"
            height="18"
            rx="5"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M27 22h6m-6 4h6"
            className="stroke-background"
            strokeLinecap="round"
          />
        </>
      )
    case "cloud":
      return (
        <>
          <path
            d="M10 32a8 8 0 0 1-1-16 12 12 0 0 1 23-3 9 9 0 0 1 15 7"
            className="stroke-muted-foreground"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M10 37h20M6 42h14"
            className="stroke-border-strong"
            strokeLinecap="round"
          />
          <g className="transition-transform duration-300 motion-safe:group-hover/service:translate-x-0.5 motion-safe:group-hover/service:-translate-y-0.5 motion-reduce:transition-none">
            <path
              d="M31 32c1-12 9-20 23-22-1 14-9 23-21 24l-2-2Z"
              fill="currentColor"
              opacity=".12"
            />
            <path
              d="M31 32c1-12 9-20 23-22-1 14-9 23-21 24l-2-2Zm4-13-8 1-3 9 8-1m12 1-1 10-9 3 1-9"
              stroke="currentColor"
              fill="none"
              strokeLinejoin="round"
            />
            <circle cx="44" cy="20" r="3" stroke="currentColor" fill="none" />
            <path
              d="m28 35-5 5m7-3-3 5"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </g>
        </>
      )
    case "message":
      return (
        <>
          <path
            d="M27 20h25a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-3v5l-7-5H27a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4Z"
            fill="currentColor"
            opacity=".1"
            stroke="none"
          />
          <path
            d="M9 5h28a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H23l-8 7v-7H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z"
            className="fill-card stroke-muted-foreground"
          />
          <path
            d="M12 13h21m-21 6h14"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <g className="transition-transform duration-300 motion-safe:group-hover/service:-translate-y-1 motion-reduce:transition-none">
            <circle cx="46" cy="30" r="9" fill="currentColor" stroke="none" />
            <path
              d="m42 30 3 3 5-6"
              className="stroke-background"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </g>
        </>
      )
    case "chart":
      return (
        <>
          <path
            d="M6 7v34h50"
            className="stroke-muted-foreground"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M8 16h46M8 28h46"
            className="stroke-border"
            strokeDasharray="2 4"
          />
          <rect
            x="14"
            className="origin-bottom transition-transform duration-300 [transform-box:fill-box] motion-safe:group-hover/service:scale-y-125 motion-reduce:transition-none"
            y="29"
            width="7"
            height="12"
            rx="1.5"
            fill="currentColor"
            opacity=".1"
            stroke="none"
          />
          <rect
            x="28"
            className="origin-bottom transition-transform delay-75 duration-300 [transform-box:fill-box] motion-safe:group-hover/service:scale-y-125 motion-reduce:transition-none"
            y="22"
            width="7"
            height="19"
            rx="1.5"
            fill="currentColor"
            opacity=".17"
            stroke="none"
          />
          <rect
            x="42"
            className="origin-bottom transition-transform delay-150 duration-300 [transform-box:fill-box] motion-safe:group-hover/service:scale-y-110 motion-reduce:transition-none"
            y="12"
            width="7"
            height="29"
            rx="1.5"
            fill="currentColor"
            opacity=".25"
            stroke="none"
          />
          <path
            d="m12 25 13-9 10 1L51 5m-9 0h9v9"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <circle cx="25" cy="16" r="2.5" fill="currentColor" stroke="none" />
        </>
      )
  }
}

export function ServiceIcon({ name }: { name: ServiceName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 52"
      fill="none"
      strokeWidth="1.2"
      className={cn(
        "mb-3 h-14 w-17 shrink-0 overflow-visible text-foreground",
        "text-primary-text"
      )}
    >
      <Artwork name={name} />
    </svg>
  )
}
