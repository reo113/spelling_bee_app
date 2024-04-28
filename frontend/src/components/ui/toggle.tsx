"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "tailwind.config.tsinline-flex tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsrounded-md tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsring-offset-background tailwind.config.tstransition-colors hover:tailwind.config.tsbg-muted hover:tailwind.config.tstext-muted-foreground focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50 data-[state=on]:tailwind.config.tsbg-accent data-[state=on]:tailwind.config.tstext-accent-foreground",
  {
    variants: {
      variant: {
        default: "tailwind.config.tsbg-transparent",
        outline:
          "tailwind.config.tsborder tailwind.config.tsborder-input tailwind.config.tsbg-transparent hover:tailwind.config.tsbg-accent hover:tailwind.config.tstext-accent-foreground",
      },
      size: {
        default: "tailwind.config.tsh-10 tailwind.config.tspx-3",
        sm: "tailwind.config.tsh-9 tailwind.config.tspx-2.5",
        lg: "tailwind.config.tsh-11 tailwind.config.tspx-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
