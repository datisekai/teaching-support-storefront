import { Room } from "./RoomModel";
import { User } from "./UserModel";

export interface Attendance {
  id: number;
  student_id: number;
  room_id: number;
  success: boolean;
  created_at: string;
  updated_at: string;
  room: Room;
  student: User;
}
