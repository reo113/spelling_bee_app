import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tailwind.config.tsflex tailwind.config.tsmin-h-[80px] tailwind.config.tsw-full tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsborder-input tailwind.config.tsbg-background tailwind.config.tspx-3 tailwind.config.tspy-2 tailwind.config.tstext-sm tailwind.config.tsring-offset-background placeholder:tailwind.config.tstext-muted-foreground focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
