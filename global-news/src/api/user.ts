import request from '../utils/request';
import type { IResult } from '../utils/request';
import { PermissionTreeData } from '../views/Permission/type';

// 获取权限树
export function getPermissionTree() {
  return request.get<PermissionTreeData>(`/rights?_embed=children`).then((res) => res.data);
}
