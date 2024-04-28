"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "tailwind.config.tsfixed tailwind.config.tstop-0 tailwind.config.tsz-[100] tailwind.config.tsflex tailwind.config.tsmax-h-screen tailwind.config.tsw-full tailwind.config.tsflex-col-reverse tailwind.config.tsp-4 sm:tailwind.config.tsbottom-0 sm:tailwind.config.tsright-0 sm:tailwind.config.tstop-auto sm:tailwind.config.tsflex-col md:tailwind.config.tsmax-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "tailwind.config.tsgroup tailwind.config.tspointer-events-auto tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tsw-full tailwind.config.tsitems-center tailwind.config.tsjustify-between tailwind.config.tsspace-x-4 tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsp-6 tailwind.config.tspr-8 tailwind.config.tsshadow-lg tailwind.config.tstransition-all data-[swipe=cancel]:tailwind.config.tstranslate-x-0 data-[swipe=end]:tailwind.config.tstranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:tailwind.config.tstranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:tailwind.config.tstransition-none data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[swipe=end]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tsfade-out-80 data-[state=closed]:tailwind.config.tsslide-out-to-right-full data-[state=open]:tailwind.config.tsslide-in-from-top-full data-[state=open]:sm:tailwind.config.tsslide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "tailwind.config.tsborder tailwind.config.tsbg-background tailwind.config.tstext-foreground",
        destructive:
          "tailwind.config.tsdestructive tailwind.config.tsgroup tailwind.config.tsborder-destructive tailwind.config.tsbg-destructive tailwind.config.tstext-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "tailwind.config.tsinline-flex tailwind.config.tsh-8 tailwind.config.tsshrink-0 tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-transparent tailwind.config.tspx-3 tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsring-offset-background tailwind.config.tstransition-colors hover:tailwind.config.tsbg-secondary focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 focus:tailwind.config.tsring-ring focus:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50 group-[.destructive]:tailwind.config.tsborder-muted/40 group-[.destructive]:hover:tailwind.config.tsborder-destructive/30 group-[.destructive]:hover:tailwind.config.tsbg-destructive group-[.destructive]:hover:tailwind.config.tstext-destructive-foreground group-[.destructive]:focus:tailwind.config.tsring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "tailwind.config.tsabsolute tailwind.config.tsright-2 tailwind.config.tstop-2 tailwind.config.tsrounded-md tailwind.config.tsp-1 tailwind.config.tstext-foreground/50 tailwind.config.tsopacity-0 tailwind.config.tstransition-opacity hover:tailwind.config.tstext-foreground focus:tailwind.config.tsopacity-100 focus:tailwind.config.tsoutline-none focus:tailwind.config.tsring-2 group-hover:tailwind.config.tsopacity-100 group-[.destructive]:tailwind.config.tstext-red-300 group-[.destructive]:hover:tailwind.config.tstext-red-50 group-[.destructive]:focus:tailwind.config.tsring-red-400 group-[.destructive]:focus:tailwind.config.tsring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm tailwind.config.tsfont-semibold",
      className,
    )}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(
      "tailwind.config.tstext-sm tailwind.config.tsopacity-90",
      className,
    )}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
