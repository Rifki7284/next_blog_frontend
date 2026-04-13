import { useEffect, useState } from "react";
import { getArticles } from "../services/blogServices";
import { ArticlesResponse } from "../types/articles-response";

export const useArticles = () => {
  const [data, setData] = useState<ArticlesResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getArticles().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  return { data, loading };
};
