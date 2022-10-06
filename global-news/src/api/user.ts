import request from '../utils/request';
import type { IResult } from '../utils/request';
import { User } from '../views/User/type';

// 获取权限树
export function getUserList() {
  return request.get<User[]>(`/users?_expand=role`).then((res) => res.data);
}
// 部分更新role
export function patchUser(id: number, partialUser: Partial<User>) {
  return request.patch(`/users/${id}`, partialUser).then((res) => res.data);
}
// 删除
export function deleteUser(id: number) {
  return request.delete(`/users/${id}`).then((res) => res.data);
}
