import { Room } from "./RoomModel";
import { User } from "./UserModel";

// export interface Attendance {
//   id: number;
//   student_id: number;
//   room_id: number;
//   success: boolean;
//   created_at: string;
//   updated_at: string;
//   room: Room;
//   student: User;
// }

export interface IAttendance {
  createdAt: string;
  id: number;
  attendance: Attendance;
}

export interface Attendance {
  createdAt: Date;
  class: Class;
}

export interface Class {
  name: string;
  major: Major;
  teachers: Major[];
}

export interface Major {
  code: string;
  name: string;
}
