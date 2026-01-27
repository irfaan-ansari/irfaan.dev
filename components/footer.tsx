import Link from "next/link";
import { Suspense } from "react";
import { LOCATION } from "@/lib/config";
import { FooterSVG } from "./footer-svg";
import { SocialLinks } from "./social-links";
import VisitCount from "@/components/visit-count";
import { Divider } from "@/components/ui/divider";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

const Footer = () => {
  return (
    <footer className="pb-4 w-full">
      {/* social links */}

      <SocialLinks />
      <Divider />
      {/* name */}
      <div className="py-10 relative">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-secondary" />
        <div className="flex flex-col items-start justify-center relative gap-3">
          <span className="text-xs font-medium italic text-muted-foreground">
            Designed and developed by
          </span>

          <FooterSVG />
        </div>
      </div>
      <Divider />
      <div className="py-4 text-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="inline-flex gap-2 items-center border rounded-full py-0.5 pl-0.5 pr-3">
            <span className="size-8 justify-center rounded-full bg-[#BDEE63] text-black inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 transition duration-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12h.01" />
                <path d="M3 12h.01" />
                <path d="M5 15h.01" />
                <path d="M5 9h.01" />
                <path d="M19 15h.01" />
                <path d="M12 18h.01" />
                <path d="M12 6h.01" />
                <path d="M8 17h.01" />
                <path d="M8 7h.01" />
                <path d="M16 17h.01" />
                <path d="M16 7h.01" />
                <path d="M19 9h.01" />
              </svg>
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

      <Divider />
      {/* spacer */}
      <div className="h-20"></div>
    </footer>
  );
};

export default Footer;
