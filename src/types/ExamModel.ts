import { Group } from "./GroupModel";
import { Question } from "./QuestionModel";

export interface Exam {
  id: number;
  title: string;
  code: number;
  description?: string;
  group_id: number;
  duration: number;
  start_date: string;
  group: Group;
  questions: Question[];
}
