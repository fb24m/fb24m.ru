export interface IPet {
	id: number
	title: { rendered: string }
	content: { rendered: string }
	acf: {
		url: string,
		icon: string
	}
}