import { Block, RichTextBlock } from "../types/blocks";

export function getRichTextBlock(blocks: Block[]): RichTextBlock | undefined {
  return blocks.find(
    (block): block is RichTextBlock => block.__component === "shared.rich-text",
  );
}
