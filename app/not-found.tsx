import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import EmptySection from "@/components/empty-section";
import { ArrowLeft, FileSearch2 } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

const meta = createMetadata({
  title: "Not found",
  description: "The page you're looking for doesn't exist.",
});

export const metadata = meta;

const NotFound = () => {
  return (
    <>
      <div className="px-4 py-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-4 items-center justify-center min-h-24 relative z-1 max-w-sm mx-auto">
          <h1 className="text-xl font-semibold">404 - Not Found</h1>
        </div>
      </div>
      <div className="px-4 py-10 bottom-dashed">
        <EmptySection
          title="Not Found"
          description="The page you're looking for doesn't exist. The page might have been moved or deleted."
          icon={<FileSearch2 className="size-5" />}
          action={
            <Button
              asChild
              variant="secondary"
              className="hover:[&>svg]:-translate-x-0.5"
            >
              <Link href="/">
                <ArrowLeft className="transition ease-out" /> Back to home
              </Link>
            </Button>
          }
        />
      </div>
    </>
  );
};

export default NotFound;
