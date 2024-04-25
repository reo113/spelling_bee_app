"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.tsinline-flex tailwind.config.tsh-10 tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsrounded-md tailwind.config.tsbg-muted tailwind.config.tsp-1 tailwind.config.tstext-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.tsinline-flex tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tswhitespace-nowrap tailwind.config.tsrounded-sm tailwind.config.tspx-3 tailwind.config.tspy-1.5 tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsring-offset-background tailwind.config.tstransition-all focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50 data-[state=active]:tailwind.config.tsbg-background data-[state=active]:tailwind.config.tstext-foreground data-[state=active]:tailwind.config.tsshadow-sm",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tailwind.config.tsmt-2 tailwind.config.tsring-offset-background focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
