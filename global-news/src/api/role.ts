import request from '../utils/request';
import type { IResult } from '../utils/request';
import { Role } from '../views/Role/type';

// 获取权限树
export function getRoleList() {
  return request.get<Role[]>(`/roles`).then((res) => res.data);
}
// 更新状态
export function updateStatus(id: number, pagepermisson: number) {
  return request.patch(`/roles/${id}`, { pagepermisson }).then((res) => res.data);
}
// 删除
export function deleteRole(id: number) {
  return request.delete(`/roles/${id}`).then((res) => res.data);
}
