"use client";
import Link from "next/link";
import { Kbd } from "./ui/kbd";
import { Button } from "./ui/button";
import { Ellipsis } from "lucide-react";
import { useModalStore } from "@/lib/store";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/hooks/use-navigation";
import { Popover, PopoverAnchor, PopoverContent } from "./ui/popover";
import { NAVIGATION, SHORTCUT_KEYS, SOCIAL_LINKS } from "@/lib/config";

export const NavigationMenu = () => {
  const pathname = usePathname();
  const { handleAction } = useNavigation();
  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("menu"));

  return (
    <Popover open={open} onOpenChange={() => toggle("menu")} modal>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-1 h-20 mask-[linear-gradient(0deg,#000_30%,transparent)] backdrop-blur-md [-webkit-mask-image:linear-gradient(0deg,#000_30%,transparent)]" />
      <div className="fixed bottom-4 left-1/2 z-10 h-fit w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border border-border/50 bg-background/80 shadow-md backdrop-blur-md sm:bottom-6 sm:w-auto dark:bg-secondary/60">
        <PopoverAnchor className="pointer-events-none opacity-0" />
        <div className="flex flex-row justify-between gap-4 px-10 py-4 sm:gap-8">
          {NAVIGATION.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <div className="relative" key={link.href}>
                <Link
                  onClick={(e) => {
                    if (link.type !== "navigate") {
                      e.preventDefault();
                    }
                    handleAction({ ...link });
                  }}
                  href={link.href}
                  className={`flex flex-col relative items-center gap-0.5 justify-center text-muted-foreground focus-visible:scale-110 transition ease-out hover:text-primary focus-visible:text-primary outline-0
                  ${isActive ? "scale-110 text-primary" : ""}`}
                >
                  <link.icon className="size-4" />
                  <span className="text-xs">{link.title}</span>
                  <span className="absolute -top-1 -right-1 text-[9px] text-highlight">
                    {link.shortcutKey}
                  </span>
                </Link>
              </div>
            );
          })}

          <Button
            onClick={() => toggle("menu")}
            className={`relative flex flex-col items-center justify-between text-muted-foreground gap-0.5 hover:text-primary p-0! focus-visible:scale-110 focus-visible:text-primary focus-visible:ring-0 h-auto bg-transparent hover:bg-transparent data-[state=open]:scale-110 data-[state=open]:text-primary
              ${open ? "scale-110 text-primary" : ""}`}
          >
            <Ellipsis className="size-4" />
            <span className="text-xs">More</span>
            <span className="absolute -top-1 -right-1 text-[9px] text-highlight">
              M
            </span>
          </Button>
        </div>
      </div>

      <PopoverContent
        className="no-scrollbar h-full max-h-[calc(var(--radix-popper-available-height)-1rem)] w-(--radix-popper-anchor-width) overflow-y-auto rounded-lg border-border/50 bg-background/80 px-2 py-4 shadow-none backdrop-blur-md sm:max-h-[calc(var(--radix-popper-available-height)-2rem)] dark:bg-secondary/60"
        align="center"
        side="top"
        sideOffset={0}
      >
        <div className="flex flex-col gap-12 overflow-auto">
          <div className="flex flex-col gap-2">
            <div className="px-3 text-sm font-medium text-muted-foreground italic">
              Shortcuts
            </div>
            <div className="flex flex-col gap-0.5">
              {[...NAVIGATION, ...SHORTCUT_KEYS].map((item) => (
                <Button
                  variant="link"
                  asChild
                  key={item.title}
                  className="group h-auto justify-start text-xs font-normal"
                >
                  <Link
                    href={
                      "href" in item ? item.href.replace("#", "") : item.title
                    }
                    onClick={(e) => {
                      if (item.type !== "navigate") {
                        e.preventDefault();
                      }
                      handleAction({ ...item });
                      toggle("menu");
                    }}
                  >
                    <item.icon className="size-4 text-muted-foreground" />
                    {item.title}
                    <span className="ml-auto no-underline!">
                      <Kbd>
                        {item.shortcutKey.includes("mod")
                          ? "⌘+K"
                          : item.shortcutKey}
                      </Kbd>
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
            <div className="px-3 text-sm font-medium text-muted-foreground italic">
              Social
            </div>
            <div className="flex flex-col gap-0.5">
              {Object.values(SOCIAL_LINKS).map((item) => (
                <Button variant="link" asChild key={item.href}>
                  <a
                    target="_blank"
                    href={item.href}
                    className="h-auto justify-start text-sm font-normal"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-muted-foreground"
                    >
                      <path d={item.icon.path}></path>
                    </svg>
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
