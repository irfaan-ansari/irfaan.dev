import { useRef } from "react"
import { useForm } from "@tanstack/react-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select"
import { contactSchema } from "@/lib/contact-schema"
import { Icon } from "@/components/shared/icon"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    validators: {
      onChange: contactSchema,
      onBlur: contactSchema,
      onSubmit: contactSchema,
    },
    onSubmit: ({ value }) => {
      console.log(contactSchema.parse(value))
    },
  })

  return (
    <Card className="gap-0 rounded-xl border border-border p-6 shadow-none ring-0 sm:p-8">
      <CardContent className="gap-0 p-0">
        <form
          ref={formRef}
          id="contact-form"
          noValidate
          onSubmit={async (event) => {
            event.preventDefault()
            await form.handleSubmit()
            requestAnimationFrame(() =>
              formRef.current
                ?.querySelector<HTMLElement>('[aria-invalid="true"]')
                ?.focus()
            )
          }}
        >
          <FieldGroup className="gap-6">
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="contact-name">Your name</FieldLabel>
                    <Input
                      id="contact-name"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      placeholder="Alex Morgan"
                      autoComplete="name"
                      maxLength={100}
                      required
                      aria-invalid={isInvalid}
                      aria-describedby={
                        isInvalid ? "contact-name-error" : undefined
                      }
                    />
                    {isInvalid && (
                      <FieldError
                        id="contact-name-error"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="contact-email">
                      Email address
                    </FieldLabel>
                    <Input
                      id="contact-email"
                      type="email"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      placeholder="alex@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      aria-invalid={isInvalid}
                      aria-describedby={
                        isInvalid ? "contact-email-error" : undefined
                      }
                    />
                    {isInvalid && (
                      <FieldError
                        id="contact-email-error"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <form.Field name="subject">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="contact-subject">
                      What are you working on?
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value || null}
                      onValueChange={(value) => field.handleChange(value ?? "")}
                      onOpenChange={(open) => {
                        if (!open) field.handleBlur()
                      }}
                    >
                      <SelectTrigger
                        id="contact-subject"
                        className="w-full"
                        onBlur={field.handleBlur}
                        aria-required="true"
                        aria-invalid={isInvalid}
                        aria-describedby={
                          isInvalid ? "contact-subject-error" : undefined
                        }
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Website">Website</SelectItem>
                          <SelectItem value="Web application">
                            Web application
                          </SelectItem>
                          <SelectItem value="E-commerce / Shopify">
                            E-commerce / Shopify
                          </SelectItem>
                          <SelectItem value="API / integration">
                            API / integration
                          </SelectItem>
                          <SelectItem value="Existing project">
                            Existing project
                          </SelectItem>
                          <SelectItem value="Something else">
                            Something else
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError
                        id="contact-subject-error"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <form.Field name="message">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="contact-message">
                      Tell me about your project
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id="contact-message"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                        placeholder="Share your goals, scope, and any timeline you have in mind."
                        required
                        className="resize-none"
                        aria-invalid={isInvalid}
                        aria-describedby={`contact-message-description${isInvalid ? " contact-message-error" : ""}`}
                      />
                      <InputGroupAddon
                        align="block-end"
                        className="justify-end border-t border-border/50"
                      >
                        <InputGroupText className="tabular-nums">
                          {field.state.value.length}/2000 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription id="contact-message-description">
                      A rough idea and a few goals are enough to start.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError
                        id="contact-message-error"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                )
              }}
            </form.Field>
            <form.Subscribe selector={(state) => state.isSubmitting}>
              {(isSubmitting) => (
                <Field orientation="horizontal" className="flex-wrap">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting…" : "Submit"}
                    <Icon name="arrow" className="size-4" />
                  </Button>
                </Field>
              )}
            </form.Subscribe>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
