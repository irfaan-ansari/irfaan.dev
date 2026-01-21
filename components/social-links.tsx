import { SOCIAL_LINKS } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="px-4 py-6 bottom-dashed">
      <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
        Connect
      </h2>

      <ul className="flex flex-col">
        {SOCIAL_LINKS.map((link, i) => (
          <li
            key={i}
            className="py-5 group/contact first:pt-0 relative last:[&>span]:hidden"
          >
            <a href={link.href} target="_blank" className="flex items-center">
              <div className="flex items-center gap-3 grow shrink basis-0">
                <span className="size-9 bg-linear-to-br from-secondary to secondary/50 border border-border/50 rounded-sm inline-flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-muted-foreground transition ease-out group-hover/contact:text-primary"
                  >
                    <path d={link?.icon?.path}></path>
                  </svg>
                </span>

                <span className="block">{link.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="transition ease-out size-4 text-muted-foreground group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5" />
              </div>
            </a>
            <span className="absolute bottom-0 h-px inset-x-0 bg-border mask-radial-at-center mask-b-from-50% mask-b-to-80%"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
