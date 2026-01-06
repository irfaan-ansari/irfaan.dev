import React from "react";
import { RESUME } from "@/lib/resume";
import Markdown from "@/components/markdown";
import WaveIcon from "@/components/icons/wave-icon";
import { RotatingText } from "@/components/rotating-text";
import ChatButton from "@/components/action-buttons/chat-button";
import ShareButton from "@/components/action-buttons/share-button";
import ResumeButton from "@/components/action-buttons/resume-button";
import ContactButton from "@/components/action-buttons/contact-button";
import CopyEmailButton from "@/components/action-buttons/copy-email-button";
import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/config";

const LINKS = SOCIAL_LINKS.filter(
  (link) => link.href.includes("github") || link.href.includes("linkedin")
).sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

const About = () => {
  return (
    <React.Fragment>
      <p className="mb-6 leading-relaxed">
        <span className="text-primary/80">Hi there!</span>
        <span className=" bg-blue-400 h-8 rounded-full -translate-y-4 rounded-bl-md! mx-2 justify-start inline-flex items-center px-2 w-14">
          <WaveIcon className="size-3.5 text-black" />
        </span>
        <span className="text-primary/80">I'm</span>
      </p>
      <h1 className="mb-1 text-4xl font-bold">{RESUME.name}</h1>
      <div className="mb-6">
        <RotatingText
          words={[RESUME.roles[0]]}
          textClassName="text-xl font-semibold opacity-80"
          className="inline-flex"
        />
      </div>
      <Markdown
        className="mb-6 leading-relaxed max-w-prose"
        content={RESUME.about}
      />

      <p className="mb-6 leading-relaxed">
        if you want to connect, don't be shy,
        <ContactButton />
        get in touch!
      </p>

      <p className="mb-2 text-sm italic text-muted-foreground">
        Prefer shortcuts? Click a button or use a shortcut key.
      </p>
      <div className="flex flex-wrap gap-2 rounded-lg mb-6">
        <ResumeButton />
        <CopyEmailButton />
        <ChatButton />
        <ShareButton className="[&>svg]:text-muted-foreground" />
      </div>
    </React.Fragment>
  );
};

export default About;
