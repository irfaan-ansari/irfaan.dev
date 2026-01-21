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
      variant="secondary"
      size="sm"
      className="pr-1.5! text-xs h-8 bg-linear-to-br from-secondary to secondary/50 border border-border/50 bg-transparent rounded-sm text-foreground border-b-2"
      onClick={handleClick}
    >
      <MessageCircleMore className="text-muted-foreground" />
      Chat
      <Kbd>O</Kbd>
    </Button>
  );
};

export default ChatButton;
