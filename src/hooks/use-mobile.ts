import { useCallback, useSyncExternalStore } from "react"

const getServerSnapshot = () => false

/** Matches widths below Tailwind's lg breakpoint by default. */
export function useMobile(breakpoint = 992) {
  const query = `(width < ${breakpoint}px)`

  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query)
      media.addEventListener("change", onChange)
      return () => media.removeEventListener("change", onChange)
    },
    [query]
  )

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  )

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
