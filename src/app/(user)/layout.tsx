"use client";
import { getMyInfo } from "@/actions/auth.action";
import Providers from "@/components/Providers";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/images/slider2_1240x450-min.jpg')] bg-cover bg-center">
      <Providers>{children}</Providers>
    </main>
  );
}
