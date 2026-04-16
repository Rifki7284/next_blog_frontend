<<<<<<< HEAD
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
=======
const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

>>>>>>> 6c2a4d3b773dcf9e8dc59aa56b570a6f91de8708
export async function fetchAPI(
  path: string,
  options?: RequestInit & {
    next?: { revalidate?: number };
  },
) {
<<<<<<< HEAD
  const res = await fetch(`${BASE_URL}api/${path}`, {
=======
  const res = await fetch(`${BASE_URL}/api${path}`, {
>>>>>>> 6c2a4d3b773dcf9e8dc59aa56b570a6f91de8708
    cache: "force-cache", // ✅ SSG default
    ...options,
  });

  if (!res.ok) {
<<<<<<< HEAD
    console.log(res);
=======
    throw new Error("Failed to fetch API");
>>>>>>> 6c2a4d3b773dcf9e8dc59aa56b570a6f91de8708
  }

  return res.json();
}
