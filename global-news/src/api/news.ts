import request from '../utils/request';
import { Category, News } from '../views/News/news.type';
import { groupBy } from 'lodash';
// 获取分类列表
export function getCategories() {
  return request.get<Category[]>(`/categories`).then((res) => res.data);
}
// 修改分类
export function updateCategory(id: number, category: Partial<Category>) {
  return request.patch<any>(`/categories/${id}`, category).then((res) => res.data);
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
// 最常浏览
export function getMostViewNews() {
  return request
    .get<News[]>(`/news?_expand=category&publishState=2&_sort=view&_order=desc&_limit=6`)
    .then((res) => res.data);
}
// 最多点赞
export function getMostStarNews() {
  return request
    .get<News[]>(`/news?_expand=category&publishState=2&_sort=star&_order=desc&_limit=6`)
    .then((res) => res.data);
}

// 分类统计
export function getLineChartData() {
  return request.get<News[]>(`/news?_expand=category&publishState=2&_order=desc`).then((res) => {
    const dataGroup = groupBy(res.data, (item) => item.category?.title);

    const data: {
      xAxis: string[];
      yAxis: number[];
    } = {
      xAxis: [],
      yAxis: [],
    };
    for (let key in dataGroup) {
      data.xAxis.push(key);
      data.yAxis.push(dataGroup[key].length);
    }

    return data;
  });
}
