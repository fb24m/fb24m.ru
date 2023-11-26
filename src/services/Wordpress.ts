import axios from 'axios';

import { IPost } from '../interfaces/IPost';
import { IPet } from '../interfaces/IPet';
import { ISettings } from '../interfaces/ISettings';
import { IPage } from '../interfaces/IPage';

export const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2';

export const WordpressService = {
	getPetProjects: () => axios.get<IPet[]>(`${API}/pet`),
	// Получение постов
	getPosts: () => axios.get<IPost[]>(`${API}/posts?key=${Math.random() * 999999}`),
	getPostBySlug: (slug: string) => axios.get<IPost[]>(`${API}/posts?slug=${slug}`),
	// Получение страниц
	getPages: () => axios.get<IPage[]>(`${API}/pages`),
	getPageBySlug: (slug: string) => axios.get<IPage[]>(`${API}/pages?slug=${slug}`),
	// Дракон
	getGlobalFileBySlug: (slug: string) => axios.get<IPage[]>(`${API}/global-files?slug=${slug}`),
	getSettings: () => axios.get<ISettings>('https://www.fb24m.ru/fb24m/wp-json'),
	getShortcutByName: (name: string) => axios.get<{ acf: { link: string } }[]>(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/shortcuts/?slug=${name}`),
}