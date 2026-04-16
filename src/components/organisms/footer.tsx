import Link from "next/link";
import Navigation from "../molecules/navigation";
import Categories from "../molecules/categories";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Blog</h3>
            <p className="text-sm text-muted-foreground">
              Share your thoughts, ideas, and stories with the world.
            </p>
          </div>
          <Navigation />
          <Categories />
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Modern Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
