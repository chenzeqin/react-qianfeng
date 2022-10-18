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
// 更新新闻
export function updateNews(id: string, news: Partial<News>) {
  return request.patch(`/news/${id}`, news).then((res) => res.data);
}
// 查看新闻
export function getNews(id: string) {
  return request.get<News>(`/news/${id}?_expand=category&_expand=role`).then((res) => res.data);
}
/* TODO: userName应该换成userId  */
// 草稿列表
export function getDraftList(userName: string) {
  return request
    .get<News[]>(`/news?_expand=category&createName=${userName}&auditState=0`)
    .then((res) => res.data);
}
// 草稿列表
export function deleteDraft(id: number) {
  return request.delete(`/news/${id}`).then((res) => res.data);
}

// 审核列表
export function getAuditList(userName: string) {
  return request
    .get<News[]>(`/news?_expand=category&author=${userName}&auditState_ne=0&publishState_lte=1`)
    .then((res) => res.data);
}
// 审核新闻 审核中 - 未发布
export function getMyAuditList(userName: string) {
  return request
    .get<News[]>(`/news?_expand=category&auditState=1&publishState_lte=1`)
    .then((res) => res.data);
}

// 新闻列表
export function getPublishList(userName: string, publishState: number) {
  return request
    .get<News[]>(
      `/news?_expand=category&author=${userName}&auditState_gte=1&publishState=${publishState}`
    )
    .then((res) => res.data);
}
