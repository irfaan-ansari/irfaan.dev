"use client";
import React from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CircleDashed,
  CornerDownLeftIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  CONTACT_LINKS,
  NAVIGATION,
  SOCIAL_LINKS,
  SHORTCUT_KEYS,
} from "@/lib/config";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/lib/store";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { useDocsSearch } from "fumadocs-core/search/client";
import { Loader } from "@/components/animate-ui/icons/loader";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { useNavigation } from "@/hooks/use-navigation";

const menuItems = [...NAVIGATION, ...SHORTCUT_KEYS].filter(
  (item) => !item.title.toLowerCase().includes("command")
);

const CommandMenu = () => {
  const router = useRouter();
  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("command"));
  const { query, search, setSearch } = useDocsSearch({
    type: "fetch",
  });

  const { handleAction } = useNavigation();
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const handleSearchChange = React.useCallback(
    (value: string) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = setTimeout(() => {
        setSearch(value);
      }, 500);
    },
    [setSearch]
  );

  // Cleanup timeout on unmount.
  React.useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    toggle("command");
    command();
  }, []);

  return (
    <Dialog open={open} onOpenChange={() => toggle("command")}>
      <DialogContent
        showCloseButton={false}
        className="rounded-md border top-6 translate-y-0 sm:top-[50%] sm:translate-y-[-50%] sm:max-w-md p-0 pb-11 bg-clip-border overflow-hidden bg-background dark:bg-secondary/70 backdrop-blur-2xl border-b-4"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search...</DialogTitle>
        </DialogHeader>

        <Command
          className="rounded-none bg-transparent 
          **:data-[slot=command-item]:h-9 **:data-[selected=true]:bg-input **:data-[selected=true]:[&_.arrow-icon]:opacity-100 **:data-[slot=command-input-wrapper]:h-12! **:data-[slot=command-group]:p-2!"
          filter={(value, search, keywords) => {
            handleSearchChange(search);
            const extendValue = value + " " + (keywords?.join(" ") || "");
            if (extendValue.toLowerCase().includes(search.toLowerCase())) {
              return 1;
            }
            return 0;
          }}
        >
          <div className="relative">
            <CommandInput placeholder="Search..." />
            {query.isLoading && (
              <div className="absolute z-10 flex items-center justify-center -translate-y-1/2 pointer-events-none top-1/2 right-3">
                <AnimateIcon animate>
                  <Loader className="size-4" />
                </AnimateIcon>
              </div>
            )}
          </div>

          <CommandList className="no-scrollbar max-h-[min(460px,80vh)] min-h-115 scroll-pt-2 scroll-pb-1.5 outline-none">
            <CommandEmpty className="py-12 text-sm text-center text-muted-foreground">
              {query.isLoading ? "Searching..." : "No results found."}
            </CommandEmpty>

            {/* Menu */}
            <CommandGroup heading="Menu">
              {menuItems.map((item) => (
                <CommandItem
                  key={item.title}
                  onSelect={() => {
                    runCommand(() => handleAction(item));
                  }}
                >
                  <item.icon />
                  {item.title}
                  <Kbd className="ml-auto">{item.shortcutKey}</Kbd>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />

            {/* Social Links */}
            <CommandGroup heading="Stay connected">
              {SOCIAL_LINKS.map((item) => (
                <CommandItem
                  key={item.title}
                  value={item.href}
                  onSelect={() => {
                    runCommand(() => router.push(item.href));
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-muted-foreground"
                  >
                    <path d={item.icon.path}></path>
                  </svg>
                  {item.label}
                  <ArrowRight className="ml-auto opacity-0 arrow-icon" />
                </CommandItem>
              ))}
              {CONTACT_LINKS.map((item) => (
                <CommandItem key={item.href}>
                  <item.icon />
                  {item.label}
                  <ArrowRight className="ml-auto opacity-0 arrow-icon" />
                </CommandItem>
              ))}
            </CommandGroup>

            {/* search result */}
            <SearchResults
              open={open}
              toggle={toggle}
              query={query}
              search={search}
            />
          </CommandList>
        </Command>
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center h-10 gap-2 px-4 font-medium border-t bg-secondary">
          <div className="flex items-center gap-2 text-xs">
            Exit
            <Kbd>Esc</Kbd>
          </div>

          <div className="flex items-center gap-2 ml-auto text-xs">
            Navigate
            <KbdGroup>
              <Kbd>
                <ArrowUp />
              </Kbd>
              <Kbd>
                <ArrowDown />
              </Kbd>
            </KbdGroup>
          </div>
          <div className="h-5 border-r-2 border-input"></div>
          <div className="flex items-center gap-2 text-xs">
            Select
            <Kbd>
              <CornerDownLeftIcon />
            </Kbd>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommandMenu;
type Query = Awaited<ReturnType<typeof useDocsSearch>>["query"];
function SearchResults({
  toggle,
  query,
  search,
}: {
  open: boolean;
  toggle: (key: "command") => void;
  query: Query;
  search: string;
}) {
  const router = useRouter();

  const uniqueResults =
    query.data && Array.isArray(query.data)
      ? query.data.filter(
          (item, index, self) =>
            !(
              item.type === "text" &&
              item.content.trim().split(/\s+/).length <= 1
            ) && index === self.findIndex((t) => t.content === item.content)
        )
      : [];

  if (!search.trim()) {
    return null;
  }

  if (!query.data || query.data === "empty") {
    return null;
  }

  if (query.data && uniqueResults.length === 0) {
    return null;
  }

  return (
    <CommandGroup heading="Search Results">
      {uniqueResults.map((item) => {
        return (
          <CommandItem
            key={item.id}
            data-type={item.type}
            onSelect={() => {
              router.push(item.url);
              toggle("command");
            }}
            keywords={[item.content]}
            value={`${item.content} ${item.type}`}
          >
            <CircleDashed />
            <div className="text-sm line-clamp-1">{item.content}</div>
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}
