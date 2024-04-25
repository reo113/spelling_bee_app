"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsoverflow-hidden",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="tailwind.config.tsh-full tailwind.config.tsw-full tailwind.config.tsrounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tstouch-none tailwind.config.tsselect-none tailwind.config.tstransition-colors",
      orientation === "vertical" &&
        "tailwind.config.tsh-full tailwind.config.tsw-2.5 tailwind.config.tsborder-l tailwind.config.tsborder-l-transparent tailwind.config.tsp-[1px]",
      orientation === "horizontal" &&
        "tailwind.config.tsh-2.5 tailwind.config.tsflex-col tailwind.config.tsborder-t tailwind.config.tsborder-t-transparent tailwind.config.tsp-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="tailwind.config.tsrelative tailwind.config.tsflex-1 tailwind.config.tsrounded-full tailwind.config.tsbg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
