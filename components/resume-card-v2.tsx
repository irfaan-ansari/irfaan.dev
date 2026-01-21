import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Markdown from "./markdown";
import { Badge } from "./ui/badge";
import { Resume } from "@/lib/types";
import { MapPin } from "lucide-react";

export const ResumeCard = ({ item }: { item: Resume }) => {
  return (
    <div>
      <div className="flex items-start flex-1 gap-4">
        <Avatar className="rounded-sm size-10 overflow-hidden ring-2 ring-muted">
          <AvatarImage
            src={item.logoUrl}
            alt={item.company}
            className="rounded-none"
          />
          <AvatarFallback className="text-xs rounded-none bg-muted">
            {item.company
              .split(/\s/)
              .reduce((response, word) => (response += word.slice(0, 1)), "")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col space-y-0.5 flex-1">
          <span className="font-medium text-base/tight">{item.company}</span>
          <span className="text-sm text-muted-foreground">{item.role}</span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
            <MapPin className="size-3.5" /> {item.location}
          </span>
          <div className="flex items-center text-xs font-normal">
            <span className="h-4 mx-2 border-r"></span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              {item.start} -{" "}
              {item.end ?? (
                <span className="relative flex size-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-500"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-600"></span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="pl-1 sm:pl-16">
        <div className="flex flex-wrap gap-2 mb-4 pt-1">
          {item.technologies.map((tech) => (
            <Badge
              key={tech.name}
              style={
                {
                  "--icon-color": `#${tech.icon.hex}`,
                } as React.CSSProperties
              }
              variant="secondary"
              className="rounded-md py-1.5 px-2.5 gap-2 dark:bg-primary/10 ring-(--icon-color)/50 ring-1"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4! fill-(--icon-color) transition-transform ease-out"
              >
                <path d={tech.icon.path}></path>
              </svg>
              {tech.name}
            </Badge>
          ))}
        </div>

        <Markdown
          className="text-muted-foreground"
          content={item.description}
        />
      </div>
    </div>
  );
};
