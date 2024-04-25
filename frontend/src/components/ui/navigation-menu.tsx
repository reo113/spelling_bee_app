import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsz-10 tailwind.config.tsflex tailwind.config.tsmax-w-max tailwind.config.tsflex-1 tailwind.config.tsitems-center tailwind.config.tsjustify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.tsgroup tailwind.config.tsflex tailwind.config.tsflex-1 tailwind.config.tslist-none tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsspace-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "tailwind.config.tsgroup tailwind.config.tsinline-flex tailwind.config.tsh-10 tailwind.config.tsw-max tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsrounded-md tailwind.config.tsbg-background tailwind.config.tspx-4 tailwind.config.tspy-2 tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tstransition-colors hover:tailwind.config.tsbg-accent hover:tailwind.config.tstext-accent-foreground focus:tailwind.config.tsbg-accent focus:tailwind.config.tstext-accent-foreground focus:tailwind.config.tsoutline-none disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50 data-[active]:tailwind.config.tsbg-accent/50 data-[state=open]:tailwind.config.tsbg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      navigationMenuTriggerStyle(),
      "tailwind.config.tsgroup",
      className,
    )}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="tailwind.config.tsrelative tailwind.config.tstop-[1px] tailwind.config.tsml-1 tailwind.config.tsh-3 tailwind.config.tsw-3 tailwind.config.tstransition tailwind.config.tsduration-200 group-data-[state=open]:tailwind.config.tsrotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "tailwind.config.tsleft-0 tailwind.config.tstop-0 tailwind.config.tsw-full data-[motion^=from-]:tailwind.config.tsanimate-in data-[motion^=to-]:tailwind.config.tsanimate-out data-[motion^=from-]:tailwind.config.tsfade-in data-[motion^=to-]:tailwind.config.tsfade-out data-[motion=from-end]:tailwind.config.tsslide-in-from-right-52 data-[motion=from-start]:tailwind.config.tsslide-in-from-left-52 data-[motion=to-end]:tailwind.config.tsslide-out-to-right-52 data-[motion=to-start]:tailwind.config.tsslide-out-to-left-52 md:tailwind.config.tsabsolute md:tailwind.config.tsw-auto tailwind.config.ts",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "tailwind.config.tsabsolute tailwind.config.tsleft-0 tailwind.config.tstop-full tailwind.config.tsflex tailwind.config.tsjustify-center",
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "tailwind.config.tsorigin-top-center tailwind.config.tsrelative tailwind.config.tsmt-1.5 tailwind.config.tsh-[var(--radix-navigation-menu-viewport-height)] tailwind.config.tsw-full tailwind.config.tsoverflow-hidden tailwind.config.tsrounded-md tailwind.config.tsborder tailwind.config.tsbg-popover tailwind.config.tstext-popover-foreground tailwind.config.tsshadow-lg data-[state=open]:tailwind.config.tsanimate-in data-[state=closed]:tailwind.config.tsanimate-out data-[state=closed]:tailwind.config.tszoom-out-95 data-[state=open]:tailwind.config.tszoom-in-90 md:tailwind.config.tsw-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "tailwind.config.tstop-full tailwind.config.tsz-[1] tailwind.config.tsflex tailwind.config.tsh-1.5 tailwind.config.tsitems-end tailwind.config.tsjustify-center tailwind.config.tsoverflow-hidden data-[state=visible]:tailwind.config.tsanimate-in data-[state=hidden]:tailwind.config.tsanimate-out data-[state=hidden]:tailwind.config.tsfade-out data-[state=visible]:tailwind.config.tsfade-in",
      className,
    )}
    {...props}
  >
    <div className="tailwind.config.tsrelative tailwind.config.tstop-[60%] tailwind.config.tsh-2 tailwind.config.tsw-2 tailwind.config.tsrotate-45 tailwind.config.tsrounded-tl-sm tailwind.config.tsbg-border tailwind.config.tsshadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

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
};
