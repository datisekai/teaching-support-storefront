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

interface DecodedToken {
  roomId: number;
  time: number;
  room_socket_id: string;
  room_socket_name: string;
  iat: number;
  exp: number;
}

const QRScanner = () => {
  const content = { id: 1, title: "Quét QR" };
  const user = useUserStore((state) => state.user);

  const [isSuccess, setIsSuccess] = React.useState(false);

  let client = new Colyseus.Client(SERVER_REALTIME_URL);
  const router = useRouter();

  // const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  // const [device, setDevice] = useState("-1");

  // const [toastDevice, setToastDevice] = useState("");

  // useEffect(() => {
  //   const checkCameraAvailability = async () => {
  //     try {
  //       const devices = await navigator.mediaDevices.enumerateDevices();
  //       const cameras = devices.filter(
  //         (device) => device.kind === "videoinput" && device.deviceId
  //       );
  //       if (cameras.length === 0) {
  //         console.error("No cameras found.");
  //         setToastDevice("Cấp quyền truy cập camera và tải lại trang!");
  //         return;
  //       }
  //       setCameras(cameras);
  //     } catch (error) {
  //       setToastDevice("Kiểm tra lại camera và tải lại trang!");
  //       console.error("Error checking camera availability:", error);
  //     }
  //   };

  //   checkCameraAvailability();
  // }, []);
  const { toast } = useToast();

  console.log("test deploy");

  const handleClick = async (result: IDetectedBarcode[]) => {
    try {
      const decoded = jwtDecode(result[0].rawValue) as DecodedToken;
      const room = await client.joinById(decoded.room_socket_id, {
        qr_key: result[0].rawValue,
        code: user.code,
        name: user.name,
        user_id: user.id,
      });
      toast({
        variant: "default",
        className: "bg-success text-white",
        title: "Điểm danh thành công.",
      });
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/attendance-history");
      }, 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        className: "text-white",
        title: "Điểm danh thất bại." + error,
      });
    }
  };
  // const handleChange = (value: string) => {
  //   setDevice(value);
  // };

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-20 ">
        {/* <div className="flex flex-col justify-center items-center mb-4">
          <Select value={device} onValueChange={(value) => handleChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn camera..." defaultValue={"-1"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="-1">Chọn camera</SelectItem>
                {cameras.map((item, index) => {
                  return (
                    <SelectItem value={item.deviceId} key={index}>
                      {item.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        {/* {cameras.length === 0 && (
          <div className="items-center text-destructive text-center">
            {toastDevice}
          </div>
        )} */}
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
