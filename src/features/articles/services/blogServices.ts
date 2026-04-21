import { fetchAPI } from "@/lib/api";
import { ArticlesResponse } from "../types/articles-response";
export async function getArticles(page = 1): Promise<ArticlesResponse> {
  return fetchAPI(
    `articles?populate=*&pagination[page]=${page}&pagination[pageSize]=6`,
  );
}
export async function getArticleBySlug(
  slug: string,
): Promise<ArticlesResponse> {
  return fetchAPI(
    `articles?filters[slug][$eq]=${slug}&populate[cover][populate]=*&populate[category][populate]=*&populate[author][populate][avatar][populate]=*&populate[blocks][populate]=*`,
  );
}
export async function getSearchArticles(
  query: string,
  page = 1,
): Promise<ArticlesResponse> {
  return fetchAPI(
    `articles?filters[title][$containsi]=${query}
    &pagination[page]=${page}
    &pagination[pageSize]=6
    &fields[0]=title
    &fields[1]=slug
    &populate[cover][fields][0]=url`,
  );
}
