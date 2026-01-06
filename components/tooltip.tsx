"use client";

import {
  Tooltip as TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
};
const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipProvider>
  );
};

export default Tooltip;
