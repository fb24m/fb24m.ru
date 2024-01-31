import { Wordpress } from '@/services/Wordpress'
import type { ReactElement } from 'react'

export const WpCategory = async ({ categoryId }: { categoryId: number }): Promise<ReactElement> => {
	const category = await Wordpress.getCategoryById(categoryId)

	return (
		<span>{category.name}</span>
	)
}
