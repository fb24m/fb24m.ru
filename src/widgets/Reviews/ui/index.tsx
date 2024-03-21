import { Review } from '@/entities/Review'
import { Container } from '@/shared/ui/components/Container'
import type { ReactElement } from 'react'
import styles from './Reviews.module.scss'
import { Wordpress } from '@/services/Wordpress'
import Title2 from '@/shared/ui/components/Title2'
import Button from '@/shared/ui/components/Button'
import Link from 'next/link'

export const Reviews = async (): Promise<ReactElement> => {
	const reviews = await Wordpress.getReviews()

	return (
		<Container className={styles.wrapper}>
			<div className={styles.header}>
				<Title2>Отзывы</Title2>
				<Link href="https://kwork.ru/user/fb24m#reviews" target="_blank">
					<Button icon="reviews" appearance="Primary">Смотреть все</Button>
				</Link>
			</div>
			<div className={styles.reviews}>
				{reviews.map(({ acf, id }) => <Review
					key={id}
					username={acf.author}
					text={acf.content}
					stars={5}
					avatarUrl={acf.avatar_url}
				/>)}
			</div>
		</Container>
	)
}
