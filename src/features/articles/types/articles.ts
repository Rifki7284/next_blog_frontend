import { Media } from "./media";
import { Category } from "./category";
import { Seo } from "./seo";
import { Block } from "./bloks";
import { Meta } from "./articles-response";
import { Author } from "./author";

export interface Article {
  id: string;
  title: string;
  description: string;
  slug: string;
  cover: Media;
  author: Author;
  category: Category;
  publishedAt: Date;
  seo: Seo;
  blocks: Block[];
}
