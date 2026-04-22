import { CoreBlock } from "./blocks";
export interface About {
  id: number;
  documentId: string;
  title: string;
  description: string;
  mission: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: CoreBlock[];
}
