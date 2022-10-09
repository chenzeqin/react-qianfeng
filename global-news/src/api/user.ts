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
// 新增
export function addUser(user: User) {
  return request.post(`/users`, user).then((res) => res.data);
}
// 编辑
export function updateUser(id: number, user: User) {
  return request.put(`/users/${id}`, user).then((res) => res.data);
}

// 登陆（查询用户）
export function login(username: string, password: string) {
  return request
    .get<User[]>(`/users?username=${username}&password=${password}&roleState=true&_expand=role`)
    .then((res) => {
      if (res.data.length) {
        return {
          success: true,
          user: res.data[0],
        };
      }
      return {
        success: false,
        user: null,
      };
    });
}
