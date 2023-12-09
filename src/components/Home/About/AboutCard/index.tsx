import styles from './index.module.scss'
import type { ReactNode, HTMLAttributes } from 'react'

import { Body1, Title3 } from '@/ui/components'

interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	description: string
}

export const AboutCard = ({ title, description, ...props }: AboutCardProps): ReactNode => {
	return (
		<section {...props}>
			<Title3 className={`observe ${styles.title}`}>{title}</Title3>
			<Body1 className="observe">{description}</Body1>
		</section>
	)
}
