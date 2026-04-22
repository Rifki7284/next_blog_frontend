import { fetchAPI } from "@/lib/api";
import { AboutResponse } from "../types/about-response";

export async function getAbout(): Promise<AboutResponse> {
  return fetchAPI(`about?populate=*`);
}
