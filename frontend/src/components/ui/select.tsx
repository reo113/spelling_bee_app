"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsh-10 tailwind.config.tsw-full tailwind.config.tsitems-center tailwind.config.tsjustify-between tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsborder-input tailwind.config.tsbg-background tailwind.config.tspx-3 tailwind.config.tspy-2 tailwind.config.tstext-sm tailwind.config.tsring-offset-background placeholder:tailwind.config.tstext-muted-foreground focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 focus:tailwind.config.tsring-ring focus:tailwind.config.tsring-offset-2 disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50 [&>span]:tailwind.config.tsline-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="tailwind.config.tsh-4 tailwind.config.tsw-4 tailwind.config.tsopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tspy-1",
      className,
    )}
    {...props}
  >
    <ChevronUp className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tspy-1",
      className,
    )}
    {...props}
  >
    <ChevronDown className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.tsrelative tailwind.config.tsz-50 tailwind.config.tsmax-h-96 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:tailwind.config.tstranslate-y-1 data-[side=left]:tailwind.config.ts-translate-x-1 data-[side=right]:tailwind.config.tstranslate-x-1 data-[side=top]:tailwind.config.ts-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tailwind.config.tsp-1",
          position === "popper" &&
            "tailwind.config.tsh-[var(--radix-select-trigger-height)] tailwind.config.tsw-full tailwind.config.tsmin-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsfont-semibold",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tsw-full tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.ts-mx-1 tailwind.config.tsmy-1 tailwind.config.tsh-px tailwind.config.tsbg-muted",
      className,
    )}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
