import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "tailwind.config.jsrelative tailwind.config.jsw-full tailwind.config.jsrounded-lg tailwind.config.jsborder tailwind.config.jsp-4 [&>svg~*]:tailwind.config.jspl-7 [&>svg+div]:tailwind.config.jstranslate-y-[-3px] [&>svg]:tailwind.config.jsabsolute [&>svg]:tailwind.config.jsleft-4 [&>svg]:tailwind.config.jstop-4 [&>svg]:tailwind.config.jstext-foreground",
  {
    variants: {
      variant: {
        default: "tailwind.config.jsbg-background tailwind.config.jstext-foreground",
        destructive:
          "tailwind.config.jsborder-destructive/50 tailwind.config.jstext-destructive dark:tailwind.config.jsborder-destructive [&>svg]:tailwind.config.jstext-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

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
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("tailwind.config.jsmb-1 tailwind.config.jsfont-medium tailwind.config.jsleading-none tailwind.config.jstracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("tailwind.config.jstext-sm [&_p]:tailwind.config.jsleading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
