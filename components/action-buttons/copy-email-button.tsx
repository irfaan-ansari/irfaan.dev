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
      size="sm"
      variant="outline"
      className="pr-1! pl-2! border border-border/50! h-7"
      onClick={handleClick}
    >
      <Copy className="text-muted-foreground" />
      Copy email
      <Kbd>E</Kbd>
    </Button>
  );
};

export default CopyEmailButton;
