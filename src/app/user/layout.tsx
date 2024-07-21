import AuthService from "@/services/auth.services";
import { getCookieServer } from "@/utils";
import { startTransition } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await AuthService.me();
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/slider2_1240x450-min.jpg')] bg-cover bg-center">
      {children}
    </main>
  );
}
