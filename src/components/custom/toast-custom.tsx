"use client";
import React from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ToastCustom = () => {
  const { toast } = useToast();
  return toast({
    variant: "destructive",
    title: "Sai tài khoản hoặc mật khẩu.",
  });
};

export default ToastCustom;
