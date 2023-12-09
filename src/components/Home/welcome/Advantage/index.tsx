import { exists } from '@/functions/exists'
import styles from './style.module.scss'
import { Body1 } from '@/ui/components'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('@/ui/components/Icon'))
const Title3 = dynamic(() => import('@/ui/components/Title3'))

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
