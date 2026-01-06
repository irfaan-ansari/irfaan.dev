"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

const BookCallAction = () => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "toggle", toggleKey: "bookCall" });
  };

  return (
    <Button
      className="py-0 pl-1! rounded-full hover:[&>svg]:translate-x-0.5"
      onClick={handleClick}
    >
      <span className="inline-flex items-center justify-center rounded-full size-7 bg-secondary text-primary">
        <PhoneCall className="size-3" />
      </span>
      Book a free call
      <ArrowRight className="transition ease-out" />
    </Button>
  );
};

export default BookCallAction;
