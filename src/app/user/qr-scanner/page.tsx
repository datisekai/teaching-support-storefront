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
import * as Colyseus from "colyseus.js";
import { jwtDecode } from "jwt-decode";

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
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  let client = new Colyseus.Client("ws://localhost:2567");

  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [device, setDevice] = useState("-1");

  useEffect(() => {
    const checkCameraAvailability = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(
          (device) => device.kind === "videoinput" && device.deviceId
        );
        if (cameras.length === 0) {
          console.error("No cameras found.");
          return;
        }
        setCameras(cameras);
      } catch (error) {
        console.error("Error checking camera availability:", error);
      }
    };

    checkCameraAvailability();
  }, []);

  const handleClick = async (result: IDetectedBarcode[]) => {
    try {
      const decoded: DecodedToken = jwtDecode(result[0].rawValue);
      setDecodedToken(decoded);
      if (decodedToken?.room_socket_id) {
        const room = await client.joinById(decodedToken.room_socket_id, {
          qr_key: result[0].rawValue,
          code: user.code,
          name: user.name,
          user_id: user.id,
        });
        alert("joined successfully" + room);
        console.log("joined successfully", room);
      }
    } catch (error) {
      alert("joined successfully" + error);
      console.error("Error: ", error);
    }
  };
  const handleChange = (value: string) => {
    setDevice(value);
  };

  return (
    <Card className="h-[calc(100vh-64px)] md:w-[60vh] w-full rounded-none border-none">
      <CardHeader className="px-4 bg-[url('/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-12">
        <div className="flex flex-col justify-center items-center mb-4">
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
        </div>
        {cameras.length === 0 && (
          <div className="items-center text-destructive text-center">
            Cấp quyền truy cập hoặc kiểm tra lại camera và tải lại trang!
          </div>
        )}
        <div className="items-center">Hướng camera về phía mã QR</div>
        <Scanner
          components={{
            onOff: true,
          }}
          constraints={{ deviceId: device }}
          onScan={(result) => handleClick(result)}
        />
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/qr-scanner" />
      </CardFooter>
    </Card>
  );
};

export default QRScanner;
