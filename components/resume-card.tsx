import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Resume } from "@/lib/types";
import { MapPin } from "lucide-react";
import Markdown from "@/components/markdown";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ResumeCard = async ({ item }: { item: Resume }) => {
  return (
    <AccordionItem
      value={item.company}
      className="relative border-none after:absolute after:h-px focus-within:after:bg-border hover:after:bg-border after:duration-300 after:transition after:bg-border/50 after:left-16 after:right-0 after:bottom-0 first:**:data-[slot=accordion-trigger]:pt-0"
    >
      <AccordionTrigger className="relative items-start hover:no-underline focus-visible:ring-0 hover:[&>svg]:translate-y-1 focus-visible:[&>svg]:translate-y-1">
        <div className="flex items-start flex-1 gap-4">
          <Avatar className="rounded-lg size-12 border-3">
            <AvatarImage
              src={item.logoUrl}
              alt={item.company}
              className="rounded-none"
            />
            <AvatarFallback className="text-xs rounded-none bg-muted/50">
              {item.company
                .split(/\s/)
                .reduce((response, word) => (response += word.slice(0, 1)), "")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-0.5 flex-1">
            <span className="text-base">{item.company}</span>
            <span className="font-normal">{item.role}</span>
            <div className="flex items-center text-xs font-normal">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-3.5" /> {item.location}
              </span>
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
      </AccordionTrigger>
      <AccordionContent className="pl-1 sm:pl-16">
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
              className="rounded-md py-2 px-3 gap-2 dark:bg-primary/10 ring-(--icon-color)/50 ring-2"
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
      </AccordionContent>
    </AccordionItem>
  );
};

export default ResumeCard;
