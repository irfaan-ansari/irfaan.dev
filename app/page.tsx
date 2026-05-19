import Link from "next/link";
import { RESUME } from "@/lib/resume";
import Skills from "@/components/skills";
import { Kbd } from "@/components/ui/kbd";
import { SOCIAL_LINKS } from "@/lib/config";
import Markdown from "@/components/markdown";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Blogs } from "@/components/blog/blogs";
import { ArrowUpRight, Plus } from "lucide-react";
import ResumeCard from "@/components/resume-card";
import { Divider } from "@/components/ui/divider";
import ProjectCard from "@/components/project-card";
import WaveIcon from "@/components/icons/wave-icon";
import { Accordion } from "@/components/ui/accordion";
import { DotPattern } from "@/components/ui/dot-pattern";
import ChatButton from "@/components/action-buttons/chat-button";
import ShareButton from "@/components/action-buttons/share-button";
import ResumeButton from "@/components/action-buttons/resume-button";
import ContactButton from "@/components/action-buttons/contact-button";
import BookCallButton from "@/components/action-buttons/book-call-button";
import CopyEmailButton from "@/components/action-buttons/copy-email-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const { projects, experiences, technicalSkills } = RESUME;

export default async function Home() {
  return (
    <>
      {/* intro */}
      <section className="relative py-10">
        <DotPattern className="mask-y-from-80% mask-x-from-90% text-border" />
        <div className="flex h-20 flex-col items-start justify-center">
          <div className="flex items-center">
            <span className="text-muted-foreground italic">Hi there!</span>
            <span className=" mx-2 inline-flex h-8 w-16 -translate-y-3 items-center justify-start rounded-full rounded-bl-md! bg-[#9EB1FF] px-3">
              <WaveIcon className="size-3.5 text-black" />
            </span>
          </div>
        </div>
      </section>

      <Divider />

      {/* about */}
      <section className="animate-in py-10 slide-in-from-bottom-4">
        <div className="mb-8 flex items-center gap-4">
          <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary ring-2 ring-border ring-offset-1 ring-offset-background">
            <Logo className="size-10 rounded-full text-foreground" />
          </span>
          <div className="flex flex-col gap-0">
            <h1 className="text-[1.7rem] font-semibold">{RESUME.name}</h1>
            <a
              href={SOCIAL_LINKS.x.href}
              target="_blank"
              className="hover:underline-red-500 text-sm text-muted-foreground underline underline-offset-2"
            >
              {SOCIAL_LINKS.x.label}
            </a>
          </div>
        </div>

        <Markdown
          className="mb-6 max-w-[70ch] leading-relaxed"
          content={RESUME.about}
        />

        <ContactButton />
      </section>

      <Divider />
      {/* shortcuts */}
      <section className="py-6">
        <p className="mb-2 text-sm text-muted-foreground italic">
          Prefer shortcuts? Click a button or use a shortcut key.
        </p>
        <div className="flex flex-wrap gap-2 rounded-lg">
          <ResumeButton />
          <CopyEmailButton />
          <ChatButton />
          <ShareButton className="pr-1! text-xs [&>svg]:text-muted-foreground" />
        </div>
      </section>

      <Divider />

      {/* tech skills */}
      <section className="py-10" id="skills">
        <h2 className="mb-8 font-medium tracking-wider text-muted-foreground italic">
          Skills
        </h2>

        {technicalSkills.map((skill) => (
          <Skills skill={skill} key={skill.title} />
        ))}
      </section>

      <Divider />

      {/* projects */}
      <section className="py-10" id="projects">
        <h2 className="mb-8 font-medium tracking-wider text-muted-foreground italic">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard index={index} project={project} key={project.title} />
          ))}
        </div>
        <div className="mt-4 text-right">
          <Button
            asChild
            size="sm"
            variant="link"
            className="h-7! px-0! opacity-60 hover:no-underline hover:opacity-100 hover:[&>svg]:translate-x-px hover:[&>svg]:-translate-y-px"
          >
            <Link href="/projects">
              View all
              <ArrowUpRight className="transition ease-out" />
            </Link>
          </Button>
        </div>
      </section>

      <Divider />

      {/* experience */}
      <section className="py-10" id="experience">
        <h2 className="mb-8 font-medium tracking-wider text-muted-foreground italic">
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

      <Divider />

      {/* contact */}
      <section className="relative py-10 text-center" id="contact">
        <DotPattern className="mask-y-from-80% mask-x-from-90% text-border" />

        <div className="relative flex flex-col items-center justify-center gap-6">
          <h4 className="text-xl font-semibold">
            Want to connect and talk directly?
          </h4>
          <div className="inline-flex items-center gap-2 rounded-full bg-background p-1 ring-4 ring-muted">
            <Avatar className="size-8 rounded-full">
              <AvatarFallback className="font-script text-lg">i</AvatarFallback>
            </Avatar>
            <Plus className="size-4" />
            <Avatar className="size-8 rounded-full">
              <AvatarImage src="" className="rounded-full" />
              <AvatarFallback className="text-[10px]">You</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground italic">
              Press <Kbd>Y</Kbd> or click the button below to
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>

      <Divider />

      {/* blog */}
      <section className="py-10" id="blog">
        <h2 className="mb-8 font-medium tracking-wider text-muted-foreground italic">
          Writing
        </h2>

        <div className="space-y-4">
          <Blogs perPage={2} />
        </div>
        <div className="mt-4 text-right">
          <Button
            asChild
            size="sm"
            variant="link"
            className="h-7! px-0! opacity-60 hover:no-underline hover:opacity-100 hover:[&>svg]:translate-x-px hover:[&>svg]:-translate-y-px"
          >
            <Link href="/blog">
              View all
              <ArrowUpRight className="transition ease-out" />
            </Link>
          </Button>
        </div>
      </section>

      <Divider />
    </>
  );
}
