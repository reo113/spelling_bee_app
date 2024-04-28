import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tailwind.config.tsflex tailwind.config.tsh-10 tailwind.config.tsw-full tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsborder-input tailwind.config.tsbg-background tailwind.config.tspx-3 tailwind.config.tspy-2 tailwind.config.tstext-sm tailwind.config.tsring-offset-background file:tailwind.config.tsborder-0 file:tailwind.config.tsbg-transparent file:tailwind.config.tstext-sm file:tailwind.config.tsfont-medium placeholder:tailwind.config.tstext-muted-foreground focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
