import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}

export function postUrl(post: CollectionEntry<'blog'>) {
  return `/posts/${post.id}/`;
}
