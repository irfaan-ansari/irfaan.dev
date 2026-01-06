import React from "react";
import { cn } from "@/lib/utils";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
}
const Preview = async ({ children, className }: PreviewProps) => {
  // const module = import(name);
  // const { AnotherComponent } = await module;
  return (
    <div
      className={cn(
        "rounded-md border flex flex-col min-h-50 items-center justify-center bg-secondary/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Preview;
