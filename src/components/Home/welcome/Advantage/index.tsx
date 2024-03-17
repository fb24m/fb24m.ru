import { exists } from '@/functions/exists'
import styles from './style.module.scss'
import { Body1 } from '@/shared/ui/components'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('@/shared/ui/components/Icon'))
const Title3 = dynamic(() => import('@/shared/ui/components/Title3'))

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
				<Icon className={styles.icon} name={props.icon} />
				<Title3>{props.title}</Title3>
			</div>
			<Body1>{props.description}</Body1>
		</section>
	)
}
