const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function fetchAPI(
  path: string,
  options?: RequestInit & {
    next?: { revalidate?: number };
  },
) {
  const res = await fetch(`${BASE_URL}/api/${path}`, {
    cache: "force-cache",
    ...options,
  });

  if (!res.ok) {
    console.log(res);
  }

  return res.json();
}
