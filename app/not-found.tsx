import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import EmptySection from "@/components/empty-section";
import { ArrowLeft, FileSearch2 } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Divider } from "@/components/ui/divider";

const meta = createMetadata({
  title: "Not found",
  description: "The page you're looking for doesn't exist.",
});

export const metadata = meta;

const NotFound = () => {
  return (
    <>
      <div className="py-10 relative">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-4 items-center justify-center min-h-20 relative z-1 max-w-sm mx-auto">
          <h1 className="text-xl font-semibold">404 - Not Found</h1>
        </div>
      </div>
      <Divider />
      <div className="py-10">
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
      <Divider />
    </>
  );
};

export default NotFound;
