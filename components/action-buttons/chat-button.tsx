"use client";

import { Kbd } from "@/components/ui/kbd";
import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const ChatButton = () => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "toggle", toggleKey: "chat" });
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className="pr-1! pl-2! border border-border/50! h-7"
      onClick={handleClick}
    >
      <MessageCircleMore className="text-muted-foreground" />
      Chat
      <Kbd>O</Kbd>
    </Button>
  );
};

export default ChatButton;
