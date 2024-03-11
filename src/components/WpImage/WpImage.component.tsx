'use server'

import { Wordpress } from '@/services/Wordpress'
import Image from 'next/image'
import styles from './WpImage.module.scss'
import { exists } from '@/functions/exists'
import type { ReactElement } from 'react'

export interface WpImagemageProps {
	imageId: number
	className?: string
}

export const WpImage = async ({ imageId, className, ...props }: WpImagemageProps): Promise<ReactElement> => {
	const image = await Wordpress.getMediaById(imageId)

	return <>
		{typeof image.id !== 'undefined'
			? <Image {...props}
				style={{ color: '#fff' }}
				className={`${styles.image} ${className}`}
				width={1000} height={1000}
				src={exists(image?.guid?.rendered)}
				alt={image?.alt_text !== '' && typeof image?.alt_text !== 'undefined' ? image?.alt_text : 'Изображение не загрузилось'} />
			: ''}
	</>
}
