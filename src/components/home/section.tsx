import { Separator } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import React from "react";
import ItemSection from "./item-section";

interface SectionProps {
  content: any;
}

const Section: React.FC<SectionProps> = ({ content }) => {
  const arr = [
    {
      id: 1,
      title:
        " Thông1 báo nghỉ học quốc phòng 2 lớp chiều thứ 3, ngày 12/3/1020 lớp7 mã môn 293182",
      updatedAt: "27/10/2024",
      className: "Quốc phòng an ninh 3",
    },
    {
      id: 2,
      title:
        " Thông báo nghỉ học quốc phòng 2 lớp chiều thứ 3, ngày 12/3/1020 lớp7 mã môn 293182",
      updatedAt: "27/10/2024",
      className: "Quốc phòng an ninh 3",
    },
    {
      id: 3,
      title:
        " Thông báo nghỉ học quốc phòng 2 lớp chiều thứ 3, ngày 12/3/1020 lớp7 mã môn 293182",
      updatedAt: "27/10/2024",
      className: "Quốc phòng an ninh 3",
    },
  ];
  return (
    <div>
      <div className="flex items-center">
        <div className="mr-2 text-base font-bold">{content.name}</div>
        <ArrowRight className="rounded-full bg-secondary p-1" />
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col rounded-md border p-2">
        {arr.map((item, index) => {
          return <ItemSection content={item} key={index} />;
        })}
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default Section;
