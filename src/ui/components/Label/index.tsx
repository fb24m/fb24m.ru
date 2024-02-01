import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

const Label = (props: TextComponentProps): ReactNode => (
	<span {...classList(styles.label, props.className)}>{props.children}</span>
)

export default Label
