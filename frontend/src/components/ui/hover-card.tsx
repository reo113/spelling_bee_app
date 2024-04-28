"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "tailwind.config.tsz-50 tailwind.config.tsw-64 tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-4 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md tailwind.config.tsoutline-none data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
