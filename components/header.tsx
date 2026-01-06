"use client";

import Link from "next/link";
import Logo from "./icons/logo";
import { Search } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { useModalStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { useToggleTheme } from "@/hooks/use-toggle-theme";
import { useScroll, useSpring, motion } from "motion/react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const toggle = useModalStore((state) => state.toggle);
  const { theme, toggle: toggleTheme } = useToggleTheme();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="sticky top-0 z-10">
      <div className="relative backdrop-blur-md">
        {/* scroll indicator */}
        <motion.div
          className="absolute h-0.5 origin-left bg-primary inset-x-0 top-0 z-1 rounded-full"
          style={{ scaleX }}
        ></motion.div>

        {/* main header */}
        <header className="flex items-stretch py-4 px-4 top-dashed bottom-dashed max-w-3xl mx-auto">
          <div className="flex-[1_1_0] self-center">
            <div className="relative rounded">
              <Link href="/" className="font-script text-2xl">
                <Logo className="size-8 bg-foreground dark:bg-accent text-white" />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 flex-[1_1_0]">
            <ThemeSwitch
              className="items-center h-7"
              onChange={toggleTheme}
              value={theme}
            />

            <Button
              className="text-muted-foreground text-xs focus-visible:ring-2 w-8 px-0 md:w-auto md:px-3"
              variant="outline"
              size="sm"
              onClick={() => toggle("command")}
            >
              <Search />
              <span className="hidden md:inline">Search... / Menu</span>
            </Button>

            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
