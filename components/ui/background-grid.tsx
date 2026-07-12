import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none",
        className
      )}
    />
  );
}
