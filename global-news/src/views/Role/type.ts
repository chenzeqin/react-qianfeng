export interface Role {
  id: number;
  roleName: string;
  roleType: number;
  rights: string[];
}

export enum RoleMap {
  'SUPER_ADMIN' = 1, // 超级管理员
  'AREA_ADMIN' = 2, // 区域管理员
  'EDITOR' = 3,
}
