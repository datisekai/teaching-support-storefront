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
  const [active, setActive] = useState<Number>(0);
  const handleClick = (id: Number) => {
    setActive(id);
  };
  return (
    <div className="bg-white px-4 py-2 mb-4">
      <DatePickerWithRange className="w-full mb-2" />
      <Input type="search" placeholder="Nhập mã/ tên môn học..." />
    </div>
  );
};

export default SectionTop;
