export interface News {
  auditState: number;
  author: string;
  categoryId: number;
  content: string;
  createTime: number;
  id: number;
  publishState: number;
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
