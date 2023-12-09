let totalRequsts: number = 0

export const request = async <T,>(path: string, tag: string): Promise<T> => {
	totalRequsts++
	console.log(`[<Request> log] Request to ${path}\n[<Request> log] Total requests: ${totalRequsts}`)

	try {
		const response = await fetch(path, {
			next: { tags: [tag], revalidate: 600 }
		})
		const posts: T = await response.json()

		return posts
	} catch {
		console.log(`[<Request> Error] ${path}`)

		return await new Promise<T>(() => { })
	}
}
