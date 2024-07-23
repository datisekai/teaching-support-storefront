export interface Student {
  id: number;
  code: string;
  email: string;
  phone: string | null;
  role: string;
  active: boolean;
  name: string;
  avatar: string | null;
  device_uid: string | null;
  created_at: string;
  updated_at: string;
}
