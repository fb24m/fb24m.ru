import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import type { ReactNode } from 'react'

export const Label = (props: TextComponentProps): ReactNode => (
	<span className={`${styles.label} ${props.className}`}>{props.children}</span>
)
