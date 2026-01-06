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
      variant="secondary"
      size="sm"
      className="pr-1.5 text-xs"
      onClick={handleClick}
    >
      <Link href="/resume">
        <FileText className="text-muted-foreground" />
        Resume / CV
        <Kbd>R</Kbd>
      </Link>
    </Button>
  );
};

export default ResumeButton;
