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

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/slider2_1240x450-min.jpg')] bg-cover bg-center">
      <Card className="h-[100vh] md:w-[60vh] w-full rounded-none">
        <div className="mt-[20vh]">
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
