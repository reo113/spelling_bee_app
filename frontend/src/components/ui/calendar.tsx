"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("tailwind.config.tsp-3", className)}
      classNames={{
        months:
          "tailwind.config.tsflex tailwind.config.tsflex-col sm:tailwind.config.tsflex-row tailwind.config.tsspace-y-4 sm:tailwind.config.tsspace-x-4 sm:tailwind.config.tsspace-y-0",
        month: "tailwind.config.tsspace-y-4",
        caption:
          "tailwind.config.tsflex tailwind.config.tsjustify-center tailwind.config.tspt-1 tailwind.config.tsrelative tailwind.config.tsitems-center",
        caption_label:
          "tailwind.config.tstext-sm tailwind.config.tsfont-medium",
        nav: "tailwind.config.tsspace-x-1 tailwind.config.tsflex tailwind.config.tsitems-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "tailwind.config.tsh-7 tailwind.config.tsw-7 tailwind.config.tsbg-transparent tailwind.config.tsp-0 tailwind.config.tsopacity-50 hover:tailwind.config.tsopacity-100",
        ),
        nav_button_previous:
          "tailwind.config.tsabsolute tailwind.config.tsleft-1",
        nav_button_next: "tailwind.config.tsabsolute tailwind.config.tsright-1",
        table:
          "tailwind.config.tsw-full tailwind.config.tsborder-collapse tailwind.config.tsspace-y-1",
        head_row: "tailwind.config.tsflex",
        head_cell:
          "tailwind.config.tstext-muted-foreground tailwind.config.tsrounded-md tailwind.config.tsw-9 tailwind.config.tsfont-normal tailwind.config.tstext-[0.8rem]",
        row: "tailwind.config.tsflex tailwind.config.tsw-full tailwind.config.tsmt-2",
        cell: "tailwind.config.tsh-9 tailwind.config.tsw-9 tailwind.config.tstext-center tailwind.config.tstext-sm tailwind.config.tsp-0 tailwind.config.tsrelative [&:has([aria-selected].day-range-end)]:tailwind.config.tsrounded-r-md [&:has([aria-selected].day-outside)]:tailwind.config.tsbg-accent/50 [&:has([aria-selected])]:tailwind.config.tsbg-accent first:[&:has([aria-selected])]:tailwind.config.tsrounded-l-md last:[&:has([aria-selected])]:tailwind.config.tsrounded-r-md focus-within:tailwind.config.tsrelative focus-within:tailwind.config.tsz-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "tailwind.config.tsh-9 tailwind.config.tsw-9 tailwind.config.tsp-0 tailwind.config.tsfont-normal aria-selected:tailwind.config.tsopacity-100",
        ),
        day_range_end: "tailwind.config.tsday-range-end",
        day_selected:
          "tailwind.config.tsbg-primary tailwind.config.tstext-primary-foreground hover:tailwind.config.tsbg-primary hover:tailwind.config.tstext-primary-foreground focus:tailwind.config.tsbg-primary focus:tailwind.config.tstext-primary-foreground",
        day_today:
          "tailwind.config.tsbg-accent tailwind.config.tstext-accent-foreground",
        day_outside:
          "tailwind.config.tsday-outside tailwind.config.tstext-muted-foreground tailwind.config.tsopacity-50 aria-selected:tailwind.config.tsbg-accent/50 aria-selected:tailwind.config.tstext-muted-foreground aria-selected:tailwind.config.tsopacity-30",
        day_disabled:
          "tailwind.config.tstext-muted-foreground tailwind.config.tsopacity-50",
        day_range_middle:
          "aria-selected:tailwind.config.tsbg-accent aria-selected:tailwind.config.tstext-accent-foreground",
        day_hidden: "tailwind.config.tsinvisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
