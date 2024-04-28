"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:tailwind.config.tscursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsitems-center",
      className,
    )}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tsh-10 tailwind.config.tsw-10 tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsborder-y tailwind.config.tsborder-r tailwind.config.tsborder-input tailwind.config.tstext-sm tailwind.config.tstransition-all first:tailwind.config.tsrounded-l-md first:tailwind.config.tsborder-l last:tailwind.config.tsrounded-r-md",
        isActive &&
          "tailwind.config.tsz-10 tailwind.config.tsring-2 tailwind.config.tsring-ring tailwind.config.tsring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="tailwind.config.tspointer-events-none tailwind.config.tsabsolute tailwind.config.tsinset-0 tailwind.config.tsflex tailwind.config.tsitems-center tailwind.config.tsjustify-center">
          <div className="tailwind.config.tsh-4 tailwind.config.tsw-px tailwind.config.tsanimate-caret-blink tailwind.config.tsbg-foreground tailwind.config.tsduration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
