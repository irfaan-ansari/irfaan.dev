"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToc } from "@/hooks/use-toc";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOCItemType } from "fumadocs-core/toc";
import { CircularProgress } from "@/components/ui/circular-progress";

const Toc = ({ toc }: { toc: TOCItemType[] }) => {
  const [open, setOpen] = React.useState(false);

  const { activeIndex } = useToc(toc);
  const activeItem = toc[activeIndex];

  const progress = React.useMemo(() => {
    return Math.round(((activeIndex + 1) / toc.length) * 100);
  }, [activeIndex]);

  if (!toc?.length) {
    return null;
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center w-full justify-start h-10 border  data-[state=open]:bg-secondary! data-[state=open]:border-border data-[state=open]:rounded-b-none"
          variant="secondary"
          onClick={() => setOpen(!open)}
        >
          <CircularProgress
            value={progress}
            size={20}
            strokeWidth={1.5}
            showLabel={false}
            shape="square"
          />
          <span className="text-sm text-muted-foreground min-w-0 flex-[1_1_0] truncate text-left">
            {toc[activeIndex]?.title ?? "On this page"}
          </span>

          <ChevronDown className="size-4 ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        side="bottom"
        sideOffset={0}
        avoidCollisions={false}
        className="w-(--radix-popover-trigger-width) rounded-t-none no-scrollbar h-full max-h-(--radix-popper-available-height) border-b-4 bg-secondary/70 backdrop-blur-3xl"
      >
        <div className="flex flex-col gap-2 text-sm">
          {toc.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground no-underline transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-6"
              data-active={item.url === activeItem?.url}
              data-depth={item.depth}
            >
              {item.title}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Toc;
