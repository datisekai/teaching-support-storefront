"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { login } from "../../services/login.services";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  code: z
    .string()
    .nonempty({
      message: "Không được bỏ trống.",
    })
    .regex(/^\d{10}$/, {
      message: "Mã số sinh viên phải là 10 ký tự.",
    }),
  password: z.string().min(6, {
    message: "Mật khẩu ít nhất 6 ký tự.",
  }),
});

const Section = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await login(values.code, values.password);
      Cookies.set("lg", response.data.token);
      toast({
        className: "bg-success",
        description: "Đăng nhập thành công.",
      });
      router.push("/user");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Sai tài khoản hoặc mật khẩu.",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mã số sinh viên</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="3120410103" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Đăng nhập</Button>
      </form>
    </Form>
  );
};

export default Section;
