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
import { Skeleton } from "./ui/skeleton";

const ResumeCard = async ({ item }: { item: Resume }) => {
  const projects = RESUME.projects.filter(
    ({ company }) => company === item.company,
  );

  return (
    <AccordionItem
      value={item.company}
      className="relative border-none  before:absolute before:inset-y-0
      before:left-[23.5px] before:w-px before:bg-border after:absolute after:inset-x-0 after:bottom-0
      after:h-px after:bg-border after:mask-l-from-0% last:before:mask-b-from-80% last:after:opacity-0 **:data-[slot=accordion-trigger]:pb-4 not-first:**:data-[slot=accordion-trigger]:pt-4"
    >
      <AccordionTrigger className="group relative z-1 flex flex-1 items-start gap-4 p-0 hover:no-underline focus-visible:ring-0 [&>svg]:hidden">
        <Avatar className="size-12 rounded-lg border-3">
          <AvatarImage
            src={`https://api.dicebear.com/9.x/glass/svg?seed=${item.company[1]}`}
            alt="Work experience logo"
            className="rounded-none"
          />
        </Avatar>

        <div className="flex flex-1 flex-col gap-1 self-center">
          <div className="flex items-center text-base">
            <span className="h-3.5 w-28 rounded-md bg-muted-foreground" />
            <ChevronRight className="size-4 opacity-0 transition ease-out group-hover:translate-x-1 group-hover:opacity-80 group-data-[state=open]:translate-x-1 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-80" />
          </div>
          <div className="font-normal text-muted-foreground">{item.role}</div>
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
          <div className="mb-4 grid grid-cols-2 gap-2 pt-1 pr-1 sm:grid-cols-3">
            {projects.map((project) => (
              <a
                href={project.href as string}
                key={project.title}
                target="_blank"
                className="rounded-lg border ring-offset-1 ring-offset-background transition ease-out hover:ring-2 hover:ring-border focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="aspect-video size-full rounded-[7px] object-cover object-top"
                />
              </a>
            ))}
          </div>
        )}
        <div className="mb-4 flex flex-wrap gap-2 pt-1">
          {item.technologies.map((tech) => (
            <Badge
              key={tech.name}
              style={
                {
                  "--icon-color": `#${tech.icon.hex}`,
                } as React.CSSProperties
              }
              variant="secondary"
              className="gap-2 rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1.5 ring-[1.5px] ring-border/50 hover:ring-(--icon-color)/50"
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
          className="text-[15px] leading-normal text-muted-foreground"
          content={item.description}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default ResumeCard;
