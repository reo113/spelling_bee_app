"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "tailwind.config.tsz-50 tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tspx-3 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md tailwind.config.tsanimate-in tailwind.config.tsfade-in-0 tailwind.config.tszoom-in-95 data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
