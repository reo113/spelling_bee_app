"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsh-4 tailwind.config.tsw-full tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-full tailwind.config.tsbg-secondary",
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="tailwind.config.tsh-full tailwind.config.tsw-full tailwind.config.tsflex-1 tailwind.config.tsbg-primary tailwind.config.tstransition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
