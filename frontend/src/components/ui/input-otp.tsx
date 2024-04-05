"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:tailwind.config.jscursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("tailwind.config.jsflex tailwind.config.jsitems-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsh-10 tailwind.config.jsw-10 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsborder-y tailwind.config.jsborder-r tailwind.config.jsborder-input tailwind.config.jstext-sm tailwind.config.jstransition-all first:tailwind.config.jsrounded-l-md first:tailwind.config.jsborder-l last:tailwind.config.jsrounded-r-md",
        isActive && "tailwind.config.jsz-10 tailwind.config.jsring-2 tailwind.config.jsring-ring tailwind.config.jsring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsjustify-center">
          <div className="tailwind.config.jsh-4 tailwind.config.jsw-px tailwind.config.jsanimate-caret-blink tailwind.config.jsbg-foreground tailwind.config.jsduration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
