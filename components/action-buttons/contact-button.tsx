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
        variant="outline"
        size="sm"
        className="rounded-full group/button hover:[&_svg]:translate-x-7 pl-0.5 py-0.5 h-auto  border-border/50!"
        onClick={handleClick}
      >
        <span className="bg-fuchsia-400 h-8 rounded-full px-3 w-16 justify-start hover:bg-fuchsia-400 inline-flex items-center">
          <MailOpen className="text-black transition duration-500 size-3.5" />
        </span>
        Get in touch!
      </Button>
    </Tooltip>
  );
};

export default ContactButton;
