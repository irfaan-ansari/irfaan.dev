import type { ComponentProps } from "react"
import {
  RiEqualizer3Line,
  RiSunLine,
  RiMoonLine,
  RiComputerLine,
  RiCheckLine,
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiArrowUpLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiAddLine,
  RiCloseLine,
  RiMenuLine,
  RiSendInsLine,
  RiTimeLine,
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiDatabase2Line,
  RiCloudLine,
  RiMessage2Line,
  RiAtLine,
  RiBarChartLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiJavascriptFill,
  RiReactjsLine,
  RiNextjsFill,
  RiNodejsLine,
  RiShoppingBag3Line,
  RiLayoutLine,
  RiMapPinLine,
  RiGlobalLine,
} from "@remixicon/react"

const ICONS = {
  sliders: RiEqualizer3Line,
  sun: RiSunLine,
  moon: RiMoonLine,
  computer: RiComputerLine,
  check: RiCheckLine,
  arrow: RiArrowRightUpLine,
  right: RiArrowRightLine,
  left: RiArrowLeftLine,
  up: RiArrowUpLine,
  down: RiArrowDownSLine,
  chevronUp: RiArrowUpSLine,
  add: RiAddLine,
  close: RiCloseLine,
  menu: RiMenuLine,
  send: RiSendInsLine,
  time: RiTimeLine,
  code: RiCodeSSlashLine,
  phone: RiSmartphoneLine,
  database: RiDatabase2Line,
  cloud: RiCloudLine,
  message: RiMessage2Line,
  mail: RiAtLine,
  chart: RiBarChartLine,
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
  javascript: RiJavascriptFill,
  react: RiReactjsLine,
  nextjs: RiNextjsFill,
  nodejs: RiNodejsLine,
  shopping: RiShoppingBag3Line,
  layout: RiLayoutLine,
  location: RiMapPinLine,
  globe: RiGlobalLine,
}

export type IconName = keyof typeof ICONS

type IconProps = Omit<ComponentProps<"svg">, "children"> & {
  name: IconName
  size?: number | string
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  const Component = ICONS[name]
  return <Component size={size} aria-hidden="true" {...props} />
}
