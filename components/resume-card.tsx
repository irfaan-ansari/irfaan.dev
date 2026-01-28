import Image from "next/image";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Resume } from "@/lib/types";
import { RESUME } from "@/lib/resume";
import { ChevronRight } from "lucide-react";
import Markdown from "@/components/markdown";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ResumeCard = async ({ item }: { item: Resume }) => {
  const projects = RESUME.projects.filter(
    ({ company }) => company === item.company
  );

  return (
    <AccordionItem
      value={item.company}
      className="relative border-none  **:data-[slot=accordion-trigger]:pb-4 not-first:**:data-[slot=accordion-trigger]:pt-4
      before:absolute before:inset-y-0 before:w-px before:bg-border before:left-[23.5px] last:before:mask-b-from-80%
      after:absolute after:inset-x-0 after:h-px after:bg-border after:bottom-0 last:after:opacity-0 after:mask-l-from-0%"
    >
      <AccordionTrigger className="relative z-1 hover:no-underline group focus-visible:ring-0 p-0 flex items-start [&>svg]:hidden flex-1 gap-4">
        <Avatar className="rounded-lg size-12 border-3">
          <AvatarImage
            src={item.logoUrl}
            alt={item.company}
            className="rounded-none"
          />
          <AvatarFallback className="text-xs rounded-none bg-secondary">
            {item.company
              .split(/\s/)
              .reduce((response, word) => (response += word.slice(0, 1)), "")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-0.5 flex-1">
          <span className="text-base inline-flex items-center">
            {item.company}
            <ChevronRight className="size-4 opacity-0 group-hover:opacity-80 group-hover:translate-x-1 transition ease-out group-data-[state=open]:opacity-80 group-data-[state=open]:translate-x-1 group-data-[state=open]:rotate-90" />
          </span>
          <span className="font-normal text-muted-foreground">{item.role}</span>
        </div>

        <div className="flex flex-col items-end gap-0.5 text-xs font-normal">
          <div className="inline-flex items-center gap-1.5 text-muted-foreground">
            {item.start} - {item.end}
          </div>
          <span className="inline-flex items-center gap-1.5 opacity-40">
            {item.location}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pl-8 sm:pl-16">
        {projects.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 pt-1 pr-1">
            {projects.map((project) => (
              <a
                href={project.href as string}
                key={project.title}
                target="_blank"
                className="rounded-lg border ring-offset-1 transition ease-out ring-offset-background focus-visible:ring-2 focus-visible:ring-ring hover:ring-2 hover:ring-border"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="rounded-[7px] aspect-video size-full object-cover object-top"
                />
              </a>
            ))}
          </div>
        )}
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
              className="rounded-md py-1.5 px-2.5 border gap-2 bg-secondary/50 border-border/60 ring-border/50 hover:ring-(--icon-color)/50 ring-[1.5px]"
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
          className="text-muted-foreground text-[15px] leading-normal"
          content={item.description}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default ResumeCard;
