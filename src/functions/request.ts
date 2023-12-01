export const request = async <T,>(path: string, tag: string) => {
	const response = await fetch(path, { next: { tags: [tag], revalidate: 1 } });
	const posts: T = await response.json();

	return posts;
}