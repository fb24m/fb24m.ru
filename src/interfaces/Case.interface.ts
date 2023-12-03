export interface ICase {
	title: { rendered: string };
	content: { rendered: string };
	featured_media: number;
	acf: { label: string, light: boolean, background: string, gallery: string, review: number }
}