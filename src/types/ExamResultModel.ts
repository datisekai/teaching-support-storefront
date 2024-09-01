import { Exam } from "./ExamModel";
import { User } from "./UserModel";

export interface ExamResult {
  examResult: {
    id: number;
    exam_id: number;
    user_id: number;
    exam: Exam;
    end_time?: string;
    user: User;
  };
  trueAnswer: number;
  answers: number;
  question: number;
  takeTime: number;
}
