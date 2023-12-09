import type { ReactNode } from 'react'

import styles from './index.module.scss'
import { Body1, Card, Icon, Title4 } from '@/ui/components'

export interface PetCardProps {
	title: string
	content: string
	url: string
	icon: string
}

const PetCard = (props: PetCardProps): ReactNode => (
	<a href={props.url}>
		<Card className={styles.wrapper} size="normal">
			<Icon name={props.icon} size='big' />
			<div className={styles.content}>
				<Title4 dangerouslySetInnerHTML={{ __html: props.title }}></Title4>
				<Body1 dangerouslySetInnerHTML={{ __html: props.content }}></Body1>
			</div>
		</Card>
	</a>
)

export default PetCard
