export interface IPost {
	id: number
	date: string
	title: { rendered: string }
	content: { rendered: string }
	excerpt: { rendered: string }
	featured_media: number
	slug: string
}