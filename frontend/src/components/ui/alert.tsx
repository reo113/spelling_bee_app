import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "tailwind.config.tsrelative tailwind.config.tsw-full tailwind.config.tsrounded-lg tailwind.config.tsborder tailwind.config.tsp-4 [&>svg~*]:tailwind.config.tspl-7 [&>svg+div]:tailwind.config.tstranslate-y-[-3px] [&>svg]:tailwind.config.tsabsolute [&>svg]:tailwind.config.tsleft-4 [&>svg]:tailwind.config.tstop-4 [&>svg]:tailwind.config.tstext-foreground",
  {
    variants: {
      variant: {
        default:
          "tailwind.config.tsbg-background tailwind.config.tstext-foreground",
        destructive:
          "tailwind.config.tsborder-destructive/50 tailwind.config.tstext-destructive dark:tailwind.config.tsborder-destructive [&>svg]:tailwind.config.tstext-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "tailwind.config.tsmb-1 tailwind.config.tsfont-medium tailwind.config.tsleading-none tailwind.config.tstracking-tight",
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm [&_p]:tailwind.config.tsleading-relaxed",
      className,
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
