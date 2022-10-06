import request from '../utils/request';
import type { IResult } from '../utils/request';
import { Right } from '../views/Permission/type';

// 获取权限树
export function getPermissionTree() {
  return request.get<Right[]>(`/rights?_embed=children`).then((res) => res.data);
}
// 更新状态
export function updateStatus(id: number, pagepermisson: number) {
  return request.patch(`/rights/${id}`, { pagepermisson }).then((res) => res.data);
}
// 更新状态
export function updateChildStatus(id: number, pagepermisson: number) {
  return request.patch(`/children/${id}`, { pagepermisson }).then((res) => res.data);
}
// 删除
export function deletePermission(id: number) {
  return request.delete(`/rights/${id}`).then((res) => res.data);
}
// 删除
export function deleteChildPermission(id: number) {
  return request.delete(`/children/${id}`).then((res) => res.data);
}
