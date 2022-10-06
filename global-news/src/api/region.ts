import request from '../utils/request';
import type { IResult } from '../utils/request';
import { Region } from '../views/Region/type';

// 获取权限树
export function getRegionList() {
  return request.get<Region[]>(`/regions`).then((res) => res.data);
}
