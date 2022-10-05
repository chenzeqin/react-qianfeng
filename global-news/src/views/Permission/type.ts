export interface Right {
  grade: number;
  id: number;
  title: string;
  key: string;
  pagepermisson?: number;
  rightId?: number;
  children?: Right[];
  icon?: string;
}
