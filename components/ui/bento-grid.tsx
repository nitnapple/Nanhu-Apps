import React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-card border border-white/10 justify-between flex flex-col space-y-4 hover:border-white/20",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="font-semibold text-white mb-1 mt-2 text-lg">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
