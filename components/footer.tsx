import Link from "next/link";
import { Suspense } from "react";
import { RESUME } from "@/lib/resume";
import VisitCount from "@/components/visit-count";
import { Skeleton } from "@/components/ui/skeleton";
import { LOCATION, SOCIAL_LINKS } from "@/lib/config";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowUpRight, Globe, MapPinned } from "lucide-react";

const { name } = RESUME;

const Footer = () => {
  return (
    <footer className="pb-4 max-w-3xl mx-auto w-full">
      {/* social links */}
      <div className="px-4 py-6 bottom-dashed">
        <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
          Connect
          <span className="text-xs uppercase font-medium text-muted-foreground ml-4">
            Find me online
          </span>
        </h2>

        <div className="divide-y divide-border/50">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              className="flex items-center py-4 group/contact first:pt-0"
            >
              <div className="flex items-center gap-3 grow shrink basis-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-muted-foreground transition ease-out group-hover/contact:text-primary"
                >
                  <path d={link?.icon?.path}></path>
                </svg>

                <span>{link.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="transition ease-out size-4 text-muted-foreground group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* name */}
      <div className="px-4 py-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col items-center justify-center relative gap-3">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Designed and developed by
          </span>
          <span className="text-background drop-shadow-md text-4xl sm:text-7xl uppercase font-bold dark:drop-shadow-input">
            {name}
          </span>
        </div>
      </div>

      <div className="px-4 py-4 text-sm bottom-dashed">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="inline-flex gap-2 items-center hover:[&_svg]:translate-x-4 border rounded-full py-1 pl-1 pr-3">
            <span className="h-8 w-14 justify-start px-3 rounded-full bg-[#FF949D] text-black inline-flex items-center rounded-br-none">
              <Globe className="size-4 transition duration-500" />
            </span>
            <div className="text-sm font-medium inline-flex items-center gap-2">
              Visitor
              <Suspense fallback={<Skeleton className="h-4 w-14" />}>
                <VisitCount />
              </Suspense>
            </div>
          </div>

          <div className="flex gap-2 items-center text-muted-foreground">
            <Link
              href={LOCATION.link}
              target="_blank"
              className="hover:underline hover:text-primary underline-offset-4 inline-flex items-center gap-1.5 hover:[&_.arrow-icon]:translate-x-0.5 hover:[&_.arrow-icon]:-translate-y-0.5"
            >
              <MapPinned className="size-4" />
              {LOCATION.name}
              <ArrowUpRight className="transition ease-out size-4 arrow-icon" />
            </Link>
            <span className="w-0.5 bg-border shrink-0 h-3"></span>
            <Link
              href="/sitemap.xml"
              target="_blank"
              className="hover:underline hover:text-primary underline-offset-4 inline-flex items-center gap-1.5 hover:[&>svg]:translate-x-0.5 hover:[&>svg]:-translate-y-0.5"
            >
              Sitemap
              <ArrowUpRight className="transition ease-out size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
