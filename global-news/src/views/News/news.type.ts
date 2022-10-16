export interface News {
  auditState: number; // 0 未审核 1 审核中 3 审核ok 4 审核 rejected
  author: string;
  categoryId: number;
  content: string;
  createTime: number;
  id: number;
  publishState: number; // 0 未发布 1 已发布
  publishTime: number;
  region: string;
  roleId: number;
  star: number;
  title: string;
  view: number;
}

export interface Category {
  id: number;
  title: string;
  value: string;
}
