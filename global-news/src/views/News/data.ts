import { News, Option } from './news.type';

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

export const auditStateOptions: Option[] = [
  {
    value: 0,
    name: '未提交(草稿)',
  },
  {
    value: 1,
    name: '审核中',
  },
  {
    value: 2,
    name: '审核通过',
  },
  {
    value: 3,
    name: '已拒绝',
  },
];
export const publishStateOptions: Option[] = [
  {
    value: 0,
    name: '未发布',
  },
  {
    value: 1,
    name: '待发布',
  },
  {
    value: 2,
    name: '已发布',
  },
  {
    value: 3,
    name: '已下线',
  },
];
