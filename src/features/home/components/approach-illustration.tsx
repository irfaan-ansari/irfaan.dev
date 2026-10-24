export function ApproachIllustration({ type }: { type: "scope" | "conversation" | "growth" }) {
  return (
    <svg
      viewBox="0 0 80 64"
      fill="none"
      aria-hidden="true"
      className="h-16 w-20 text-primary-text"
    >
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {type === "scope" && (
          <>
            <rect x="22" y="12" width="38" height="46" rx="6" fill="currentColor" fillOpacity=".1" strokeOpacity=".3" />
            <rect x="14" y="7" width="38" height="46" rx="6" fill="var(--card)" />
            <rect x="25" y="4" width="16" height="8" rx="3" fill="currentColor" fillOpacity=".18" />
            <path d="m22 25 3 3 5-6m-8 17 3 3 5-6" />
            <path d="M35 25h9M35 39h9" strokeOpacity=".45" />
            <circle cx="61" cy="46" r="10" fill="var(--card)" />
            <path d="m57 46 3 3 5-6" />
          </>
        )}
        {type === "conversation" && (
          <>
            <path d="M35 25h28a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6h-2v8l-10-8H35a6 6 0 0 1-6-6V31a6 6 0 0 1 6-6Z" fill="currentColor" fillOpacity=".12" strokeOpacity=".45" />
            <path d="M14 8h35a6 6 0 0 1 6 6v17a6 6 0 0 1-6 6H30L19 46v-9h-5a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6Z" fill="var(--card)" />
            <path d="M18 19h26M18 26h17" strokeOpacity=".6" />
            <path d="M41 42h16" />
            <circle cx="62" cy="12" r="5" fill="currentColor" fillOpacity=".18" stroke="none" />
          </>
        )}
        {type === "growth" && (
          <>
            <path d="M10 54h60" strokeOpacity=".35" />
            <rect x="16" y="39" width="12" height="15" rx="3" fill="currentColor" fillOpacity=".08" strokeOpacity=".4" />
            <rect x="34" y="29" width="12" height="25" rx="3" fill="currentColor" fillOpacity=".15" strokeOpacity=".6" />
            <rect x="52" y="17" width="12" height="37" rx="3" fill="currentColor" fillOpacity=".24" />
            <path d="m14 28 18-12 10 3L60 6m-10 0h10v10" />
            <circle cx="14" cy="28" r="3" fill="var(--card)" />
          </>
        )}
      </g>
    </svg>
  )
}
