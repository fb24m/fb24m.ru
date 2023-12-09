import { exists } from '@/functions/exists'
import styles from './style.module.scss'
import { Title3, Body1, Icon } from '@/ui/components'
import type { ReactNode } from 'react'

interface AdvantageProps {
	icon: string
	title: string
	description: string
	dataDa?: string
	className?: string
}

export const Advantage = (props: AdvantageProps): ReactNode => {
	return (
		<section className={exists(props.className)} data-da={props.dataDa}>
			<div className={styles.header}>
				<Icon className={`observe ${styles.icon}`} name={props.icon} />
				<Title3 className="observe">{props.title}</Title3>
			</div>
			<Body1 className="observe">{props.description}</Body1>
		</section>
	)
}
