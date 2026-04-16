import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            About This Blog
          </h2>
          <p className="text-muted-foreground mb-4">
            Welcome to our blog, a curated space for sharing knowledge and
            exploring the intersection of technology, design, and human-centered
            innovation.
          </p>
          <p className="text-muted-foreground mb-6">
            We believe in the power of quality content to inspire, educate, and
            spark meaningful conversations. Whether you&apos;re a developer,
            designer, entrepreneur, or simply curious about the world of digital
            innovation, you&apos;ll find valuable insights here.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
