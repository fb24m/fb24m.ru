import { IPost } from '../interfaces/IPost'
import { IPet } from '../interfaces/IPet'
import { ISettings } from '../interfaces/ISettings'
import { IPage } from '../interfaces/IPage'
import { request } from '@/functions/request'
import { IMenu } from '@/interfaces/Menu.interface'
import { ICase } from '@/interfaces/Case.interface'

export const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2'

export const Wordpress = {
	getPetProjects: () => request<IPet[]>(`${API}/pet`, 'pet'),
	// Получение постов
	getPosts: () => request<IPost[]>(`${API}/posts`, 'posts'),
	getPostBySlug: (slug: string) => request<IPost[]>(`${API}/posts?slug=${slug}`, `post-${slug}`),
	// Получение страниц
	getPages: () => request<IPage[]>(`${API}/pages`, 'pages'),
	getPageBySlug: (slug: string) => request<IPage[]>(`${API}/pages?slug=${slug}`, `page-${slug}`),
	// Portfolio
	getPortfolio: () => request<ICase[]>(`${API}/portfolio`, 'portfolio'),
	getCaseBySlug: (slug: string) => request<ICase[]>(`${API}/portfolio?slug=${slug}`, `portfolio-${slug}`),
	// Дракон
	getMediaById: (id: number) => request<{ guid: { rendered: string } }>(`${API}/media/${id}`, `image-${id}`),
	// 
	getGlobalFileBySlug: (slug: string) => request<IPage[]>(`${API}/global-files?slug=${slug}`, `global-file-${slug}`),
	getSettings: () => request<ISettings>('https://www.fb24m.ru/fb24m/wp-json', 'settings'),
	getShortcutByName: (name: string) => request<{ acf: { link: string } }[]>(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/shortcuts/?slug=${name}`, `shortcut-${name}`),

	getMenu: () => request<IMenu>(`https://fb24m.ru/fb24m/wp-json/menus/v1/menus/glavnoe-menyu`, 'menu')
}