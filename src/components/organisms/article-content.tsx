import Link from "next/link";
import ArticleHeader from "../molecules/article-header";
import AuthorInfo from "../molecules/author-info";
import { Article } from "@/features/articles/types/articles";
import { getRichTextBlock } from "@/features/articles/utils/getRichText";
interface ArticleContentProps {
  article: Article;
  publishedDate: string;
}
const ArticleContent = ({ article, publishedDate }: ArticleContentProps) => {
  const richText = getRichTextBlock(article?.blocks);

  return (
    <main className="flex-1">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/article"
          className="text-primary hover:underline text-sm mb-8 inline-block"
        >
          ← Back to Articles
        </Link>
        <ArticleHeader article={article} publishedDate={publishedDate} />
        <div className="border-t border-border mb-8"></div>
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-lg text-foreground leading-relaxed space-y-6 whitespace-pre-wrap">
            {richText?.body}
          </div>
        </div>
        <AuthorInfo article={article} />
      </article>
    </main>
  );
};
export default ArticleContent;
