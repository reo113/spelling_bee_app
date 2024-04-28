"use client";

import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "tailwind.config.tsflex tailwind.config.tsh-full tailwind.config.tsw-full data-[panel-group-direction=vertical]:tailwind.config.tsflex-col",
      className,
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "tailwind.config.tsrelative tailwind.config.tsflex tailwind.config.tsw-px tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsbg-border after:tailwind.config.tsabsolute after:tailwind.config.tsinset-y-0 after:tailwind.config.tsleft-1/2 after:tailwind.config.tsw-1 after:tailwind.config.ts-translate-x-1/2 focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-1 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-1 data-[panel-group-direction=vertical]:tailwind.config.tsh-px data-[panel-group-direction=vertical]:tailwind.config.tsw-full data-[panel-group-direction=vertical]:after:tailwind.config.tsleft-0 data-[panel-group-direction=vertical]:after:tailwind.config.tsh-1 data-[panel-group-direction=vertical]:after:tailwind.config.tsw-full data-[panel-group-direction=vertical]:after:tailwind.config.ts-translate-y-1/2 data-[panel-group-direction=vertical]:after:tailwind.config.tstranslate-x-0 [&[data-panel-group-direction=vertical]>div]:tailwind.config.tsrotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="tailwind.config.tsz-10 tailwind.config.tsflex tailwind.config.tsh-4 tailwind.config.tsw-3 tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tsrounded-sm tailwind.config.tsborder tailwind.config.tsbg-border">
        <GripVertical className="tailwind.config.tsh-2.5 tailwind.config.tsw-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
