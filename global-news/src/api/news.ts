import request from '../utils/request';
import { Category, News } from '../views/News/news.type';

// 获取权限树
export function getCategories() {
  return request.get<Category[]>(`/categories`).then((res) => res.data);
}

// 添加新闻
export function addNews(news: Partial<News>) {
  return request.post(`/news`, news).then((res) => res.data);
}
