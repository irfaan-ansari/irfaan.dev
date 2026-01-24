import Link from "next/link";
import { cn } from "@/lib/utils";
import { Kbd } from "@/components/ui/kbd";
import Tooltip from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import BlogShareButton from "@/components/share-button";
import { HotKey } from "@/components/misc/keyboard-shortcut";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

const NavButtons = ({
  navigation,
  className,
  homeUrl,
  homeShortcutKey,
}: {
  navigation: any;
  className?: string;
  homeUrl: string;
  homeShortcutKey: string;
}) => {
  const { previous, next } = navigation;

  return (
    <div className={cn("py-4 flex gap-2", className)}>
      {/* register shortcutk key previous and next */}
      <HotKey
        type="navigate"
        href={previous?.url}
        shortcutKey="ArrowLeft"
        enabled={!!previous?.url}
      />
      <HotKey
        type="navigate"
        href={next?.url}
        shortcutKey="ArrowRight"
        enabled={!!next?.url}
      />

      {/* back button */}
      <Button
        asChild
        variant="outline"
        size="sm"
        className="hover:[&>svg]:-translate-x-0.5 border border-border/50! h-7"
      >
        <Link href={homeUrl}>
          <ChevronLeft className="transition ease-out" /> Back
          <Kbd>{homeShortcutKey}</Kbd>
        </Link>
      </Button>

      <div className="flex justify-end gap-2 ml-auto">
        <BlogShareButton />

        {/* previous button <- */}
        <Tooltip
          content={
            <span className="inline-flex items-center justify-center gap-2">
              Previous
              <Kbd>
                <ArrowLeft className="size-3.5" />
              </Kbd>
            </span>
          }
        >
          <Button
            variant="outline"
            size="icon-sm"
            asChild
            className="size-7 border-border/50!"
          >
            {previous?.url ? (
              <Link href={previous.url}>
                <ArrowLeft />
              </Link>
            ) : (
              <span className="opacity-50">
                <ArrowLeft />
              </span>
            )}
          </Button>
        </Tooltip>

        {/* next button -> */}
        <Tooltip
          content={
            <span className="inline-flex items-center justify-center gap-2">
              Next
              <Kbd>
                <ArrowRight className="size-3.5" />
              </Kbd>
            </span>
          }
        >
          <Button
            variant="outline"
            size="icon-sm"
            asChild
            className="size-7 border-border/50!"
          >
            {next?.url ? (
              <Link href={next.url}>
                <ArrowRight />
              </Link>
            ) : (
              <span className="opacity-50">
                <ArrowRight />
              </span>
            )}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default NavButtons;
