"use client";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const ResumeButton = () => {
  const { handleAction } = useNavigation();

  const handleClick = () => {
    handleAction({ type: "navigate", href: "/resume" });
  };
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className="pr-1! pl-2! border border-border/50! h-7"
      onClick={handleClick}
    >
      <Link href="/resume.pdf">
        <FileText className="text-muted-foreground" />
        Resume / CV
        <Kbd>R</Kbd>
      </Link>
    </Button>
  );
};

export default ResumeButton;
