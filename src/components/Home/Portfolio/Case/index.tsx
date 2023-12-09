import styles from './index.module.scss'
import './index.scss'
import type { HTMLAttributes, ReactElement } from 'react'

import { Title2, Title4 } from '@/ui/components'

import { WpImage } from '@/components/WpImage/WpImage.component'
import { exists } from '@/functions/exists'

interface CaseProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	content: string
	light?: boolean
	label: string
	imageId: number
	review?: number
}

export const Case = async ({ title, imageId, label }: CaseProps): Promise<ReactElement> => {
	console.log('render case')

	return (
		<section className={`portfolio-case ${styles.wrapper}`}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.imageBlock}>
					<WpImage className={styles.review} imageId={imageId} />
				</div>

				<div className={styles.info}>
					<Title4 className="observe">{label}</Title4>
					<Title2 className="observe">{title}</Title2>
					<Title4 className="observe">Отзыв заказчика:</Title4>
					<WpImage className={styles.review} imageId={exists<number>(imageId)} />
				</div>
			</div>
		</section >
	)
}
