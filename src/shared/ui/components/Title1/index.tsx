import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { firaCode } from '@/fonts'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

const Title1 = (props: TextComponentProps): ReactNode => {
	return <h1 {...classList(firaCode.className, styles.title1, props.className)}>{props.children}</h1>
}

export default Title1
