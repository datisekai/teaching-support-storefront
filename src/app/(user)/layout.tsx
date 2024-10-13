"use client";
import { getMyInfo } from "@/actions/auth.action";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import Providers from "@/components/Providers";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useSocketStore } from "@/stores/socketStore";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { connectSocket, disconnectSocket } = useSocketStore()
  useEffect(() => {
    connectSocket();

    return () => {
      disconnectSocket()
    }
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/images/slider2_1240x450-min.jpg')] bg-cover bg-center">
      <Card className="h-[100vh] md:w-[60vh] w-full rounded-none border-none">
        <Providers>{children}</Providers>
      </Card>
    </main>
  );
}
