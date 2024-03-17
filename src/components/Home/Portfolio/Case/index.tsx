import styles from './index.module.scss'
import './index.scss'
import type { HTMLAttributes, ReactElement } from 'react'

import { Body1 } from '@/shared/ui/components'

import { WpImage } from '@/components/WpImage/WpImage.component'
import { exists } from '@/functions/exists'
import dynamic from 'next/dynamic'

const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))
const Title3 = dynamic(() => import('@/shared/ui/components/Title3'))

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
					<Title2 className={styles.subtitle}>{label}</Title2>
					<Title3 className={styles.title}>{title}</Title3>
					<Body1 className={styles.subtitle}>Отзыв заказчика:</Body1>
					<WpImage className={styles.review} imageId={exists<number>(review)} />
				</div>
			</div>
		</section >
	)
}
