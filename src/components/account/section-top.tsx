"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@/types/UserModel";
import { Camera } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import ItemSection from "./item-section";
import useUserStore from "@/stores/userStore";

const SectionTop = () => {
  const user = useUserStore((state) => state.user);
  const arr = [
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
  ];
  return (
    <div className="flex flex-col items-center text-center gap-2 bg-[#FEF4EB] w-full">
      <div className="relative w-20 h-20">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatar} alt="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Camera className="absolute right-0 bottom-0 bg-primary rounded-full p-1 text-white border-white border-2" />
      </div>
      <div>
        <p className="font-bold text-lg">{user.name}</p>
        <p className="text-sm text-slate-500">{user.code}</p>
      </div>
      <Button variant="outline" className="text-primary border-primary px-8">
        Xem thông tin
      </Button>
      <div className="grid grid-cols-2 gap-2 w-full px-2">
        {arr.map((item, index) => (
          <ItemSection content={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionTop;
