import React from "react";
import { RESUME } from "@/lib/resume";
import { createMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/project-card";
import { DotPattern } from "@/components/ui/dot-pattern";

const { projects } = RESUME;

const meta = createMetadata({
  title: "Projects",
  description:
    "Web development projects showcasing modern UI design, frontend architecture, and real-world applications",
  path: "/projects",
  ogImage: "/og/projects.png",
});
export const metadata = meta;

const Projects = () => {
  return (
    <React.Fragment>
      {/* intro */}
      <section className="px-4 py-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-4 items-center justify-center min-h-24 relative max-w-sm mx-auto">
          <h1 className="text-xl font-semibold">Projects</h1>
          <p className="leading-relaxed max-w-prose text-center">
            Projects showcasing modern UI design, frontend architecture, and
            real-world applications
          </p>
        </div>
      </section>
      <section className="px-4 py-10 bottom-dashed">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard index={index} project={project} key={project.title} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
