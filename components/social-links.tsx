import { SOCIAL_LINKS } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export const SocialLinks = () => {
  return (
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
  );
};
