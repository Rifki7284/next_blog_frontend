import { Block, RichTextBlock } from "../types/bloks";

export function getRichTextBlock(blocks: Block[]): RichTextBlock | undefined {
  return blocks.find(
    (block): block is RichTextBlock => block.__component === "shared.rich-text",
  );
}
