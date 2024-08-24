"use client";
import React, { startTransition } from "react";
import { useTransition } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { setCookieServer } from "@/utils";
import { login } from "@/actions/auth.action";
import Loading from "@/utils/loading";

const formSchema = z.object({
  code: z.string().nonempty({
    message: "Không được bỏ trống.",
  }),
});

const Section = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/exam-infomation/${values.code}`);
    // startTransition(async () => {
    //   try {
    //     const data = await login({
    //       code: values.code,
    //     });
    //     if (!data) {
    //       toast({
    //         variant: "destructive",
    //         className: "text-white",
    //         title: "Sai tài khoản hoặc mật khẩu.",
    //       });
    //       return;
    //     }
    //     toast({
    //       variant: "default",
    //       className: "bg-success text-white",
    //       title: "Đăng nhập thành công.",
    //     });
    //     router.push("/");
    //   } catch (error) {
    //     console.log(error);
    //     toast({
    //       variant: "destructive",
    //       className: "text-white",
    //       title: "Đã xảy ra lỗi khi đăng nhập.",
    //     });
    //   }
    // });
  };

  return (
    <>
      <Loading isLoading={isPending} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã bài kiểm tra</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Ví dụ: y5xe83" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default Section;
