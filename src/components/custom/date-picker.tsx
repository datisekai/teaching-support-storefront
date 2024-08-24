// DatePicker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  handle: (date: string) => void;
}

export function DatePicker({ handle }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    handle(format(date, "yyyy-MM-dd", { locale: vi }));
    setOpen(false);
  };

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full mb-2 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          onClick={() => setOpen(true)}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "yyyy-MM-dd", { locale: vi })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            if (day) setDate(day);
          }}
          initialFocus
        />
        <div className="flex justify-end px-3 pb-2">
          <Button onClick={handleClick}>Ok</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
