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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";
import { getExamFindByCode } from "@/actions/exam.action";

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
    startTransition(async () => {
      try {
        const data = await getExamFindByCode(values.code.toString());
        if (!data) {
          toast({
            variant: "destructive",
            className: "text-white",
            title: "Bài thi chưa sẵn sàng.",
          });
          return;
        }
        toast({
          variant: "default",
          className: "bg-success text-white",
          title: "Đang vào bài thi.",
        });
        router.push(`/exam-infomation/${data.code}`);
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          className: "text-white",
          title: "Đã xảy ra lỗi xảy ra.",
        });
      }
    });
  };

  return (
    <>
      <Loading isLoading={isPending} />
      <div className="min-h-[calc(100vh-64px-48px)] flex flex-col flex-1 justify-center">
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
                      <Input
                        type="number"
                        placeholder="Ví dụ: y5xe83"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Xác nhận</Button>
          </form>
        </Form>
        <Separator className="mt-6" />
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger>Hướng dẫn</AccordionTrigger>
            <AccordionContent>
              <div>Bước 1: Nhập mã bài kiểm tra của giang viên cung cấp.</div>
              <div>
                Bước 2: Nhấn enter hoặc nút xác nhận để vào làm bài kiểm tra.
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Chưa nhận được mã?</AccordionTrigger>
            <AccordionContent>Liên hệ cho giảng viên của bạn.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Section;
