import { Media } from "./media";

export type Block = RichTextBlock | ImageBlock;

export interface RichTextBlock {
  __component: "blocks.rich-text";
  body: string;
}

export interface ImageBlock {
  __component: "blocks.image";
  image: Media;
  caption?: string;
}
