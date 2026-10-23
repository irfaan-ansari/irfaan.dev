import type { ComponentProps } from "react"
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiBarChartLine,
  RiCheckLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiComputerLine,
  RiDatabase2Line,
  RiEqualizer3Line,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMessage2Line,
  RiMoonLine,
  RiSmartphoneLine,
  RiSunLine,
} from "@remixicon/react"

const icons = {
  sliders: RiEqualizer3Line,
  sun: RiSunLine,
  moon: RiMoonLine,
  computer: RiComputerLine,
  check: RiCheckLine,
  arrow: RiArrowRightUpLine,
  right: RiArrowRightLine,
  code: RiCodeSSlashLine,
  phone: RiSmartphoneLine,
  database: RiDatabase2Line,
  cloud: RiCloudLine,
  message: RiMessage2Line,
  chart: RiBarChartLine,
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
}

export function Icon({
  name,
  ...props
}: ComponentProps<typeof RiCodeSSlashLine> & { name: string }) {
  const Component = icons[name as keyof typeof icons] ?? RiCodeSSlashLine
  return <Component size={20} aria-hidden="true" {...props} />
}
