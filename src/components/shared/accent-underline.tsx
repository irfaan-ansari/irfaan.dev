import { useEffect, useId } from "react"
import { motion, useAnimationControls, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface AccentUnderlineProps {
  animated?: boolean
  visible?: boolean
  replay?: number
  className?: string
}

export function AccentUnderline({
  animated = false,
  visible = true,
  replay = 0,
  className,
}: AccentUnderlineProps) {
  const gradientId = useId()
  const controls = useAnimationControls()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!animated) return
    if (reduceMotion) {
      controls.set({ pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 })
      return
    }
    if (visible) controls.set({ pathLength: 0, opacity: 0 })
    void controls.start({
      pathLength: visible ? 1 : 0,
      opacity: visible ? 1 : 0,
      transition: { duration: visible ? 0.45 : 0.18, ease: "easeOut" },
    })
    return () => controls.stop()
  }, [animated, visible, replay, reduceMotion, controls])

  const path =
    "M3 11.5C27 10.2 46 8.4 69 8.7S108 6.6 132 7.2S171 5.4 194 6.2S231 5.1 255 5.9S291 5.2 313 6.2S342 6.4 356 7.1"
  const secondPass =
    "M9 12.6C40 10.7 67 10.4 96 9.1S148 8.8 179 7.8S231 7.2 260 7.6S302 7.2 327 8.1"
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 16"
      preserveAspectRatio="none"
      fill="none"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-3 w-full overflow-visible",
        "text-primary",
        className
      )}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="360"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" stopOpacity="0.65" />
          <stop offset="0.12" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="currentColor" />
          <stop offset="0.88" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      {animated ? (
        <motion.path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
          animate={controls}
        />
      ) : (
        <path
          d={path}
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
      {animated ? (
        <motion.path
          d={secondPass}
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeOpacity="0.35"
          initial={{ pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
          animate={controls}
        />
      ) : (
        <path
          d={secondPass}
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.35"
        />
      )}
    </svg>
  )
}
