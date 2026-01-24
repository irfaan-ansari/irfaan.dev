"use client";

import Link from "next/link";
import { SHORTCUT_KEYS } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";
import { PopoverContent } from "@/components/ui/popover";

const menuItems = [...SHORTCUT_KEYS].filter(
  (item) => !item.title.toLowerCase().includes("command")
);

export function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { handleAction } = useNavigation();

  return (
    <PopoverContent
      className="no-scrollbar bg-background/80 border border-border/50 h-full max-h-max w-(--radix-popper-anchor-width) overflow-y-auto rounded-lg px-2 py-4 shadow-md backdrop-blur-xl"
      align="center"
      side="top"
    >
      <div className="flex flex-col gap-12 overflow-auto">
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground text-sm font-medium px-4">
            Menu
          </div>
          <div className="flex flex-col gap-0.5">
            {menuItems.map((item) => (
              <Button variant="link" asChild key={item.title}>
                <Link
                  href={
                    "href" in item ? item.href.replace("#", "") : item.title
                  }
                  className="justify-start text-sm h-auto text-muted-foreground! hover:text-primary! font-normal hover:no-underline!"
                  onClick={(e) => {
                    if (item.type !== "navigate") {
                      e.preventDefault();
                    }
                    handleAction({ ...item });
                    setOpen(false);
                  }}
                >
                  <item.icon className="size-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </PopoverContent>
  );
}
