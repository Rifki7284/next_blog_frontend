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
            <div className="w-full h-48 sm:h-56 overflow-hidden bg-muted">
              <Image
                src={`${BASE_URL}${cover.url}`}
                alt={title}
                width={100}
                height={100}
                loading="lazy"
                quality={100}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-600">
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {readTime} min read
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h2>

            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>{author.name}</span>
                <span>•</span>
                <time dateTime={publishedAt.toString()}>{publishedDate}</time>
              </div>
              <div className="text-primary group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
