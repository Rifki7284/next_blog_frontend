export function calculateReadTime(
  content?: string,
  wordsPerMinute: number = 200,
): number {
  if (!content) return 0;

  // remove HTML tags
  const text = content.replace(/<[^>]*>/g, " ");

  // count words
  const words = text.trim().split(/\s+/).filter(Boolean).length;

  // calculate minutes
  const minutes = Math.ceil(words / wordsPerMinute);

  return Math.max(1, minutes);
}
