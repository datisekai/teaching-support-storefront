import { getAttendanceHistory } from "@/actions/attendance.action";
import Section from "@/components/attendance-history/section";
import SubHeader from "@/components/custom/sub-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { Suspense, useEffect, useState } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { useAttendance } from "@/hooks/useAttendance";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { AttendanceService } from "@/services/attendance.service";
import MyLoading from "@/components/MyLoading";

interface Props { }
const AttendanceHistory = async ({ }) => {
  // const content = { id: 1, title: "Lịch sử điểm danh" };
  // const [date, setDate] = useState<Date>(new Date());

  const contents = await getAttendanceHistory("");

  // const { data, isLoading } = useQuery({
  //   queryKey: ["attendance-histories"],
  //   queryFn: () => AttendanceService.getAttendanceHistory({})
  // });

  // console.log('data', data);
  return (
    <div className="bg-secondary">
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={{ title: "Lịch sử điểm danh" }} iconRight={<></>} />
      </CardHeader>
      <CardContent className="px-0 pb-20 ">
        <ScrollArea className="h-[calc(100vh-48px)] ">
          {/* <MyLoading loading={isLoading}> */}
          <div className="bg-white px-4 py-2 mb-4">
            {/* <Popover>
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
            </Popover> */}
            {/* <Input type="search" placeholder="Nhập mã/ tên môn học..." /> */}
          </div>
          <Section contents={contents.data} />
          {/* </MyLoading> */}
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default AttendanceHistory;
