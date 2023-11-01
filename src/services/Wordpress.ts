import axios from 'axios';

import { IPost } from '../interfaces/IPost';
import { ISettings } from '../interfaces/ISettings';
import { IPage } from '../interfaces/IPage';

const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2';

export const WordpressService = {
	getPosts: () => axios.get<IPost[]>(`${API}/posts`),
	getPostBySlug: (slug: string) => axios.get<IPost[]>(`${API}/posts?slug=${slug}`),
	getPages: () => axios.get<IPage[]>(`${API}/pages`),
	getPageBySlug: (slug: string) => axios.get<IPage[]>(`${API}/pages?slug=${slug}`),
	getGlobalFileBySlug: (slug: string) => axios.get<IPage[]>(`${API}/global-files?slug=${slug}`),
	getSettings: () => axios.get<ISettings>('https://www.fb24m.ru/fb24m/wp-json'),
}