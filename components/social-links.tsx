import { SOCIAL_LINKS } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const SocialLinks = () => {
  return (
    <div className="py-6">
      <h2 className="font-medium italic tracking-wider text-muted-foreground mb-8">
        Connect
      </h2>

      <ul className="flex flex-col">
        {Object.values(SOCIAL_LINKS).map((link, i) => (
          <li
            key={i}
            className="py-5 first:pt-0 relative last:[&>span]:hidden"
            style={
              {
                "--color": `#${link.icon.hex}`,
              } as React.CSSProperties
            }
          >
            <a
              href={link.href}
              target="_blank"
              className="flex items-center outline-0 group/contact"
            >
              <div className="flex items-center gap-3 grow shrink basis-0">
                <span className="h-8 w-14 bg-(--color) inline-flex items-center justify-start rounded-full rounded-br-xs px-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5 text-primary-foreground dark:text-primary transition ease-out group-hover/contact:translate-x-4 group-focus-visible/contact:translate-x-4"
                  >
                    <path d={link?.icon?.path}></path>
                  </svg>
                </span>

                <span className="block">{link.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpRight className="transition ease-out size-4 text-muted-foreground group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 group-focus-visible/contact:translate-x-0.5 group-focus-visible/contact:-translate-y-0.5" />
              </div>
            </a>
            <span className="absolute bottom-0 h-px inset-x-0 bg-border/50 mask-x-from-80%"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
