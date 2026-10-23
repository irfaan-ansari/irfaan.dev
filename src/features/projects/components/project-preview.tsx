import type { Project } from "@/features/projects/content/projects"

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <img
      src={project.thumbnail}
      alt={`${project.name} website preview`}
      width={1672}
      height={941}
      loading="lazy"
      decoding="async"
      className="aspect-video w-full rounded-lg border border-border object-contain select-none"
    />
  )
}
