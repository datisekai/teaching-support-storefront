"use client";
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
import useUserStore from "@/stores/userStore";
import * as Colyseus from "colyseus.js";
import { jwtDecode } from "jwt-decode";
import { SERVER_REALTIME_URL } from "@/constants";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Section from "@/components/test-exam/section";

const TestExam = () => {
  const content = { id: 1, title: "Kiểm tra" };

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent>
        <Section />
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/test-exam" />
      </CardFooter>
    </div>
  );
};

export default TestExam;
