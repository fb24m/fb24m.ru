import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { firaCode } from '@/fonts'
import type { ReactNode } from 'react'

export const Title1 = (props: TextComponentProps): ReactNode => {
	return <h1 className={`${firaCode.className} ${styles.title1} ${props.className}`}>{props.children}</h1>
}
