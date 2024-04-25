"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tspeer tailwind.config.tsh-4 tailwind.config.tsw-4 tailwind.config.tsshrink-0 tailwind.config.tsrounded-sm tailwind.config.tsborder tailwind.config.tsborder-primary tailwind.config.tsring-offset-background focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50 data-[state=checked]:tailwind.config.tsbg-primary data-[state=checked]:tailwind.config.tstext-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "tailwind.config.tsflex tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tstext-current",
      )}
    >
      <Check className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
