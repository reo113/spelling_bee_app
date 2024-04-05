"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "tailwind.config.jsinline-flex tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-md tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsring-offset-background tailwind.config.jstransition-colors hover:tailwind.config.jsbg-muted hover:tailwind.config.jstext-muted-foreground focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50 data-[state=on]:tailwind.config.jsbg-accent data-[state=on]:tailwind.config.jstext-accent-foreground",
  {
    variants: {
      variant: {
        default: "tailwind.config.jsbg-transparent",
        outline:
          "tailwind.config.jsborder tailwind.config.jsborder-input tailwind.config.jsbg-transparent hover:tailwind.config.jsbg-accent hover:tailwind.config.jstext-accent-foreground",
      },
      size: {
        default: "tailwind.config.jsh-10 tailwind.config.jspx-3",
        sm: "tailwind.config.jsh-9 tailwind.config.jspx-2.5",
        lg: "tailwind.config.jsh-11 tailwind.config.jspx-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

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
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
