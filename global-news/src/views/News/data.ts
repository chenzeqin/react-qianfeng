import { News } from './news.type';

export const initNews: Partial<News> = {
  auditState: undefined, // 审核状态
  author: 'admin',
  categoryId: undefined,
  content: '',
  createTime: undefined,
  id: undefined,
  publishState: undefined, // 发布状态
  publishTime: undefined,
  region: '',
  roleId: undefined,
  star: undefined,
  title: '',
  view: undefined,
};
