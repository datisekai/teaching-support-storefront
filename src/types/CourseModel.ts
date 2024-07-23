import { Department } from "./DepartmentModel";

export interface Course {
  id: number;
  name: string;
  description: string;
  department_id: number;
  created_at: string;
  updated_at: string;
  department: Department;
}
