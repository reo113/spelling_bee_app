"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsh-10 tailwind.config.tsitems-center tailwind.config.tsspace-x-1 tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-background tailwind.config.tsp-1",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-3 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[state=open]:tailwind.config.tsbg-accent data-[state=open]:tailwind.config.tstext-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
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
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "tailwind.config.tsz-50 tailwind.config.tsmin-w-[8rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "tailwind.config.tsz-50 tailwind.config.tsmin-w-[12rem] tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tsp-1 tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-md data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[side=bottom]:tailwind.config.tsslide-in-from-top-2 data-[side=left]:tailwind.config.tsslide-in-from-right-2 data-[side=right]:tailwind.config.tsslide-in-from-left-2 data-[side=top]:tailwind.config.tsslide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspy-1.5 tailwind.config.tspl-8 tailwind.config.tspr-2 tailwind.config.tstext-sm tailwind.config.tsoutline-none focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    {...props}
  >
    <span className="tailwind.config.tsabsolute tailwind.config.tsleft-2 tailwind.config.tsflex tailwind.config.tsh-3.5 tailwind.config.tsw-3.5 tailwind.config.tsitems-center tailwind.config.tsjustify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="tailwind.config.tsh-2 tailwind.config.tsw-2 tailwind.config.tsfill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsfont-semibold",
      inset && "tailwind.config.tspl-8",
      className,
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.ts-mx-1 tailwind.config.tsmy-1 tailwind.config.tsh-px tailwind.config.tsbg-muted",
      className,
    )}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
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
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
