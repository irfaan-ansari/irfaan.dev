import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative rounded size-10 bg-secondary inline-flex items-center justify-center",
        className
      )}
    >
      <span className="font-script text-3xl -translate-y-0.5">i</span>
    </div>
  );
};

export default Logo;
