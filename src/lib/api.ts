const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(
  path: string,
  options?: RequestInit & {
    next?: { revalidate?: number };
  },
) {
  const res = await fetch(`${BASE_URL}/api${path}`, {
    cache: "force-cache", // ✅ SSG default
    ...options,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}
