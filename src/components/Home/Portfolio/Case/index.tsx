import styles from './index.module.scss'
import type { HTMLAttributes, ReactElement } from 'react'

import { WpImage } from '@/components/WpImage/WpImage.component'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { poiretOne } from '@/fonts'
import { Review } from '@/entities/Review'
import Button from '@/shared/ui/components/Button'

const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))
const Title3 = dynamic(() => import('@/shared/ui/components/Title3'))

interface CaseProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	content: string
	label: string
	imageId: number
}

export const Case = async ({ title, imageId, label, className }: CaseProps): Promise<ReactElement> => {
	return (
		<section className={clsx(styles.wrapper, className)}>
			<div className={styles.inner}>
				<div className={styles.info}>
					<div className={styles.header}>
						<Title2 className={clsx(styles.subtitle, poiretOne.className)}>{label}</Title2>
						<Button appearance="Primary">Смотреть</Button>
					</div>
					<div className={styles.imageBlock}>
						<WpImage className={styles.image} imageId={imageId} />
					</div>
					<Review className={styles.review}
						username="fb24m"
						avatarUrl=""
						text="Очен крута ваще"
						stars={5}
					/>
					<Title3 className={clsx(styles.title, poiretOne.className)}>{title}</Title3>
				</div>
			</div>
		</section>
	)
}
