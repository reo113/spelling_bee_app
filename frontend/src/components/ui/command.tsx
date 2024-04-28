"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsh-full tailwind.config.tsw-full tailwind.config.tsflex-col tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsbg-popover tailwind.config.tstext-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="tailwind.config.tsoverflow-hidden tailwind.config.tsp-0 tailwind.config.tsshadow-lg">
        <Command className="[&_[cmdk-group-heading]]:tailwind.config.tspx-2 [&_[cmdk-group-heading]]:tailwind.config.tsfont-medium [&_[cmdk-group-heading]]:tailwind.config.tstext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:tailwind.config.tspt-0 [&_[cmdk-group]]:tailwind.config.tspx-2 [&_[cmdk-input-wrapper]_svg]:tailwind.config.tsh-5 [&_[cmdk-input-wrapper]_svg]:tailwind.config.tsw-5 [&_[cmdk-input]]:tailwind.config.tsh-12 [&_[cmdk-item]]:tailwind.config.tspx-2 [&_[cmdk-item]]:tailwind.config.tspy-3 [&_[cmdk-item]_svg]:tailwind.config.tsh-5 [&_[cmdk-item]_svg]:tailwind.config.tsw-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="tailwind.config.tsflex tailwind.config.tsitems-center tailwind.config.tsborder-b tailwind.config.tspx-3"
    cmdk-input-wrapper=""
  >
    <Search className="tailwind.config.tsmr-2 tailwind.config.tsh-4 tailwind.config.tsw-4 tailwind.config.tsshrink-0 tailwind.config.tsopacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "tailwind.config.tsflex tailwind.config.tsh-11 tailwind.config.tsw-full tailwind.config.tsrounded-md tailwind.config.tsbg-transparent tailwind.config.tspy-3 tailwind.config.tstext-sm tailwind.config.tsoutline-none placeholder:tailwind.config.tstext-muted-foreground disabled:tailwind.config.tscursor-not-allowed disabled:tailwind.config.tsopacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.tsmax-h-[300px] tailwind.config.tsoverflow-y-auto tailwind.config.tsoverflow-x-hidden",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="tailwind.config.tspy-6 tailwind.config.tstext-center tailwind.config.tstext-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "tailwind.config.tsoverflow-hidden tailwind.config.tsp-1 tailwind.config.tstext-foreground [&_[cmdk-group-heading]]:tailwind.config.tspx-2 [&_[cmdk-group-heading]]:tailwind.config.tspy-1.5 [&_[cmdk-group-heading]]:tailwind.config.tstext-xs [&_[cmdk-group-heading]]:tailwind.config.tsfont-medium [&_[cmdk-group-heading]]:tailwind.config.tstext-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(
      "tailwind.config.ts-mx-1 tailwind.config.tsh-px tailwind.config.tsbg-border",
      className,
    )}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tscursor-default tailwind.config.tsselect-none tailwind.config.tsitems-center tailwind.config.tsrounded-sm tailwind.config.tspx-2 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsoutline-none aria-selected:tailwind.config.tsbg-accent aria-selected:tailwind.config.tstext-accent-foreground data-[disabled]:tailwind.config.tspointer-events-none data-[disabled]:tailwind.config.tsopacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
