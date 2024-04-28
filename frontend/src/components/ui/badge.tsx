import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "tailwind.config.tsinline-flex tailwind.config.tsitems-center tailwind.config.tsrounded-full tailwind.config.tsborder tailwind.config.tspx-2.5 tailwind.config.tspy-0.5 tailwind.config.tstext-xs tailwind.config.tsfont-semibold tailwind.config.tstransition-colors focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 focus:tailwind.config.tsring-ring focus:tailwind.config.tsring-offset-2",
  {
    variants: {
      variant: {
        default:
          "tailwind.config.tsborder-transparent tailwind.config.tsbg-primary tailwind.config.tstext-primary-foreground hover:tailwind.config.tsbg-primary/80",
        secondary:
          "tailwind.config.tsborder-transparent tailwind.config.tsbg-secondary tailwind.config.tstext-secondary-foreground hover:tailwind.config.tsbg-secondary/80",
        destructive:
          "tailwind.config.tsborder-transparent tailwind.config.tsbg-destructive tailwind.config.tstext-destructive-foreground hover:tailwind.config.tsbg-destructive/80",
        outline: "tailwind.config.tstext-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
