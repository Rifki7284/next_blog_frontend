import Link from "next/link";
import { FileX } from "lucide-react";

const ArticleNotFound = () => {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/article"
          className="text-primary hover:underline text-sm mb-8 inline-block"
        >
          ← Back to Articles
        </Link>

        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-5">
            <FileX className="w-8 h-8 text-muted-foreground" />
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">
            Article Not Found
          </h1>
          <p className="text-sm text-muted-foreground max-w-xs mb-8">
            Artikel yang kamu cari tidak tersedia atau mungkin sudah dihapus.
          </p>

          <Link
            href="/article"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ArticleNotFound;
