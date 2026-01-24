import React from "react";
import { RESUME } from "@/lib/resume";
import { createMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/project-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Divider } from "@/components/ui/divider";

const { projects } = RESUME;

const meta = createMetadata({
  title: "Projects",
  description:
    "A few real-world projects I’ve worked on, where ideas turned into usable, well-designed products.",
  path: "/projects",
});
export const metadata = meta;

const Projects = () => {
  return (
    <React.Fragment>
      {/* intro */}
      <section className="py-10 relative">
        <DotPattern className="mask-x-from-90% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-2 items-start justify-center relative z-1 max-w-sm">
          <h1 className="font-medium italic tracking-wider">Projects</h1>
          <p className="leading-relaxed text-sm text-muted-foreground">
            A few real-world projects I’ve worked on, where ideas turned into
            usable, well-designed products.
          </p>
        </div>
      </section>
      <Divider />
      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard index={index} project={project} key={project.title} />
          ))}
        </div>
      </section>
      <Divider />
    </React.Fragment>
  );
};

export default Projects;
