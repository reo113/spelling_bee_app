"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent data-[state=open]:tailwind.config.tsbg-accent",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="tailwind.config.tsml-auto tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "tailwind.config.tsz-50 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-lg data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "tailwind.config.tsz-50 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none tailwind.config.tstransition-colors focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none tailwind.config.tstransition-colors focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none tailwind.config.tstransition-colors focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="tailwind.config.tsh-2 tailwind.config.tsw-2 tailwind.config.tsfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsfont-semibold",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.ts-mx-1 tailwind.config.tsmy-1 tailwind.config.tsh-px tailwind.config.tsbg-muted",
      className,
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "tailwind.config.tsml-auto tailwind.config.tstext-xs tailwind.config.tstracking-widest tailwind.config.tsopacity-60",
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
