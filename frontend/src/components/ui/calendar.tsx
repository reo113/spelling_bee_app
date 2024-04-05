"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("tailwind.config.jsp-3", className)}
      classNames={{
        months: "tailwind.config.jsflex tailwind.config.jsflex-col sm:tailwind.config.jsflex-row tailwind.config.jsspace-y-4 sm:tailwind.config.jsspace-x-4 sm:tailwind.config.jsspace-y-0",
        month: "tailwind.config.jsspace-y-4",
        caption: "tailwind.config.jsflex tailwind.config.jsjustify-center tailwind.config.jspt-1 tailwind.config.jsrelative tailwind.config.jsitems-center",
        caption_label: "tailwind.config.jstext-sm tailwind.config.jsfont-medium",
        nav: "tailwind.config.jsspace-x-1 tailwind.config.jsflex tailwind.config.jsitems-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "tailwind.config.jsh-7 tailwind.config.jsw-7 tailwind.config.jsbg-transparent tailwind.config.jsp-0 tailwind.config.jsopacity-50 hover:tailwind.config.jsopacity-100"
        ),
        nav_button_previous: "tailwind.config.jsabsolute tailwind.config.jsleft-1",
        nav_button_next: "tailwind.config.jsabsolute tailwind.config.jsright-1",
        table: "tailwind.config.jsw-full tailwind.config.jsborder-collapse tailwind.config.jsspace-y-1",
        head_row: "tailwind.config.jsflex",
        head_cell:
          "tailwind.config.jstext-muted-foreground tailwind.config.jsrounded-md tailwind.config.jsw-9 tailwind.config.jsfont-normal tailwind.config.jstext-[0.8rem]",
        row: "tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jsmt-2",
        cell: "tailwind.config.jsh-9 tailwind.config.jsw-9 tailwind.config.jstext-center tailwind.config.jstext-sm tailwind.config.jsp-0 tailwind.config.jsrelative [&:has([aria-selected].day-range-end)]:tailwind.config.jsrounded-r-md [&:has([aria-selected].day-outside)]:tailwind.config.jsbg-accent/50 [&:has([aria-selected])]:tailwind.config.jsbg-accent first:[&:has([aria-selected])]:tailwind.config.jsrounded-l-md last:[&:has([aria-selected])]:tailwind.config.jsrounded-r-md focus-within:tailwind.config.jsrelative focus-within:tailwind.config.jsz-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "tailwind.config.jsh-9 tailwind.config.jsw-9 tailwind.config.jsp-0 tailwind.config.jsfont-normal aria-selected:tailwind.config.jsopacity-100"
        ),
        day_range_end: "tailwind.config.jsday-range-end",
        day_selected:
          "tailwind.config.jsbg-primary tailwind.config.jstext-primary-foreground hover:tailwind.config.jsbg-primary hover:tailwind.config.jstext-primary-foreground focus:tailwind.config.jsbg-primary focus:tailwind.config.jstext-primary-foreground",
        day_today: "tailwind.config.jsbg-accent tailwind.config.jstext-accent-foreground",
        day_outside:
          "tailwind.config.jsday-outside tailwind.config.jstext-muted-foreground tailwind.config.jsopacity-50 aria-selected:tailwind.config.jsbg-accent/50 aria-selected:tailwind.config.jstext-muted-foreground aria-selected:tailwind.config.jsopacity-30",
        day_disabled: "tailwind.config.jstext-muted-foreground tailwind.config.jsopacity-50",
        day_range_middle:
          "aria-selected:tailwind.config.jsbg-accent aria-selected:tailwind.config.jstext-accent-foreground",
        day_hidden: "tailwind.config.jsinvisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="tailwind.config.jsh-4 tailwind.config.jsw-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="tailwind.config.jsh-4 tailwind.config.jsw-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
