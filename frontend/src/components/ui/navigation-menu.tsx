import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsz-10 tailwind.config.jsflex tailwind.config.jsmax-w-max tailwind.config.jsflex-1 tailwind.config.jsitems-center tailwind.config.jsjustify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.jsgroup tailwind.config.jsflex tailwind.config.jsflex-1 tailwind.config.jslist-none tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsspace-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "tailwind.config.jsgroup tailwind.config.jsinline-flex tailwind.config.jsh-10 tailwind.config.jsw-max tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-md tailwind.config.jsbg-background tailwind.config.jspx-4 tailwind.config.jspy-2 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jstransition-colors hover:tailwind.config.jsbg-accent hover:tailwind.config.jstext-accent-foreground focus:tailwind.config.jsbg-accent focus:tailwind.config.jstext-accent-foreground focus:tailwind.config.jsoutline-none disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50 data-[active]:tailwind.config.jsbg-accent/50 data-[state=open]:tailwind.config.jsbg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "tailwind.config.jsgroup", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="tailwind.config.jsrelative tailwind.config.jstop-[1px] tailwind.config.jsml-1 tailwind.config.jsh-3 tailwind.config.jsw-3 tailwind.config.jstransition tailwind.config.jsduration-200 group-data-[state=open]:tailwind.config.jsrotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "tailwind.config.jsleft-0 tailwind.config.jstop-0 tailwind.config.jsw-full data-[motion^=from-]:tailwind.config.jsanimate-in data-[motion^=to-]:tailwind.config.jsanimate-out data-[motion^=from-]:tailwind.config.jsfade-in data-[motion^=to-]:tailwind.config.jsfade-out data-[motion=from-end]:tailwind.config.jsslide-in-from-right-52 data-[motion=from-start]:tailwind.config.jsslide-in-from-left-52 data-[motion=to-end]:tailwind.config.jsslide-out-to-right-52 data-[motion=to-start]:tailwind.config.jsslide-out-to-left-52 md:tailwind.config.jsabsolute md:tailwind.config.jsw-auto tailwind.config.js",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("tailwind.config.jsabsolute tailwind.config.jsleft-0 tailwind.config.jstop-full tailwind.config.jsflex tailwind.config.jsjustify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "tailwind.config.jsorigin-top-center tailwind.config.jsrelative tailwind.config.jsmt-1.5 tailwind.config.jsh-[var(--radix-navigation-menu-viewport-height)] tailwind.config.jsw-full tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsbg-popover tailwind.config.jstext-popover-foreground tailwind.config.jsshadow-lg data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-90 md:tailwind.config.jsw-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "tailwind.config.jstop-full tailwind.config.jsz-[1] tailwind.config.jsflex tailwind.config.jsh-1.5 tailwind.config.jsitems-end tailwind.config.jsjustify-center tailwind.config.jsoverflow-hidden data-[state=visible]:tailwind.config.jsanimate-in data-[state=hidden]:tailwind.config.jsanimate-out data-[state=hidden]:tailwind.config.jsfade-out data-[state=visible]:tailwind.config.jsfade-in",
      className
    )}
    {...props}
  >
    <div className="tailwind.config.jsrelative tailwind.config.jstop-[60%] tailwind.config.jsh-2 tailwind.config.jsw-2 tailwind.config.jsrotate-45 tailwind.config.jsrounded-tl-sm tailwind.config.jsbg-border tailwind.config.jsshadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
