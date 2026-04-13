import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Media } from "./media";
import { Category } from "./category";
import { Seo } from "./seo";
import { Block } from "./bloks";

export interface Article {
  title: string;
  description: string;
  slug: string;
  cover: Media;
  author: Author;
  category: Category;
  seo: Seo;
  blocks: Block[];
}
