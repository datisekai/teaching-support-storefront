import { Chapter } from "./ChapterModel";
import { Course } from "./CourseModel";
import { DifficultyLevel } from "./DifficultyLevelModel";

export interface Question {
  id: number;
  course_id: number;
  course: Course;
  chapter_id: number;
  chapter: Chapter;
  difficulty_id: number;
  difficulty: DifficultyLevel;
  content: string;
  correct_answer: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
}
