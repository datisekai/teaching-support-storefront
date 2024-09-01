"use client";
import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Exam } from "@/types/ExamModel";
import { useToast } from "../ui/use-toast";
import Loading from "@/utils/loading";
import { takeExam } from "@/actions/exam.action";

interface ISection {
  content: Exam;
}

const Section: React.FC<ISection> = ({ content }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const storedAnswers = localStorage.getItem("examAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("examAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  const handleChange = (value: number) => {
    setPage(value);
  };

  const handleClick = () => {
    startTransition(async () => {
      try {
        const storedAnswers = localStorage.getItem("examAnswers");
        const data = await takeExam(content.id, {
          answers: JSON.parse(storedAnswers || "{}"),
        });
        if (!data) {
          toast({
            variant: "destructive",
            className: "text-white",
            title: "Bạn đã làm bài này rồi.",
          });
          return;
        }
        localStorage.removeItem("examAnswers");
        toast({
          variant: "default",
          className: "bg-success text-white",
          title: "Nộp bài thành công.",
        });
        router.push(`/exam-result/${content.id}`);
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          className: "text-white",
          title: "Bạn đã làm bài này rồi.",
        });
      }
    });
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < content.questions.length) {
      setPage(page + 1);
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [page]: value }));
  };

  const currentItem = content.questions[page - 1];

  const allAnswered = content.questions.every(
    (item, index) => selectedAnswers[index + 1]
  );

  return (
    <div>
      <Loading isLoading={isPending} />
      {currentItem && (
        <div>
          <div>
            <p className="text-base font-bold text-primary">
              {currentItem.content}
            </p>
            <div className="text-sm mt-2">
              <RadioGroup
                value={selectedAnswers[page] || ""}
                onValueChange={handleOptionChange}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="option_a" id={`${currentItem.id}_a`} />
                  <Label htmlFor={`${currentItem.id}_a`}>
                    {currentItem.option_a}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="option_b" id={`${currentItem.id}_b`} />
                  <Label htmlFor={`${currentItem.id}_b`}>
                    {currentItem.option_b}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="option_c" id={`${currentItem.id}_c`} />
                  <Label htmlFor={`${currentItem.id}_c`}>
                    {currentItem.option_c}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="option_d" id={`${currentItem.id}_d`} />
                  <Label htmlFor={`${currentItem.id}_d`}>
                    {currentItem.option_d}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-center items-center">
          <button
            onClick={handlePrevious}
            disabled={page === 1}
            className={`bg-slate-200 rounded-full p-1 mr-1 ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GrFormPrevious size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={page === content.questions.length}
            className={`bg-slate-200 rounded-full p-1 ${
              page === content.questions.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <GrFormNext size={24} />
          </button>
        </div>
        <Button variant="default" onClick={handleClick} disabled={!allAnswered}>
          Nộp bài
        </Button>
      </div>

      <div className="mt-4">
        <p>Danh sách câu hỏi</p>
        <Pagination className="mt-2 justify-start">
          <PaginationContent className="flex-wrap">
            {content.questions.map((item, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handleChange(index + 1)}
                  isActive={index + 1 === page}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Section;
