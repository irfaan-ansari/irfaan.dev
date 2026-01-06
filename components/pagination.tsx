import Link from "next/link";
import { Kbd } from "@/components/ui/kbd";
import Tooltip from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HotKey } from "@/components/misc/keyboard-shortcut";

const Pagination = async ({
  fn,
  perPage = 4,
  searchParams,
}: {
  fn: (page: number, perpage: number) => Record<string, number | any>;
  perPage?: number;
  searchParams: Promise<Record<string, string | undefined>>;
}) => {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { pages, total } = fn(currentPage, perPage);

  // item range
  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, total);

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex-1">
        {pages >= currentPage && (
          <span className=" text-sm text-muted-foreground">
            Showing {startItem}–{endItem} of {total} posts
          </span>
        )}
      </div>

      <HotKey
        type="navigate"
        href={`/blog?page=${currentPage - 1}`}
        shortcutKey="ArrowLeft"
        enabled={currentPage > 1}
      />
      <HotKey
        type="navigate"
        href={`?page=${currentPage + 1}`}
        shortcutKey="ArrowRight"
        enabled={currentPage < pages}
      />

      {/* previous */}
      <Tooltip
        content={
          <span className="inline-flex items-center justify-center gap-2">
            Previous
            <Kbd>
              <ArrowLeft />
            </Kbd>
          </span>
        }
      >
        <Button asChild variant="secondary" size="icon-sm">
          {currentPage <= 1 ? (
            <span className="opacity-50">
              <ArrowLeft className="size-4" />
            </span>
          ) : (
            <Link href={`/blog?page=${currentPage - 1}`}>
              <ArrowLeft className="size-4" />
            </Link>
          )}
        </Button>
      </Tooltip>

      {/* next */}
      <Tooltip
        content={
          <span className="inline-flex items-center justify-center gap-2">
            Next
            <Kbd>
              <ArrowRight />
            </Kbd>
          </span>
        }
      >
        <Button asChild variant="secondary" size="icon-sm">
          {currentPage >= pages ? (
            <span className="opacity-50">
              <ArrowRight className="size-4" />
            </span>
          ) : (
            <Link href={`?page=${currentPage + 1}`}>
              <ArrowRight className="size-4" />
            </Link>
          )}
        </Button>
      </Tooltip>
    </div>
  );
};

export default Pagination;
