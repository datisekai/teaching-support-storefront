import { Course } from "./CourseModel";

export interface Chapter {
  id: number;
  course_id: number;
  course: Course;
  name: string;
  description?: string;
}
