import { Course } from "./CourseModel";
import { User } from "./UserModel";

export interface Group {
  id: number;
  course_id: number;
  teacher_id: number;
  name: string;
  due_date: string;
  created_at: string;
  updated_at: string;
  course: Course;
  teacher: User;
}
