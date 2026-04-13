import { describe, it, expect, vi } from "vitest";
import * as api from "@/lib/api";
import { getArticleBySlug, getArticles } from "./blogServices";

describe("blogService", () => {
  it("should call fetchAPI for getArticles", async () => {
    const mockData = {
      data: [{ id: 1, attributes: { title: "Test Article" } }],
    };

    const spy = vi.spyOn(api, "fetchAPI").mockResolvedValue(mockData as any);

    const result = await getArticles();

    expect(spy).toHaveBeenCalledWith("/articles?populate=*");
    expect(result).toEqual(mockData);
  });

  it("should call fetchAPI with correct slug", async () => {
    const slug = "hello-world";

    const mockData = {
      data: [{ id: 1, attributes: { slug } }],
    };

    const spy = vi.spyOn(api, "fetchAPI").mockResolvedValue(mockData as any);

    const result = await getArticleBySlug(slug);

    expect(spy).toHaveBeenCalledWith(
      `/articles?filters[slug][$eq]=${slug}&populate=*`,
    );

    expect(result).toEqual(mockData);
  });
});
