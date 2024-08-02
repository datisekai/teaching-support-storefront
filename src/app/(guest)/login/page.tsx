import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Section from "@/components/login/section";
import Loading from "@/utils/loading";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/images/slider2_1240x450-min.jpg')] bg-cover bg-center">
      <Card className="flex items-center justify-center h-[100vh] md:w-[60vh] w-full rounded-none bg-[url('/images/background-header.png')] border-none">
        <div className="w-full bg-white rounded-xl shadow-lg mx-4">
          <CardHeader>
            <CardTitle>Đăng nhập</CardTitle>
            <CardDescription>Đăng nhập để có thể sử dụng</CardDescription>
          </CardHeader>
          <CardContent>
            <Section />
          </CardContent>
        </div>
      </Card>
    </main>
  );
};

export default Login;
