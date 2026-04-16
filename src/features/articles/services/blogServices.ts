import { fetchAPI } from "@/lib/api";
import { ArticlesResponse } from "../types/articles-response";
import { Article } from "../types/articles";

export async function getArticles(): Promise<ArticlesResponse> {
  return fetchAPI("articles?populate=*");
}
export async function getArticleBySlug(
  slug: string,
): Promise<ArticlesResponse> {
  return fetchAPI(
    `articles?filters[slug][$eq]=${slug}&populate[cover][populate]=*&populate[category][populate]=*&populate[author][populate][avatar][populate]=*&populate[blocks][populate]=*`,
  );
}
