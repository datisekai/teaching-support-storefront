"use client";
import React, { useState } from "react";
import { Attendance } from "@/types/AttendanceModel";
import { useAttendance } from "@/hooks/useAttendance";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { IoCalendarOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/userStore";
import { CiTimer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { formatSeconds } from "@/utils/format";
import { Exam } from "@/types/ExamModel";

interface ISection {
  content: Exam;
}

const Section: React.FC<ISection> = ({ content }) => {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className=" flex flex-col flex-1 justify-center h-[calc(100vh-48px)]">
      <p className="text-lg text-primary">{content.title}</p>
      <div className="text-sm mt-2">
        <p>{content.description}</p>
      </div>
      <div className="flex flex-wrap text-sm text-slate-500 mt-2">
        <div className="flex items-center justify-center mr-4 mb-2">
          <CiTimer />
          <p className="ml-2">{formatSeconds(content.duration)}</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <IoBookOutline />
          <p className="ml-2">{content.group.course.name}</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <SiGoogleclassroom />
          <p className="ml-2">{content.group.name}</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <CiUser />
          <p className="ml-2">{content.group.teacher.name}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <Button variant="secondary" onClick={() => handleClick(`/test-exam`)}>
          Quay lại
        </Button>
        <Button
          variant="default"
          onClick={() => handleClick(`/take-exam/${content.id}`)}
        >
          Bắt đầu làm bài
        </Button>
      </div>
    </div>
  );
};

export default Section;
