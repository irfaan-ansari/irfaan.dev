"use client";
import { Copy } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const CopyEmailButton = () => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "copy" });
  };
  return (
    <Button
      variant="secondary"
      size="sm"
      className="pr-1.5! text-xs h-8 bg-linear-to-br from-secondary to secondary/50 border border-border/50 bg-transparent rounded-sm text-foreground border-b-2"
      onClick={handleClick}
    >
      <Copy className="text-muted-foreground" />
      Copy email
      <Kbd>E</Kbd>
    </Button>
  );
};

export default CopyEmailButton;
