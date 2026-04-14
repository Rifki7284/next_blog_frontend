/**
 * App Constants
 * Global application configuration and constants
 */

export const SITE_CONFIG = {
  name: "Modern Blog",
  title: "Stories, Insights & Ideas",
  description:
    "Explore thought-provoking articles about technology, design, and modern creativity",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  locale: "en-US",
} as const;

export const BLOG_CONFIG = {
  postsPerPage: 12,
  featuredPostsCount: 3,
  relatedPostsCount: 3,
  readTimeWordsPerMinute: 200,
} as const;

export const CATEGORIES = [
  "Technology",
  "Design",
  "Lifestyle",
  "Tutorial",
] as const;

export const API_ENDPOINTS = {
  articles: "/api/articles",
  article: (slug: string) => `/api/articles/${slug}`,
  categories: "/api/categories",
  search: "/api/search",
  subscribe: "/api/subscribe",
  contact: "/api/contact",
} as const;

export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
} as const;
