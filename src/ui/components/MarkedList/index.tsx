import type { ReactNode } from 'react'
import styles from './index.module.scss'

export const MarkedList = (props: { children?: ReactNode[] | string }): ReactNode => {
	return (
		<ul className={styles.markedList}>
			{props.children}
		</ul>
	)
}
