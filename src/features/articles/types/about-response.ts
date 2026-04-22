import { About } from "./about";

export interface AboutResponse {
  data: About;
}
export interface CoreBlock {
  id: number;
  __component: "shared.core";
  iconName: string;
  title: string;
  description: string;
}
