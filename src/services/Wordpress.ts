import type { IPost } from '../interfaces/IPost'
import type { IPet } from '../interfaces/IPet'
import type { ISettings } from '../interfaces/ISettings'
import type { IPage } from '../interfaces/IPage'
import type { IMenu } from '@/interfaces/Menu.interface'
import type { ICase } from '@/interfaces/Case.interface'
import type { ICategory } from '@/interfaces/Category.interface'
import type { IReviews } from '@/shared/interfaces/Reviews.interface'

import { request } from '@/functions/request'

export const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2'

export const wpRequest = async <T>(path: string): Promise<T> =>
	await request<T>(`${API}/${path}`, path)

export const Wordpress = {
	getPetProjects: () => wpRequest<IPet[]>('pet'),
	// Получение постов
	getPosts: () => wpRequest<IPost[]>('posts'),
	getPostBySlug: (slug: string) => wpRequest<IPost[]>(`posts?slug=${slug}`),
	getPostsByCategoryId: (id: number) => wpRequest<IPost[]>(`posts?categories=${id}`),
	getCategoryById: (id: number) => wpRequest<ICategory>(`categories/${id}`),
	// Получение страниц
	getPages: () => wpRequest<IPage[]>('pages'),
	getPageBySlug: (slug: string) => wpRequest<IPage[]>(`pages?slug=${slug}`),
	// Portfolio
	getPortfolio: () => wpRequest<ICase[]>('portfolio'),
	getCaseBySlug: (slug: string) => wpRequest<ICase[]>(`portfolio?slug=${slug}`),
	// Дракон
	getMediaById: (id: number) =>
		wpRequest<{ id: number, guid: { rendered: string }, alt_text: string }>(`media/${id}`),
	// Отзывы
	getReviews: async () => await wpRequest<IReviews[]>('reviews'),
	//
	getGlobalFileBySlug: (slug: string) => wpRequest<IPage[]>(`global-files?slug=${slug}`),
	getSettings: () => request<ISettings>('https://www.fb24m.ru/fb24m/wp-json', 'settings'),
	getShortcutByName: (name: string) => request<Array<{ acf: { link: string } }>>(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/shortcuts/?slug=${name}`, `shortcut-${name}`),

	getMenu: () => request<IMenu>('https://fb24m.ru/fb24m/wp-json/menus/v1/menus/glavnoe-menyu', 'menu')
}
