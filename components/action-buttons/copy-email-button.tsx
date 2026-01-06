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
      className="pr-1.5 text-xs"
      onClick={handleClick}
    >
      <Copy className="text-muted-foreground" />
      Copy email
      <Kbd>E</Kbd>
    </Button>
  );
};

export default CopyEmailButton;
