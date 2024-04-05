"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("tailwind.config.jsgrid tailwind.config.jsgap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "tailwind.config.jsaspect-square tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsrounded-full tailwind.config.jsborder tailwind.config.jsborder-primary tailwind.config.jstext-primary tailwind.config.jsring-offset-background focus:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsjustify-center">
        <Circle className="tailwind.config.jsh-2.5 tailwind.config.jsw-2.5 tailwind.config.jsfill-current tailwind.config.jstext-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
