import request from '../utils/request';
import { Category } from '../views/News/news.type';

// 获取权限树
export function getCategories() {
  return request.get<Category[]>(`/categories`).then((res) => res.data);
}
