"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "tailwind.config.tsgrid tailwind.config.tsgap-2",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "tailwind.config.tsaspect-square tailwind.config.tsh-4 tailwind.config.tsw-4 tailwind.config.tsrounded-full tailwind.config.tsborder tailwind.config.tsborder-primary tailwind.config.tstext-primary tailwind.config.tsring-offset-background focus:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="tailwind.config.tsflex tailwind.config.tsitems-center tailwind.config.tsjustify-center">
        <Circle className="tailwind.config.tsh-2.5 tailwind.config.tsw-2.5 tailwind.config.tsfill-current tailwind.config.tstext-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
