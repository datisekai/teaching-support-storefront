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
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Section from "@/components/take-exam/section";
import { ScrollArea } from "@/components/ui/scroll-area";

const TakeExam = () => {
  const content = { id: 1, title: "Làm bài kiểm tra" };
  const user = useUserStore((state) => state.user);

  let client = new Colyseus.Client(SERVER_REALTIME_URL);
  const router = useRouter();

  const { idExam } = useParams();
  const id = Array.isArray(idExam) ? idExam[0] : idExam;

  const { toast } = useToast();

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-48px)] ">
        <CardContent className="mt-8 pb-20">
          <Section idExam={id} />
        </CardContent>
      </ScrollArea>
    </div>
  );
};

export default TakeExam;
