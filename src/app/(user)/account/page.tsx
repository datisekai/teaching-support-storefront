import React, { useEffect, useState } from "react";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Footer from "@/components/custom/footer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUserStore from "@/stores/userStore";
import { House, QrCode, Settings, UserRound } from "lucide-react";
import SectionTop from "@/components/account/section-top";
import Section from "@/components/account/section";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DecodedToken {
  roomId: number;
  time: number;
  room_socket_id: string;
  room_socket_name: string;
  iat: number;
  exp: number;
}

const Account = () => {
  const content = { id: 1, title: "Tài khoản" };
  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader
          content={content}
          iconRight={<Settings />}
          onlickRight={true}
        />
      </CardHeader>
      <CardContent className="px-0 pb-20">
        <ScrollArea className="h-[calc(100vh-112px)] ">
          <SectionTop />
          <Section />
        </ScrollArea>
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/qr-scanner" />
      </CardFooter>
    </div>
  );
};

export default Account;
