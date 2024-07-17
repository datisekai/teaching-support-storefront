"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { DatePickerWithRange } from "../custom/date-range-picker";
import { ComboboxCustom } from "../custom/combobox-custom";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];
const SectionTop = () => {
  const data = [
    { id: 0, title: "Tất cả" },
    { id: 1, title: "Thành công" },
    { id: 2, title: "Cảnh báo" },
    { id: 3, title: "Thất bại" },
  ];
  const [active, setActive] = useState<Number>(0);
  const handleClick = (id: Number) => {
    setActive(id);
  };
  return (
    <>
      <ScrollArea className="md:w-[60vh] w-screen whitespace-nowrap">
        <div className="flex items-center px-2 py-2 gap-4 bg-white">
          {data.map((item, index) => {
            return (
              <div
                className="text-center"
                key={index}
                onClick={() => handleClick(item.id)}
              >
                <div
                  className={`mx-auto text-sm font-normal mb-1 ${
                    active === item.id ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                </div>
                {active === item.id ? (
                  <div className="border-b-2 text-primary border-primary w-6 mx-auto "></div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="border-b-[1px] w-full border-slate-200"></div>
      <div className="bg-white px-4 py-2 mb-4">
        <DatePickerWithRange className="w-full mb-2" />

        <Input type="search" placeholder="Nhập mã/ tên môn học..." />
      </div>
    </>
  );
};

export default SectionTop;
