import { Media } from "./media";

export type Block = RichTextBlock | ImageBlock | SeoBlock;

export interface RichTextBlock {
  __component: "shared.rich-text";
  body: string;
}
export interface CoreBlock {
  id: number;
  __component: "shared.core";
  iconName: string;
  title: string;
  description: string;
}

export interface ImageBlock {
  __component: "shared.image";
  image: Media;
  caption?: string;
}
export interface SeoBlock {
  __component: "shared.seo";
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  canonicalURL: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: {
    url: string;
  };
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: {
    url: string;
  };
}
