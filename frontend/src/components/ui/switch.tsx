"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "tailwind.config.tspeer tailwind.config.tsinline-flex tailwind.config.tsh-6 tailwind.config.tsw-11 tailwind.config.tsshrink-0 tailwind.config.tscursor-pointer tailwind.config.tsitems-center tailwind.config.tsrounded-full tailwind.config.tsborder-2 tailwind.config.tsborder-transparent tailwind.config.tstransition-colors focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 focus-visible:tailwind.config.tsring-offset-background disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50 data-[state=checked]:tailwind.config.tsbg-primary data-[state=unchecked]:tailwind.config.tsbg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "tailwind.config.tspointer-events-none tailwind.config.tsblock tailwind.config.tsh-5 tailwind.config.tsw-5 tailwind.config.tsrounded-full tailwind.config.tsbg-background tailwind.config.tsshadow-lg tailwind.config.tsring-0 tailwind.config.tstransition-transform data-[state=checked]:tailwind.config.tstranslate-x-5 data-[state=unchecked]:tailwind.config.tstranslate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
