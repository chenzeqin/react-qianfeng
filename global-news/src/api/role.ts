import request from '../utils/request';
import type { IResult } from '../utils/request';
import { Role } from '../views/Role/type';

// 获取权限树
export function getRoleList() {
  return request.get<Role[]>(`/roles`).then((res) => res.data);
}
// 部分更新role
export function patchRole(id: number, partialRole: Partial<Role>) {
  return request.patch(`/roles/${id}`, partialRole).then((res) => res.data);
}
// 删除
export function deleteRole(id: number) {
  return request.delete(`/roles/${id}`).then((res) => res.data);
}
