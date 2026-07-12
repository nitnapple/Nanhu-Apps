"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#1d1d1f] hover:bg-neutral-800 text-white px-5 py-2.5 text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer shadow-none border-0",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-1.5">{children}</span>
    </button>
  );
}

export function SecondaryShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center text-[#0066cc] hover:underline bg-transparent border-0 p-0 text-xs font-normal tracking-tight cursor-pointer group",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-0.5">
        {children}
        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" />
      </span>
    </button>
  );
}
