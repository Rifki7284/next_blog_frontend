import { Media } from "./media";

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  canonicalURL?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Media;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: Media;
}
