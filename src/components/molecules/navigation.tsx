import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <h4 className="font-semibold text-foreground text-sm mb-4">Navigation</h4>
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/articles"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
