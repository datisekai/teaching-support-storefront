"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { useToast } from "../ui/use-toast";
import { takeExam } from "@/actions/exam.action";
import Loading from "@/utils/loading";
import useUserStore from "@/stores/userStore";

interface ICountdownCustom {
  date: number;
  id: number;
}

const CountdownCustom: React.FC<ICountdownCustom> = ({ date, id }) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [clientDate, setClientDate] = useState<number | null>(null);

  useEffect(() => {
    let startTime = localStorage.getItem(`startTime-${id}`);

    if (!startTime) {
      startTime = Date.now().toString();
      localStorage.setItem(`startTime-${id}`, startTime);
    }

    const savedTime = localStorage.getItem(`countdown-${id}`);
    const currentTime = Date.now();

    if (savedTime) {
      const savedTotal = parseInt(savedTime);

      if (savedTotal > currentTime) {
        setClientDate(savedTotal);
      } else {
        setClientDate(+startTime + date);
        localStorage.removeItem(`countdown-${id}`);
        localStorage.removeItem(`startTime-${id}`);
      }
    } else {
      setClientDate(+startTime + date);
    }
  }, [date, id]);

  const handleComplete = () => {
    startTransition(async () => {
      try {
        const storedAnswers = localStorage.getItem("examAnswers");
        const data = await takeExam(id, {
          answers: JSON.parse(storedAnswers || "{}"),
        });

        if (!data || !data.success) {
          toast({
            variant: "destructive",
            className: "text-white",
            title: "Bạn đã làm bài này rồi hoặc có lỗi xảy ra.",
          });
          return;
        }

        localStorage.removeItem("examAnswers");
        localStorage.removeItem(`countdown-${id}`);
        toast({
          variant: "default",
          className: "bg-success text-white",
          title: "Nộp bài thành công.",
        });
        router.push(`/exam-result/${id}`);
      } catch (error) {
        console.error("Error submitting exam:", error);
        toast({
          variant: "destructive",
          className: "text-white",
          title: "Đã xảy ra lỗi khi nộp bài.",
        });
      }
    });
  };

  const renderer: CountdownRendererFn = ({ total }) => {
    if (total > 0) {
      localStorage.setItem(`countdown-${id}`, (Date.now() + total).toString());
    }

    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return (
      <span>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    );
  };

  if (clientDate === null || isNaN(clientDate) || clientDate <= Date.now()) {
    return <p>Đang tải...</p>;
  }

  return (
    <>
      <Loading isLoading={isPending} />
      <Countdown
        daysInHours
        date={clientDate}
        onComplete={handleComplete}
        renderer={renderer}
      />
    </>
  );
};

export default CountdownCustom;
