import { Role } from '../Role/type';

export interface User {
  default: boolean;
  id: number;
  password: number;
  region: string;
  roleId: number;
  roleState: boolean;
  username: string;
  role?: Partial<Role>;
}
