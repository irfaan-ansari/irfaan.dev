"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { absoluteUrl } from "@/lib/utils";
import { useModalStore } from "@/lib/store";
import { SHARE_OPTIONS } from "@/lib/config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleCheck, Copy, ExternalLink } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";

const ShareDialog = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [url, setUrl] = React.useState("");

  const { copied, copy } = useCopyToClipboard({
    message: "Link copied to clipboard!",
  });

  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("share"));

  React.useEffect(() => {
    const url = absoluteUrl(
      `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`
    );
    setUrl(url);
  }, [pathname, searchParams]);

  return (
    <Dialog open={open} onOpenChange={() => toggle("share")}>
      <DialogContent className="gap-8 bg-popover sm:max-w-md">
        <DialogHeader className="gap-1.5 text-left">
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share my portfolio and help me reach more people.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          {SHARE_OPTIONS.map((option) => (
            <a
              key={option.title}
              href={`${option.href}${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2.5 flex gap-3 border items-center
              bg-secondary/50 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              style={
                { "--icon-color": `#${option.icon.hex}` } as React.CSSProperties
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4! fill-(--icon-color) shrink-0"
              >
                <path d={option.icon.path}></path>
              </svg>
              <span className="flex-1">{option.title}</span>
              <ExternalLink className="size-4 text-muted-foreground" />
            </a>
          ))}
          <p className="text-xs text-center">OR</p>
          <div className="relative">
            <Input defaultValue={url} className="h-12 pr-14" tabIndex={-1} />
            <Button
              size="icon-sm"
              variant="outline"
              className="absolute right-2 top-2"
              disabled={copied}
              onClick={() => copy(url)}
            >
              {copied ? <CircleCheck /> : <Copy />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
