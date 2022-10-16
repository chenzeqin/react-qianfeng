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
// 查看新闻
export function getNews(id: string) {
  return request.get<News>(`/news/${id}?_expand=category&_expand=role`).then((res) => res.data);
}
// 草稿列表
export function getDraftList(userId: number) {
  return request
    .get<News[]>(`/news?_expand=category&createName=${userId}&auditState=0`)
    .then((res) => res.data);
}
// 草稿列表
export function deleteDraft(id: number) {
  return request.delete(`/news/${id}`).then((res) => res.data);
}
