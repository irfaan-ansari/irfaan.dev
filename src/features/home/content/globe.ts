export const globeMeridians = [40, 85, 130, 165]
export const globeParallels = [70, 130, 200, 270, 330]
export const globeNodes = [
  { x: 50, y: 250, color: "text-primary", pulse: "[animation-delay:0s]" },
  { x: 120, y: 90, color: "text-primary", pulse: "[animation-delay:1s]" },
  { x: 280, y: 115, color: "text-primary", pulse: "[animation-delay:2s]" },
  {
    x: 340,
    y: 280,
    color: "text-primary",
    pulse: "[animation-delay:0.5s]",
  },
  { x: 170, y: 350, color: "text-primary", pulse: "[animation-delay:1.5s]" },
  { x: 200, y: 30, color: "text-primary", pulse: "[animation-delay:2.5s]" },
] as const
export const globeConnections = [
  { path: "M50 250Q130 80 280 115L340 280", color: "text-primary" },
  { path: "M120 90Q330 140 170 350L50 250", color: "text-primary" },
  { path: "M200 30Q370 170 340 280L120 90", color: "text-primary" },
] as const
