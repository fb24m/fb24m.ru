import type { IPost } from '../interfaces/IPost'
import type { IPet } from '../interfaces/IPet'
import type { ISettings } from '../interfaces/ISettings'
import type { IPage } from '../interfaces/IPage'
import type { IMenu } from '@/interfaces/Menu.interface'
import type { ICase } from '@/interfaces/Case.interface'

import { request } from '@/functions/request'

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
	getShortcutByName: (name: string) => request<Array<{ acf: { link: string } }>>(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/shortcuts/?slug=${name}`, `shortcut-${name}`),

	getMenu: () => request<IMenu>('https://fb24m.ru/fb24m/wp-json/menus/v1/menus/glavnoe-menyu', 'menu')
}
