import { NavigationLink } from "@/types/navigation";

export const MAIN_NAV_LINKS: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
    description: "Back to homepage",
  },
  {
    label: "Articles",
    href: "/articles",
    description: "Browse all articles",
  },
  {
    label: "About",
    href: "/about",
    description: "Learn about our blog",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
];

export const FOOTER_LINKS = {
  navigation: MAIN_NAV_LINKS,
  categories: [
    { label: "Technology", href: "/category/technology" },
    { label: "Design", href: "/category/design" },
    { label: "Lifestyle", href: "/category/lifestyle" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export const ROUTES = {
  HOME: "/",
  ARTICLES: "/articles",
  ARTICLE_DETAIL: (slug: string) => `/articles/${slug}`,
  ABOUT: "/about",
  CONTACT: "/contact",
  CATEGORY: (category: string) => `/category/${category}`,
} as const;
