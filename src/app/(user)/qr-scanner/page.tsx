"use client";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React from "react";

import Footer from "@/components/custom/footer";
import SubHeader from "@/components/custom/sub-header";
import {
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SERVER_REALTIME_URL } from "@/constants";
import { socket } from "@/lib/socket";
import useUserStore from "@/stores/userStore";
import { ISocketResponse } from "@/types/SocketModel";
import * as Colyseus from "colyseus.js";
import { useRouter } from "next/navigation";


const QRScanner = () => {
  const content = { id: 1, title: "Quét QR" };
  const user = useUserStore((state) => state.user);

  const [isSuccess, setIsSuccess] = React.useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const handleClick = async (result: IDetectedBarcode[]) => {

    const qrCode = result[0].rawValue;
    if (qrCode) {
      socket.emit('checkQRCode', { code: user.code, qrCode }, (response: ISocketResponse) => {
        const { message, success } = response;
        toast({
          variant: success ? "default" : "destructive",
          className: "bg-success text-white",
          title: message,
        });

        if (success) {
          setIsSuccess(success);
          setTimeout(() => {
            router.push("/attendance-history");
          }, 2000);
        }
      })
    }
  };


  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-20 ">

        <div className="items-center">Hướng camera về phía mã QR</div>
        <Scanner
          components={{
            onOff: true,
          }}
          // constraints={{ deviceId: device }}
          paused={isSuccess}
          onScan={(result) => handleClick(result)}
        />
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/qr-scanner" />
      </CardFooter>
    </div>
  );
};

export default QRScanner;
