import React from "react";
import { Skill } from "@/lib/types";
import { Badge } from "./ui/badge";

const Skills = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-6 last:mb-0 flex flex-col sm:flex-row gap-4 items-start">
      <h3 className="font-medium uppercase text-sm min-w-3xs grow-0 shrink-0 text-muted-foreground">
        {skill.title}
      </h3>

      <div className="flex gap-3 flex-wrap">
        {skill.items.map((sk) => (
          <Badge
            key={sk.name}
            variant="outline"
            className="rounded-sm px-2.5 py-1.5 bg-secondary/50 border-border/60 gap-2 ring-2 ring-border/50 hover:ring-(--icon-color)/50 transition ease-out cursor-default"
            style={{ "--icon-color": `#${sk.icon.hex}` } as React.CSSProperties}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4.5! fill-(--icon-color) transition-transform ease-out"
            >
              <path d={sk.icon.path}></path>
            </svg>
            <p className="text-xs/tight text-center">{sk.name}</p>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
