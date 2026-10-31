import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariantClasses = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-100 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-button-primary transition-[transform,translate,scale,background-color,border-color,color,box-shadow] hover:bg-primary/90 hover:shadow-button-primary-hover active:bg-primary/95 active:shadow-button-primary-active motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 motion-safe:active:scale-98",
        outline:
          "border-border-strong bg-background text-foreground shadow-button-outline transition-[transform,translate,scale,background-color,border-color,color,box-shadow] hover:border-foreground/35 hover:bg-muted/40 hover:shadow-button-outline-hover active:bg-muted/40 active:shadow-button-outline-active motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 motion-safe:active:scale-98",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary-text underline-offset-4 transition-[translate,color] hover:underline motion-safe:hover:translate-x-0.5 motion-safe:active:translate-x-0.5",
      },
      size: {
        default:
          "h-auto gap-2 px-5 py-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 py-0 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 py-0 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 py-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9 p-0",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),8px)] p-0 in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] p-0 in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10 p-0",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        size: ["xs", "sm", "icon-xs", "icon-sm", "icon"],
        className:
          "shadow-button-primary-sm hover:shadow-button-primary-sm-hover active:shadow-button-primary-sm-active",
      },
      {
        variant: "outline",
        size: ["xs", "sm", "icon-xs", "icon-sm", "icon"],
        className:
          "shadow-button-outline-sm hover:shadow-button-outline-sm-hover active:shadow-button-outline-sm-active",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function buttonVariants(props?: Parameters<typeof buttonVariantClasses>[0]) {
  return cn(buttonVariantClasses(props))
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariantClasses>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

export { Button, buttonVariants }
