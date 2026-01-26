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
        <div className="flex flex-col gap-2 items-start justify-center relative z-1 max-w-sm">
          <h1 className="font-medium italic tracking-wider">Not found</h1>
          <p className="leading-relaxed text-sm text-muted-foreground">
            The page you're looking for doesn't exist. The page might have been
            moved or deleted.
          </p>
          <Button
            asChild
            variant="outline"
            className="hover:[&>svg]:-translate-x-0.5 border border-border/50! h-7 mt-4"
          >
            <Link href="/">
              <ArrowLeft className="transition ease-out" /> Back to home
            </Link>
          </Button>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default NotFound;
