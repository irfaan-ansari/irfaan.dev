"use client";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { contactSubmit } from "@/server";
import Tooltip from "@/components/tooltip";
import { useModalStore } from "@/lib/store";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { CircleCheck, Info } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import { Loader } from "@/components/animate-ui/icons/loader";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { contactSchema, contactFormOptions } from "@/lib/formSchema";

const ContactDialog = () => {
  const track = useAnalytics();
  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("contact"));

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      const { success, message } = await contactSubmit(value);
      if (success) {
        toast.success(message);
        toggle("contact");
        form.reset();
        track("form_submit", {
          label: "Contact form",
        });
      } else toast.error(message);
    },
  });

  return (
    <Dialog open={open} onOpenChange={() => toggle("contact")}>
      <DialogContent className="gap-6 bg-popover sm:max-w-md">
        <DialogHeader className="gap-1.5 text-left">
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>
            Share a few details and I’ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="gap-4">
            {contactFormOptions.map(({ name, placeholder, label, type }) => (
              <form.Field
                key={name}
                name={name}
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  if (type === "textarea") {
                    return (
                      <Field data-invalid={isInvalid} className="gap-1.5">
                        <FieldLabel data-invalid={isInvalid}>
                          {label}
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            name={field.name}
                            aria-invalid={isInvalid}
                            placeholder={placeholder}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            className="h-24 resize-none"
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          <InputGroupAddon
                            align="inline-end"
                            className="self-start pt-3"
                          >
                            {isInvalid && (
                              <Tooltip
                                content={
                                  <FieldError
                                    className="text-primary-foreground"
                                    errors={field.state.meta.errors}
                                  />
                                }
                              >
                                <InputGroupButton
                                  className="rounded-full"
                                  size="icon-xs"
                                >
                                  <Info />
                                </InputGroupButton>
                              </Tooltip>
                            )}
                            {field.state.value && field.state.meta.isValid && (
                              <CircleCheck />
                            )}
                          </InputGroupAddon>
                        </InputGroup>
                      </Field>
                    );
                  }
                  if (type === "input") {
                    return (
                      <Field data-invalid={isInvalid} className="gap-1.5">
                        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
                        <InputGroup>
                          <InputGroupInput
                            name={field.name}
                            aria-invalid={isInvalid}
                            placeholder={placeholder}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          <InputGroupAddon align="inline-end">
                            {isInvalid && (
                              <Tooltip
                                content={
                                  <FieldError
                                    className="text-primary-foreground"
                                    errors={field.state.meta.errors}
                                  />
                                }
                              >
                                <InputGroupButton
                                  className="rounded-full"
                                  size="icon-xs"
                                >
                                  <Info />
                                </InputGroupButton>
                              </Tooltip>
                            )}
                            {field.state.value && field.state.meta.isValid && (
                              <CircleCheck />
                            )}
                          </InputGroupAddon>
                        </InputGroup>
                      </Field>
                    );
                  }
                }}
              />
            ))}
          </FieldGroup>
          <DialogFooter className="gap-4 sm:justify-end mt-6">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <form.Subscribe selector={(state) => state.isSubmitting}>
              {(isSubmitting) => (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-24"
                >
                  {isSubmitting && (
                    <AnimateIcon animate>
                      <Loader />
                    </AnimateIcon>
                  )}
                  Send
                </Button>
              )}
            </form.Subscribe>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
