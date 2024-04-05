"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jstouch-none tailwind.config.jsselect-none tailwind.config.jsitems-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="tailwind.config.jsrelative tailwind.config.jsh-2 tailwind.config.jsw-full tailwind.config.jsgrow tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-full tailwind.config.jsbg-secondary">
      <SliderPrimitive.Range className="tailwind.config.jsabsolute tailwind.config.jsh-full tailwind.config.jsbg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="tailwind.config.jsblock tailwind.config.jsh-5 tailwind.config.jsw-5 tailwind.config.jsrounded-full tailwind.config.jsborder-2 tailwind.config.jsborder-primary tailwind.config.jsbg-background tailwind.config.jsring-offset-background tailwind.config.jstransition-colors focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
