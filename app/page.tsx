import Link from "next/link";
import { RESUME } from "@/lib/resume";
import About from "@/components/about";
import Skills from "@/components/skills";
import { Kbd } from "@/components/ui/kbd";
import Logo from "@/components/icons/logo";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeCard from "@/components/resume-card";
import ProjectCard from "@/components/project-card";
import { Accordion } from "@/components/ui/accordion";
import BlogRecent from "@/components/blog/blog-recent";
import { DotPattern } from "@/components/ui/dot-pattern";
import BookCallButton from "@/components/action-buttons/book-call-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SOCIAL_LINKS } from "@/lib/config";

const { projects, experiences, technicalSkills } = RESUME;

export default async function Home() {
  return (
    <>
      {/* intro */}
      <section className="px-4 py-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col items-center justify-center h-20 sm:h-24">
          <Logo />
        </div>
      </section>

      {/* about */}
      <section className="px-4 pt-16 pb-10 bottom-dashed">
        <About />
      </section>

      {/* tech skills */}
      <section className="px-4 py-10 bottom-dashed" id="skills">
        <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
          Skills
        </h2>

        {technicalSkills.map((skill) => (
          <Skills skill={skill} key={skill.title} />
        ))}
      </section>

      {/* projects */}
      <section className="px-4 py-10 bottom-dashed" id="projects">
        <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard index={index} project={project} key={project.title} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="hover:[&>svg]:translate-x-0.5">
            <Link href="/projects">
              View all
              <ArrowRight className="transition ease-out" />
            </Link>
          </Button>
        </div>
      </section>

      {/* experience */}
      <section className="px-4 py-10 bottom-dashed" id="experience">
        <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
          Work
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {experiences.map((exp) => (
            <ResumeCard item={exp} key={exp.company} />
          ))}
        </Accordion>
      </section>

      {/* contact */}
      <section className="px-4 py-10 text-center bottom-dashed" id="contact">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />

        <div className="relative flex flex-col items-center justify-center gap-6">
          <h4 className="text-xl font-semibold">
            Want to connect and talk directly?
          </h4>
          <div className="inline-flex items-center gap-2 p-1 rounded-full ring-4 ring-muted bg-background">
            <Avatar className="rounded-full size-8">
              <AvatarFallback className="text-lg font-script">i</AvatarFallback>
            </Avatar>
            <Plus className="size-4" />
            <Avatar className="rounded-full size-8">
              <AvatarImage src="" className="rounded-full" />
              <AvatarFallback className="text-[10px]">You</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-3">
            <p className="text-sm italic text-muted-foreground">
              Press <Kbd>Y</Kbd> or click the button below to
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="px-4 py-10 bottom-dashed" id="blog">
        <h2 className="text-xl/snug font-semibold tracking-wider mb-10">
          Writing
        </h2>
        <BlogRecent limit={2} />
        <div className="pt-10 text-center border-t">
          <Button asChild className="hover:[&>svg]:translate-x-0.5">
            <Link href="/blog">
              View all
              <ArrowRight className="transition ease-out" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
