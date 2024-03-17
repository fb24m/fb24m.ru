import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { firaCode } from '@/fonts'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

const Title2 = (props: TextComponentProps): ReactNode => {
	return <h2 {...classList(firaCode.className, styles.title2, props.className)}>{props.children}</h2>
}

export default Title2
