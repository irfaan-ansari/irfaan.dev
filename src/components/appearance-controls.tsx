import { PRIMARY_COLORS, THEME_OPTIONS } from "@/lib/theme"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/shared/icon"

export function AppearanceControls() {
  const { theme, primaryColor, setPrimaryColor, setTheme } = useTheme()
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="ghost" size="icon" />}
        aria-label="Appearance settings"
        title="Appearance settings"
        className="relative size-8 rounded-lg border-0 bg-transparent text-muted-foreground shadow-none sm:size-9"
      >
        <Icon name="sliders" className="size-4" />
        <span
          aria-hidden="true"
          className="absolute right-1 bottom-1 size-1.5 rounded-full bg-primary"
        />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-72 max-w-[calc(100vw-2rem)] gap-0 rounded-xl bg-popover p-3 motion-reduce:animate-none"
      >
        <PopoverTitle className="sr-only">Appearance settings</PopoverTitle>
        <p
          id="appearance-theme-label"
          className="mb-2 text-xs font-medium text-muted-foreground"
        >
          Theme
        </p>
        <div
          role="group"
          aria-labelledby="appearance-theme-label"
          className="mb-3 grid grid-cols-3 gap-0.5 rounded-lg bg-secondary p-0.5 dark:bg-background"
        >
          {THEME_OPTIONS.map((option) => (
            <Button
              key={option.value}
              aria-pressed={theme === option.value}
              onClick={() => setTheme(option.value)}
              variant={theme === option.value ? "outline" : "ghost"}
              size="sm"
              className={cn(
                "inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md px-2 dark:data-[variant=outline]:bg-secondary!"
              )}
            >
              <Icon name={option.icon} className="size-3.5" />
              {option.label}
            </Button>
          ))}
        </div>
        <p
          id="appearance-color-label"
          className="mb-2 text-xs font-medium text-muted-foreground"
        >
          Color
        </p>
        <div
          role="group"
          aria-labelledby="appearance-color-label"
          className="grid grid-cols-5 gap-1"
        >
          {PRIMARY_COLORS.map((color) => (
            <button
              key={color.value}
              type="button"
              title={color.label}
              aria-label={color.label}
              aria-pressed={primaryColor === color.value}
              onClick={() => setPrimaryColor(color.value)}
              className={cn(
                "flex min-h-16 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-transparent p-1 text-muted-foreground outline-offset-2 transition-colors hover:bg-secondary focus-visible:outline-2 motion-reduce:transition-none",
                primaryColor === color.value && "border-ring bg-secondary"
              )}
            >
              <span
                aria-hidden="true"
                data-swatch={color.value}
                className="flex size-7 items-center justify-center rounded-full bg-primary shadow-sm ring-1 ring-border ring-inset"
              >
                {primaryColor === color.value && (
                  <span className="flex size-4 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
                    <Icon name="check" className="size-3" />
                  </span>
                )}
              </span>
              <span className="text-xs leading-none font-medium">
                {color.label}
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
