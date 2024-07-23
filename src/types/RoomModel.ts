import { Group } from "./GroupModel";

export interface Room {
  id: number;
  title: string;
  description: string;
  secret_key: string;
  owner_id: number;
  group_id: number;
  active: boolean;
  status: string;
  created_at: string;
  updated_at: string;
  group: Group;
}
