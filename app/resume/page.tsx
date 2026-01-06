import { createMetadata } from "@/lib/metadata";
import ResumeFrame from "@/components/resume-iframe";
import { DotPattern } from "@/components/ui/dot-pattern";

const meta = createMetadata({
  title: "Resume",
  description:
    "A summary of my experience and skills in web development, and component-driven design.",
  path: "/projects",
  keywords: ["resume", "experience"],
  ogImage: "/og/projects.png",
});
export const metadata = meta;

const ResumePage = () => {
  return (
    <section>
      <div className="px-6 py-10 md:px-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="relative flex flex-col items-center justify-center max-w-sm gap-4 mx-auto min-h-24 z-1">
          <h1 className="text-xl font-semibold">Resume</h1>
          <p className="leading-relaxed text-center max-w-prose">
            A summary of my experience and skills in web development, and
            component-driven design.
          </p>
        </div>
      </div>
      <div className="px-6 py-10 md:px-10 bottom-dashed">
        <ResumeFrame />
      </div>
    </section>
  );
};

export default ResumePage;
