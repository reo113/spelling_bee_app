"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[state=open]:tailwind.config.tsbg-accent data-[state=open]:tailwind.config.tstext-accent-foreground",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="tailwind.config.tsml-auto tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "tailwind.config.tsz-50 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.tsz-50 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md tailwind.config.tsanimate-in tailwind.config.tsfade-in-80 data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="tailwind.config.tsh-2 tailwind.config.tsw-2 tailwind.config.tsfill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsfont-semibold tailwind.config.tstext-foreground",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.ts-mx-1 tailwind.config.tsmy-1 tailwind.config.tsh-px tailwind.config.tsbg-border",
      className,
    )}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "tailwind.config.tsml-auto tailwind.config.tstext-xs tailwind.config.tstracking-widest tailwind.config.tstext-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
