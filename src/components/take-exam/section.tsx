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
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import Countdown from "react-countdown";

interface ISection {
  idExam: string;
}

const Section: React.FC<ISection> = ({ idExam }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const handleChange = (value: number) => {
    setPage(value);
  };
  const handleClick = () => {
    router.push(`/exam-result/${decodeURIComponent(idExam)}`);
  };

  const arrItem = [
    {
      id: 1,
      title:
        "Câu 1: Tại sao a đánh b mà b không bị thương chỉ có a là bị thương ai sai trong tình huống này?",
      awnsers: [
        { id: 1, title: "A. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 2, title: "B. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 3, title: "C. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 4, title: "D. Không biết" },
      ],
      images: [
        { link: "/images/background-header.png" },
        { link: "/images/background-header.png" },
        { link: "/images/background-header.png" },
      ],
    },
    {
      id: 2,
      title:
        "Câu 2: Tại sao a đánh b mà b không bị thương chỉ có a là bị thương ai sai trong tình huống này?",
      awnsers: [
        { id: 1, title: "A. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 2, title: "B. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 3, title: "C. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 4, title: "D. Không biết" },
      ],
      images: [
        { link: "/images/background-header.png" },
        { link: "/images/background-header.png" },
      ],
    },
    {
      id: 3,
      title:
        "Câu 3: Tại sao a đánh b mà b không bị thương chỉ có a là bị thương ai sai trong tình huống này?",
      awnsers: [
        { id: 1, title: "A. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 2, title: "B. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 3, title: "C. Bài kiểm tra này không được sử dụng tài liệu" },
        { id: 4, title: "D. Không biết" },
      ],
      images: [{ link: "/images/background-header.png" }],
    },
  ];
  return (
    <div>
      <p className="font-bold">
        Thời gian làm bài: <Countdown date={Date.now() + 3600 * 1000} />
      </p>
      <Carousel>
        <CarouselContent>
          {arrItem.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <p className="text-base font-bold text-primary">{item.title}</p>
                {item.images.map((item3, index3) => {
                  return (
                    <div>
                      <AspectRatio
                        ratio={16 / 9}
                        className="bg-muted mb-2"
                        key={index3}
                      >
                        {/* <div
                      dangerouslySetInnerHTML={{ __html: item3.link }}
                    ></div> */}
                        {/* <Image
                      src={item3.link}
                      alt="Photo"
                      fill
                      className="rounded-md object-cover"
                    /> */}
                      </AspectRatio>
                    </div>
                  );
                })}
                <div className="text-sm mt-2">
                  <RadioGroup>
                    {item.awnsers.map((item2, index2) => (
                      <div
                        className="flex items-center space-x-2 mb-4"
                        key={index2}
                      >
                        <RadioGroupItem
                          value={`${item2.id}`}
                          id={`${item2.id}`}
                        />
                        <Label htmlFor={`${item2.id}`}>{item2.title}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between items-center">
          <div>
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
          <Button variant="default" onClick={handleClick}>
            Nộp bài
          </Button>
        </div>
      </Carousel>

      {/* <div className="mt-4 ">
        <p>Danh sách câu hỏi</p>
        <Pagination className="mt-2 justify-start">
          <PaginationContent className="flex-wrap">
            {arrItem.map((item, index: number) => {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handleChange(index + 1)}
                    isActive={index + 1 == page}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div> */}
    </div>
  );
};

export default Section;
