import type { ReactNode } from "react"

export function HandDrawnHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative isolate inline-block px-2 py-1 whitespace-nowrap text-primary">
      <svg
        aria-hidden="true"
        viewBox="0 0 360 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-y-0 -left-1 -z-10 h-full w-[calc(100%+0.5rem)] -rotate-1 fill-current text-primary/20"
      >
        <path d="M5 11C76 4 151 8 219 5L352 7l-4 8 9 5-5 9 4 9-8 6 3 9c-79-4-143 5-214 1L7 57l4-10-7-5 5-10-6-6 6-8-4-7Z" />
        <path
          d="M17 6C103 0 232 3 339 2M12 58c96-6 213 2 332-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".35"
        />
      </svg>
      {children}
    </span>
  )
}
