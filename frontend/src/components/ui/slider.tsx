"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tsw-full tailwind.config.tstouch-none tailwind.config.tsselect-none tailwind.config.tsitems-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="tailwind.config.tsrelative tailwind.config.tsh-2 tailwind.config.tsw-full tailwind.config.tsgrow tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-full tailwind.config.tsbg-secondary">
      <SliderPrimitive.Range className="tailwind.config.tsabsolute tailwind.config.tsh-full tailwind.config.tsbg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="tailwind.config.tsblock tailwind.config.tsh-5 tailwind.config.tsw-5 tailwind.config.tsrounded-full tailwind.config.tsborder-2 tailwind.config.tsborder-primary tailwind.config.tsbg-background tailwind.config.tsring-offset-background tailwind.config.tstransition-colors focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
