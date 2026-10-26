import { motion, useReducedMotion } from "motion/react"
import { Icon, type IconName } from "@/components/shared/icon"

const SERVICES = [
  { icon: "code", label: "Web apps & APIs" },
  { icon: "shopping", label: "Commerce & integrations" },
  { icon: "cloud", label: "Deployment & maintenance" },
] satisfies { icon: IconName; label: string }[]

export function WebServices() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="group/web relative grid gap-9 overflow-hidden rounded-xl border border-border bg-secondary px-6 py-8 sm:grid-cols-[1.1fr_1fr] sm:items-center sm:gap-6 sm:px-8 sm:py-10 dark:bg-card">
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary"
          />
          What I do
        </p>
        <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          Anything and
          <br />
          everything web.
        </h2>
        <p className="mt-4 max-w-72 text-sm leading-relaxed text-muted-foreground">
          A new website, an online store, or tools for your team. Choose the
          help your business needs.
        </p>
        <ul className="mt-6 space-y-3">
          {SERVICES.map(({ icon, label }) => (
            <li
              key={label}
              className="group/service-line flex items-center gap-2.5 text-sm"
            >
              <Icon
                name={icon}
                className="size-4 shrink-0 text-primary-text transition-transform duration-100 ease-out motion-safe:group-hover/service-line:translate-x-0.5 motion-reduce:transition-none"
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        aria-hidden="true"
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-72 py-2"
      >
        <div className="absolute inset-x-3 inset-y-0 rotate-3 rounded-xl border border-primary/15 bg-primary/5 transition-transform duration-100 ease-out motion-safe:group-hover/web:rotate-2 motion-reduce:transition-none" />
        <div className="relative rounded-xl border border-border bg-background shadow-sm transition-transform duration-100 ease-out motion-safe:group-hover/web:-translate-y-0.5 motion-reduce:transition-none">
          <div className="flex items-center gap-1 border-b border-border px-4 py-3">
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-1 rounded-full bg-primary" /> All connected
            </span>
          </div>
          <div className="p-5">
            <div className="mb-5 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary-text">
              <Icon name="code" className="size-5" />
            </div>
            <p className="text-lg font-semibold tracking-tight">
              Your next idea.
            </p>
            <div className="mt-3 h-1.5 w-4/5 rounded-full bg-muted" />
            <div className="mt-2 h-1.5 w-3/5 rounded-full bg-muted" />
            <div className="mt-5 flex items-center justify-between rounded-md border border-primary/15 bg-primary/5 px-3 py-2 text-xs text-primary-text">
              Ready for the real world{" "}
              <Icon name="check" className="size-3.5" />
            </div>
          </div>
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
            {(["layout", "database", "cloud"] as const).map((name) => (
              <div
                key={name}
                className="flex items-center justify-center py-3 text-muted-foreground"
              >
                <Icon
                  name={name}
                  className="size-4 transition-colors duration-100 ease-out group-hover/web:text-primary-text"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
