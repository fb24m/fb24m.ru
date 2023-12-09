import styles from './index.module.scss'
import './index.scss'
import type { HTMLAttributes, ReactElement } from 'react'

import { Body1, Title2, Title3 } from '@/ui/components'

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

export const Case = async ({ title, imageId, label, review }: CaseProps): Promise<ReactElement> => {
	console.log('render case')

	return (
		<section className={`portfolio-case ${styles.wrapper}`}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.imageBlock}>
					<WpImage className={styles.review} imageId={imageId} />
				</div>

				<div className={styles.info}>
					<Title2 className={`${styles.subtitle} observe`}>{label}</Title2>
					<Title3 className={`${styles.title} observe`}>{title}</Title3>
					<Body1 className={`${styles.subtitle} observe`}>Отзыв заказчика:</Body1>
					<WpImage className={styles.review} imageId={exists<number>(review)} />
				</div>
			</div>
		</section >
	)
}
