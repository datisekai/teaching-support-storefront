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

interface HeaderProps {
  content: any;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Avatar className="mr-2 border-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="font-bold text-[#FCFDFC] mb-1">{content.name}</p>
          <p className="text-xs text-[#FCFDFC]">{content.mssv}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="mr-1 relative">
              <GoDotFill className="absolute right-1 top-1 text-primary" />
              <div className=" p-1">
                <Bell className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle Bell</span>
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

        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
