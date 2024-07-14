import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Card className="h-[100vh] w-[60vh] rounded-none">
        <div className="mt-[20vh]">
          <CardHeader>
            <CardTitle>Đăng nhập</CardTitle>
            <CardDescription>Đăng nhập để có thể sử dụng</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="mssv">Mã số sinh viên</Label>
              <Input id="mssv" type="number" placeholder="3120410103" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input id="password" type="password" placeholder="******" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Đăng nhập</Button>
          </CardFooter>
        </div>
      </Card>
    </main>
  );
};

export default Login;
