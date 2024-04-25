"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "tailwind.config.tsfixed tailwind.config.tsinset-0 tailwind.config.tsz-50 tailwind.config.tsbg-black/80 tailwind.config.ts data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-0 data-[state=open]:tailwind.config.tsfade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "tailwind.config.tsfixed tailwind.config.tsz-50 tailwind.config.tsgap-4 tailwind.config.tsbg-background tailwind.config.tsp-6 tailwind.config.tsshadow-lg tailwind.config.tstransition tailwind.config.tsease-in-out data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsduration-300 data-[state=open]:tailwind.config.tsduration-500",
  {
    variants: {
      side: {
        top: "tailwind.config.tsinset-x-0 tailwind.config.tstop-0 tailwind.config.tsborder-b data-[state=closed]:tailwind.config.tsslide-out-to-top data-[state=open]:tailwind.config.tsslide-in-from-top",
        bottom:
          "tailwind.config.tsinset-x-0 tailwind.config.tsbottom-0 tailwind.config.tsborder-t data-[state=closed]:tailwind.config.tsslide-out-to-bottom data-[state=open]:tailwind.config.tsslide-in-from-bottom",
        left: "tailwind.config.tsinset-y-0 tailwind.config.tsleft-0 tailwind.config.tsh-full tailwind.config.tsw-3/4 tailwind.config.tsborder-r data-[state=closed]:tailwind.config.tsslide-out-to-left data-[state=open]:tailwind.config.tsslide-in-from-left sm:tailwind.config.tsmax-w-sm",
        right:
          "tailwind.config.tsinset-y-0 tailwind.config.tsright-0 tailwind.config.tsh-full tailwind.config.tsw-3/4 tailwind.config.ts tailwind.config.tsborder-l data-[state=closed]:tailwind.config.tsslide-out-to-right data-[state=open]:tailwind.config.tsslide-in-from-right sm:tailwind.config.tsmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="tailwind.config.tsabsolute tailwind.config.tsright-4 tailwind.config.tstop-4 tailwind.config.tsrounded-sm tailwind.config.tsopacity-70 tailwind.config.tsring-offset-background tailwind.config.tstransition-opacity hover:tailwind.config.tsopacity-100 focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 focus:tailwind.config.tsring-ring focus:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none data-[state=open]:tailwind.config.tsbg-secondary">
        <X className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
        <span className="tailwind.config.tssr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsflex-col tailwind.config.tsspace-y-2 tailwind.config.tstext-center sm:tailwind.config.tstext-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      "tailwind.config.tstext-lg tailwind.config.tsfont-semibold tailwind.config.tstext-foreground",
      className,
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm tailwind.config.tstext-muted-foreground",
      className,
    )}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
