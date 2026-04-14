import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
}: ArticleCardProps) {
  const publishedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group cursor-pointer">
      <Link href={`/articles/${slug}`} className="block">
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">
              {readTime} min read
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>{author}</span>
              <span>•</span>
              <time dateTime={date}>{publishedDate}</time>
            </div>
            <div className="text-primary group-hover:translate-x-1 transition-transform">
              →
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
