const HeroSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Stories, Insights & Ideas
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Explore thought-provoking articles about technology, design, and
          modern creativity. Share your perspective with our growing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#articles"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Articles
          </a>
          <a
            href="/about"
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
