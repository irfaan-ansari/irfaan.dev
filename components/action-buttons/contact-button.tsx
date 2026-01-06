"use client";
import { MailOpen } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import Tooltip from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const ContactButton = () => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "toggle", toggleKey: "contact" });
  };
  return (
    <Tooltip
      content={
        <span>
          Click or press <Kbd>C</Kbd>
        </span>
      }
    >
      <Button
        variant="secondary"
        size="sm"
        className="bg-fuchsia-400 h-8 rounded-full mx-2 px-3 w-16 justify-start hover:bg-fuchsia-400 hover:[&_svg]:translate-x-7"
        onClick={handleClick}
      >
        <MailOpen className="text-black transition duration-500 size-3.5" />
      </Button>
    </Tooltip>
  );
};

export default ContactButton;
