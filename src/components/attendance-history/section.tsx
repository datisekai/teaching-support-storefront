"use client";
import React, { useState } from "react";
import { Attendance } from "@/types/AttendanceModel";
import ItemSection from "./item-section";
import { useAttendance } from "@/hooks/useAttendance";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";

const Section = () => {
  const [date, setDate] = useState<Date>(new Date());
  const contents = useAttendance(date);

  return (
    <div>
      <div className="bg-white px-4 py-2 mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full mb-2 justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {format(date, "yyyy-MM-dd", { locale: vi })}
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
          </PopoverContent>
        </Popover>
        <Input type="search" placeholder="Nhập mã/ tên môn học..." />
      </div>
      <div className="mb-20">
        {contents.length > 0 ? (
          contents.map((item: Attendance, index: number) => (
            <ItemSection content={item} key={index} />
          ))
        ) : (
          <div className="flex justify-center content-center mt-28">
            Chưa có lần điểm danh nào
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
