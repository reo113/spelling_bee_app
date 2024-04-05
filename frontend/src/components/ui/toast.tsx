"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "tailwind.config.jsfixed tailwind.config.jstop-0 tailwind.config.jsz-[100] tailwind.config.jsflex tailwind.config.jsmax-h-screen tailwind.config.jsw-full tailwind.config.jsflex-col-reverse tailwind.config.jsp-4 sm:tailwind.config.jsbottom-0 sm:tailwind.config.jsright-0 sm:tailwind.config.jstop-auto sm:tailwind.config.jsflex-col md:tailwind.config.jsmax-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "tailwind.config.jsgroup tailwind.config.jspointer-events-auto tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jsitems-center tailwind.config.jsjustify-between tailwind.config.jsspace-x-4 tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsp-6 tailwind.config.jspr-8 tailwind.config.jsshadow-lg tailwind.config.jstransition-all data-[swipe=cancel]:tailwind.config.jstranslate-x-0 data-[swipe=end]:tailwind.config.jstranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:tailwind.config.jstranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:tailwind.config.jstransition-none data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[swipe=end]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-80 data-[state=closed]:tailwind.config.jsslide-out-to-right-full data-[state=open]:tailwind.config.jsslide-in-from-top-full data-[state=open]:sm:tailwind.config.jsslide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "tailwind.config.jsborder tailwind.config.jsbg-background tailwind.config.jstext-foreground",
        destructive:
          "tailwind.config.jsdestructive tailwind.config.jsgroup tailwind.config.jsborder-destructive tailwind.config.jsbg-destructive tailwind.config.jstext-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

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
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "tailwind.config.jsinline-flex tailwind.config.jsh-8 tailwind.config.jsshrink-0 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsbg-transparent tailwind.config.jspx-3 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsring-offset-background tailwind.config.jstransition-colors hover:tailwind.config.jsbg-secondary focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-ring focus:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50 group-[.destructive]:tailwind.config.jsborder-muted/40 group-[.destructive]:hover:tailwind.config.jsborder-destructive/30 group-[.destructive]:hover:tailwind.config.jsbg-destructive group-[.destructive]:hover:tailwind.config.jstext-destructive-foreground group-[.destructive]:focus:tailwind.config.jsring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "tailwind.config.jsabsolute tailwind.config.jsright-2 tailwind.config.jstop-2 tailwind.config.jsrounded-md tailwind.config.jsp-1 tailwind.config.jstext-foreground/50 tailwind.config.jsopacity-0 tailwind.config.jstransition-opacity hover:tailwind.config.jstext-foreground focus:tailwind.config.jsopacity-100 focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 group-hover:tailwind.config.jsopacity-100 group-[.destructive]:tailwind.config.jstext-red-300 group-[.destructive]:hover:tailwind.config.jstext-red-50 group-[.destructive]:focus:tailwind.config.jsring-red-400 group-[.destructive]:focus:tailwind.config.jsring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("tailwind.config.jstext-sm tailwind.config.jsfont-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("tailwind.config.jstext-sm tailwind.config.jsopacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

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
}
