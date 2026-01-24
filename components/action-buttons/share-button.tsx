"use client";
import { cn } from "@/lib/utils";
import { Share } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const ShareButton = ({ className }: { className?: string }) => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "toggle", toggleKey: "share" });
  };
  return (
    <Button
      size="sm"
      variant="outline"
      className={cn("pr-1! pl-2! border border-border/50! h-7", className)}
      onClick={handleClick}
    >
      <Share />
      <span>Share</span>
      <Kbd>S</Kbd>
    </Button>
  );
};

export default ShareButton;
