import { Article } from "./articles";
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export interface Meta {
  pagination: Pagination;
}
export interface ArticlesResponse {
  data: Article[];
  meta: Meta;
}
