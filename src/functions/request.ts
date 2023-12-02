export const request = async <T,>(path: string, tag: string, headers?: HeadersInit) => {
	const response = await fetch(path, {
		next: { tags: [tag], revalidate: 1 },
	});
	const posts: T = await response.json();

	return posts;
}

// headers: {
// 	'Authorization': `Basic ${btoa(`fb24m: ${process.env.WORDPRESS_TOKEN}`)}`
// }