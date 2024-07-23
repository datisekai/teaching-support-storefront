"use client";
import React from "react";
import { ModeToggle } from "@/components/custom/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, BellDot, Check } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useUserStore from "@/stores/userStore";

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <Avatar className="mr-2 border-2">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="font-bold text-[#FCFDFC] mb-1">{user.name}</p>
          <p className="text-xs text-[#FCFDFC]">{user.code}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="mr-1 relative">
              <div className="absolute right-[3px] top-[3px] ">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
              <div className=" p-1">
                <Bell className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
