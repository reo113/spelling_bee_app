"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      "tailwind.config.tsfixed tailwind.config.tsinset-0 tailwind.config.tsz-50 tailwind.config.tsbg-black/80",
      className,
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.tsfixed tailwind.config.tsinset-x-0 tailwind.config.tsbottom-0 tailwind.config.tsz-50 tailwind.config.tsmt-24 tailwind.config.tsflex tailwind.config.tsh-auto tailwind.config.tsflex-col tailwind.config.tsrounded-t-[10px] tailwind.config.tsborder tailwind.config.tsbg-background",
        className,
      )}
      {...props}
    >
      <div className="tailwind.config.tsmx-auto tailwind.config.tsmt-4 tailwind.config.tsh-2 tailwind.config.tsw-[100px] tailwind.config.tsrounded-full tailwind.config.tsbg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.tsgrid tailwind.config.tsgap-1.5 tailwind.config.tsp-4 tailwind.config.tstext-center sm:tailwind.config.tstext-left",
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.tsmt-auto tailwind.config.tsflex tailwind.config.tsflex-col tailwind.config.tsgap-2 tailwind.config.tsp-4",
      className,
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "tailwind.config.tstext-lg tailwind.config.tsfont-semibold tailwind.config.tsleading-none tailwind.config.tstracking-tight",
      className,
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm tailwind.config.tstext-muted-foreground",
      className,
    )}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
