import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select"
import { useForm } from "@tanstack/react-form"
import { Card, CardContent } from "@/components/ui/card"
import {
  contactDefaults,
  contactFields,
  contactProjectTypes,
} from "@/features/contact/content/contact"
import { contactSchema } from "@/features/contact/lib/contact-schema"
import { contactInputClass } from "@/features/contact/lib/contact"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/shared/icon"

export function ContactForm() {
  const form = useForm({
    defaultValues: contactDefaults,
    validators: {
      onChange: contactSchema,
      onSubmit: contactSchema,
    },
    onSubmit: ({ value }) => {
      const validated = contactSchema.parse(value)
      console.log(validated)
    },
  })

  return (
    <Card className="gap-0 rounded-xl border border-border p-5 shadow-none ring-0 sm:p-6">
      <CardContent className="gap-0 p-0">
        <form
          noValidate
          onSubmit={async (event) => {
            event.preventDefault()
            event.stopPropagation()
            await form.handleSubmit()
            requestAnimationFrame(() =>
              document
                .querySelector<HTMLElement>(
                  '#contact-form [aria-invalid="true"]'
                )
                ?.focus()
            )
          }}
          id="contact-form"
          className="space-y-5"
        >
          {contactFields.map((item) => (
            <form.Field key={item.name} name={item.name}>
              {(field) => {
                const errors = field.state.meta.errors
                  .map((error) =>
                    typeof error === "string" ? error : error?.message
                  )
                  .filter(Boolean)
                const invalid =
                  errors.length > 0 &&
                  (field.state.meta.isTouched ||
                    form.state.submissionAttempts > 0)
                const inputProps = {
                  id: `contact-${item.name}`,
                  name: item.name,
                  value: field.state.value,
                  onBlur: field.handleBlur,
                  onChange: (
                    event: React.ChangeEvent<
                      HTMLInputElement | HTMLTextAreaElement
                    >
                  ) => {
                    field.handleChange(event.target.value)
                  },
                  placeholder: item.placeholder,
                  autoComplete: item.autoComplete,
                  maxLength: item.maxLength,
                  required: true,
                  "aria-invalid": invalid,
                  "aria-describedby": invalid
                    ? `contact-${item.name}-error`
                    : undefined,
                  className: contactInputClass,
                }
                return (
                  <div>
                    <label
                      htmlFor={inputProps.id}
                      className="mb-2 block text-sm font-medium"
                    >
                      {item.label}
                    </label>
                    {item.type === "select" ? (
                      <Select
                        name={item.name}
                        items={contactProjectTypes}
                        value={field.state.value || null}
                        onValueChange={(value) => {
                          field.handleChange(value ?? "")
                        }}
                        onOpenChange={(open) => {
                          if (!open) field.handleBlur()
                        }}
                      >
                        <SelectTrigger
                          id={inputProps.id}
                          aria-invalid={invalid}
                          aria-describedby={inputProps["aria-describedby"]}
                          className={cn(
                            inputProps.className,
                            "min-h-11 shadow-none data-popup-open:border-ring data-popup-open:ring-2 data-popup-open:ring-foreground/10"
                          )}
                        >
                          <SelectValue placeholder={item.placeholder} />
                        </SelectTrigger>
                        <SelectContent
                          align="start"
                          alignItemWithTrigger={false}
                          className="rounded-lg motion-reduce:animate-none"
                        >
                          <SelectGroup>
                            {contactProjectTypes.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : item.type === "textarea" ? (
                      <textarea
                        {...inputProps}
                        rows={6}
                        className={cn(
                          inputProps.className,
                          "min-h-36 resize-y"
                        )}
                      />
                    ) : (
                      <input {...inputProps} type={item.type} />
                    )}
                    {invalid && (
                      <p
                        id={`contact-${item.name}-error`}
                        role="alert"
                        className="mt-1.5 text-xs text-destructive"
                      >
                        {[...new Set(errors)].join(" ")}
                      </p>
                    )}
                  </div>
                )
              }}
            </form.Field>
          ))}

          <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full cursor-pointer disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                )}
              >
                {isSubmitting ? "Sending..." : "Send"}
                <Icon name="arrow" className="size-4" />
              </Button>
            )}
          </form.Subscribe>
        </form>
      </CardContent>
    </Card>
  )
}
