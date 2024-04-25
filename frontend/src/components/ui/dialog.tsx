"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "tailwind.config.tsfixed tailwind.config.tsinset-0 tailwind.config.tsz-50 tailwind.config.tsbg-black/80 tailwind.config.ts data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.tsfixed tailwind.config.tsleft-[50%] tailwind.config.tstop-[50%] tailwind.config.tsz-50 tailwind.config.tsgrid tailwind.config.tsw-full tailwind.config.tsmax-w-lg tailwind.config.tstranslate-x-[-50%] tailwind.config.tstranslate-y-[-50%] tailwind.config.tsgap-4 tailwind.config.tsborder tailwind.config.tsbg-background tailwind.config.tsp-6 tailwind.config.tsshadow-lg tailwind.config.tsduration-200 data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0 data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-95 data-[state=closed]:tailwind.config.tsslide-out-to-left-1/2 data-[state=closed]:tailwind.config.tsslide-out-to-top-[48%] data-[state=open]:tailwind.config.tsslide-in-from-left-1/2 data-[state=open]:tailwind.config.tsslide-in-from-top-[48%] sm:tailwind.config.tsrounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="tailwind.config.tsabsolute tailwind.config.tsright-4 tailwind.config.tstop-4 tailwind.config.tsrounded-sm tailwind.config.tsopacity-70 tailwind.config.tsring-offset-background tailwind.config.tstransition-opacity hover:tailwind.config.tsopacity-100 focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 focus:tailwind.config.tsring-ring focus:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none data-[state=open]:tailwind.config.tsbg-accent data-[state=open]:tailwind.config.tstext-muted-foreground">
        <X className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
        <span className="tailwind.config.tssr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsflex-col tailwind.config.tsspace-y-1.5 tailwind.config.tstext-center sm:tailwind.config.tstext-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsflex-col-reverse sm:tailwind.config.tsflex-row sm:tailwind.config.tsjustify-end sm:tailwind.config.tsspace-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "tailwind.config.tstext-lg tailwind.config.tsfont-semibold tailwind.config.tsleading-none tailwind.config.tstracking-tight",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm tailwind.config.tstext-muted-foreground",
      className,
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
