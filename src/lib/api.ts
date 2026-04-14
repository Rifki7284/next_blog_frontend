export async function fetchAPI(
  path: string,
  options?: RequestInit & {
    next?: { revalidate?: number };
  },
) {
  const res = await fetch(`http://localhost:1337/api${path}`, {
    cache: "force-cache", // ✅ SSG default
    ...options,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }

  return res.json();
}
