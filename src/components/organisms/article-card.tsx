import { Article } from "@/features/articles/types/articles";
import { calculateReadTime } from "@/features/articles/utils/calculateReadtime";
import { formatDate } from "@/features/articles/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export function ArticleCard({
  author,
  blocks,
  category,
  cover,
  publishedAt,
  title,
  slug,
}: Article) {
  const richText = blocks?.find(
    (block) => block.__component === "shared.rich-text",
  );
  const readTime = calculateReadTime(richText?.body);
  const publishedDate = formatDate(publishedAt);

  return (
    <article className="group cursor-pointer">
      <Link href={`/article/${slug}`} className="block">
        <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          {cover && (
            <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-muted">
              <Image
                src={`${BASE_URL}${cover.url}`}
                unoptimized
                alt={title}
                fill
                loading="eager"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-600 truncate max-w-30">
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground shrink-0">
                {readTime} min read
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {title}
            </h2>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="truncate">{author.name}</span>
                <span className="shrink-0">•</span>
                <time dateTime={publishedAt.toString()} className="shrink-0">
                  {publishedDate}
                </time>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
