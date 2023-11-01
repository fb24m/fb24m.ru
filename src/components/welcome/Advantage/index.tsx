import styles from './style.module.scss';
import { Title3, Body1, Icon } from "@/ui/components";

interface AdvantageProps {
	icon: string
	title: string
	description: string
	dataDa?: string
	className?: string
}

export const Advantage = (props: AdvantageProps): JSX.Element => {
	return (
		<div className={props.className + ' ' + styles.card} data-da={props.dataDa}>
			<div className={styles.header}>
				<Icon className={`observe ${styles.icon}`} name={props.icon} />
				<Title3 className={`observe`}>{props.title}</Title3>
			</div>
			<Body1 className='observe'>{props.description}</Body1>
		</div>
	)
}