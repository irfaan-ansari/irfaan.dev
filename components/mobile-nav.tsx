"use client";
import React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";
import { NAVIGATION, SHORTCUT_KEYS } from "@/lib/config";

const menuItems = [...NAVIGATION, ...SHORTCUT_KEYS].filter(
  (item) => !item.title.toLowerCase().includes("command")
);

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { handleAction } = useNavigation();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          className="extend-touch-target touch-manipulation md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M10 5h10" stroke={open ? "none" : "currentColor"} />
            <path d="M4 19h10" stroke={open ? "none" : "currentColor"} />

            <path
              d="M4 12h16"
              data-open={open}
              className="origin-center data-[open=true]:-rotate-45 transition-transform duration-200"
            />
            <path
              d="M4 12h16"
              data-open={open}
              className="origin-center data-[open=true]:rotate-45 transition-transform duration-200"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur-md"
        align="center"
        side="bottom"
        sideOffset={17}
      >
        <div className="flex flex-col gap-12 overflow-auto px-4.5 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium px-4">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <Button variant="link" asChild key={item.title}>
                  <Link
                    href={
                      "href" in item ? item.href.replace("#", "") : item.title
                    }
                    className="justify-start text-lg! font-medium"
                    onClick={(e) => {
                      if (item.type !== "navigate") {
                        e.preventDefault();
                      }
                      handleAction({ ...item });
                      setOpen(false);
                    }}
                  >
                    <item.icon className={`size-5 }`} />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
