"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "tailwind.config.jspeer tailwind.config.jsinline-flex tailwind.config.jsh-6 tailwind.config.jsw-11 tailwind.config.jsshrink-0 tailwind.config.jscursor-pointer tailwind.config.jsitems-center tailwind.config.jsrounded-full tailwind.config.jsborder-2 tailwind.config.jsborder-transparent tailwind.config.jstransition-colors focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 focus-visible:tailwind.config.jsring-offset-background disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50 data-[state=checked]:tailwind.config.jsbg-primary data-[state=unchecked]:tailwind.config.jsbg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "tailwind.config.jspointer-events-none tailwind.config.jsblock tailwind.config.jsh-5 tailwind.config.jsw-5 tailwind.config.jsrounded-full tailwind.config.jsbg-background tailwind.config.jsshadow-lg tailwind.config.jsring-0 tailwind.config.jstransition-transform data-[state=checked]:tailwind.config.jstranslate-x-5 data-[state=unchecked]:tailwind.config.jstranslate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
