import Link from "next/link";

const Categories = () => {
  return (
    <div>
      <h4 className="font-semibold text-foreground text-sm mb-4">Categories</h4>
      <ul className="space-y-2">
        <li>
          <Link
            href="/category/tech"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            href="/category/design"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Design
          </Link>
        </li>
        <li>
          <Link
            href="/category/lifestyle"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Lifestyle
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Categories;
