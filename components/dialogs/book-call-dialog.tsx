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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
} from "@/components/ui/input-group";
import Tooltip from "@/components/tooltip";
import { bookCall } from "@/server";
import { useModalStore } from "@/lib/store";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { CircleCheck, Info } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import { Loader } from "@/components/animate-ui/icons/loader";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { bookCallSchema, bookCallOptions } from "@/lib/formSchema";

const BookCallDialog = () => {
  const track = useAnalytics();
  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("bookCall"));

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "",
      subject: "",
    },
    validators: {
      onSubmit: bookCallSchema,
    },
    onSubmit: async ({ value }) => {
      const { success, message } = await bookCall(value);
      if (success) {
        toast.success(message);
        toggle("bookCall");
        form.reset();
        track("form_submit", {
          label: "Book call",
        });
      } else {
        toast.error(message);
      }
    },
  });

  return (
    <Dialog open={open} onOpenChange={() => toggle("bookCall")}>
      <DialogContent className="gap-6 border-b-4 bg-background dark:bg-secondary/80 backdrop-blur-2xl sm:max-w-md">
        <DialogHeader className="gap-1.5 text-left">
          <DialogTitle>Schedule a free call</DialogTitle>
          <DialogDescription>
            Share a few details to help me prepare for our call.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="gap-4">
            {bookCallOptions.map(
              ({ name, type, label, placeholder, options }) => (
                <form.Field
                  key={name}
                  name={name}
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    if (type === "select") {
                      return (
                        <Field data-invalid={isInvalid} className="gap-1.5">
                          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
                          <Select
                            name={field.name}
                            value={field.state.value}
                            onValueChange={field.handleChange}
                          >
                            <SelectTrigger
                              aria-invalid={isInvalid}
                              className="w-full"
                            >
                              <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              {options.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
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
                              {field.state.value &&
                                field.state.meta.isValid && <CircleCheck />}
                            </InputGroupAddon>
                          </InputGroup>
                        </Field>
                      );
                    }
                  }}
                />
              )
            )}
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

export default BookCallDialog;
