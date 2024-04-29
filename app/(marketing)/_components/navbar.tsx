"use client";
import { ModeToggle } from "@/components/mode-togle";
import { useScrollTop } from "@/hooks/use-top-scroll";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export const NavBar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex item-center w-full p-6",
        scrolled && "bottom-b shadow-sm "
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
