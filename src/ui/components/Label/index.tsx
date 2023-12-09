import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import type { ReactNode } from 'react'

const Label = (props: TextComponentProps): ReactNode => (
	<span className={`${styles.label} ${props.className}`}>{props.children}</span>
)

export default Label
