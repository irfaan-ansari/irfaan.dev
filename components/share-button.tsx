"use client";
import { Share } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import Tooltip from "@/components/tooltip";
import { useModalStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

const ShareButton = () => {
  const toggle = useModalStore(({ toggle }) => toggle);
  return (
    <Tooltip
      content={
        <span className="inline-flex items-center justify-center gap-2">
          Share
          <Kbd>S</Kbd>
        </span>
      }
    >
      <Button
        variant="secondary"
        size="icon-sm"
        onClick={() => toggle("share")}
      >
        <Share />
      </Button>
    </Tooltip>
  );
};

export default ShareButton;
