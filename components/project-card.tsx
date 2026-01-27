"use client";
import React from "react";
import Image from "next/image";
import { Project } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, generateColorsFromHex } from "@/lib/utils";
import { useExtractColors } from "react-extract-colors";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { title, description, className, href, technologies, image, source } =
    project;

  const [colors, setColors] = React.useState({
    dominantColor: "",
    primary: "",
    primaryForeground: "",
  });

  const { darkerColor, lighterColor, loading } = useExtractColors(image, {
    format: "hex",
    sortBy: "dominance",
  });

  React.useEffect(() => {
    if (!darkerColor) return;
    const colors = generateColorsFromHex(darkerColor!);
    setColors(colors);
  }, [loading]);

  return (
    <div
      className={cn(
        "bg-linear-to-br from-(--color-1) to-(--color-2) overflow-hidden rounded-lg ring-[3px] transition ease-out group/project ring-border relative animate-pulse hover:ring-offset-1 ring-offset-background slide-in-from-bottom-4",
        "data-[loaded=false]:*:data-[slot=image]:opacity-0 data-[loaded=false]:*:data-[slot=image]:translate-y-2",
        "data-[loaded=true]:*:data-[slot=image]:animate-in data-[loaded=true]:*:data-[slot=image]:fade-in-50 data-[loaded=true]:*:data-[slot=image]:slide-in-from-bottom-2",
        "data-[loaded=false]:*:data-[slot=info]:opacity-0 data-[loaded=false]:*:data-[slot=info]:translate-y-2",
        "data-[loaded=true]:*:data-[slot=info]:animate-in data-[loaded=true]:*:data-[slot=info]:fade-in-50 data-[loaded=true]:*:data-[slot=info]:slide-in-from-bottom-2",
        "data-[loaded=true]:animate-none transition-colors duration-300 hover:*:data-[slot=image]:-translate-y-1",
        className
      )}
      data-loaded={!loading}
      style={
        {
          "--color-1": colors.dominantColor || "var(--color-accent)",
          "--color-2": lighterColor || "var(--color-secondary)",
          "--primary": colors.primary,
          "--primary-foreground": colors.primaryForeground,
        } as React.CSSProperties
      }
    >
      {image && (
        <div
          className="absolute transition ease-in-out duration-200"
          data-slot="image"
        >
          <Image
            src={image}
            loading={index <= 4 ? "eager" : "lazy"}
            alt={title}
            width={500}
            height={500}
            quality={10}
            className={`object-cover origin-top-right rounded object-top h-full overflow-hidden transition -rotate-5`}
          />
        </div>
      )}

      <div
        className="flex flex-col p-6 z-1 relative transition ease-in-out duration-200"
        data-slot="info"
      >
        <h3 className="mb-3 text-lg font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="mb-6 overflow-hidden grow-0 shrink text-primary/80 text-sm">
          {description}
        </p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge
                variant="secondary"
                className="text-xs ring-2 ring-(--color-1)/50 border border-primary/10 rounded-sm bg-(--color-1) shadow-sm text-primary"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {(href || source) && (
          <div className="flex gap-4">
            {source && (
              <Button
                asChild
                size="sm"
                className="h-7! opacity-70 hover:[&>svg:last-child]:translate-x-0.5 hover:[&>svg:last-child]:-translate-y-0.5"
              >
                <a href={source} target="_blank">
                  Source
                  <ArrowUpRight className="transition ease-out size-3.5" />
                </a>
              </Button>
            )}
            {href && (
              <Button
                asChild
                size="sm"
                className="h-7! hover:[&>svg:last-child]:translate-x-0.5 hover:[&>svg:last-child]:-translate-y-0.5 "
              >
                <a href={href} target="_blank">
                  Website
                  <ArrowUpRight className="transition ease-out size-3.5" />
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
