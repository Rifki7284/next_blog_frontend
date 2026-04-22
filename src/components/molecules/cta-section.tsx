import Link from "next/link";

const CTASection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg mx-auto mb-6">
          🚀
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-3">
          Ready to Explore?
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-8">
          Dive into our collection of articles and start your journey of
          discovery — tech insights, design inspiration, and lifestyle tips.
        </p>

        <Link
          href="/article"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Read Articles
          <span className="text-xs opacity-70">→</span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
