import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { firaCode } from '@/fonts'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

export const Body2 = ({ className, children, ...props }: TextComponentProps): ReactNode => {
	return (
		<p {...classList(firaCode.className, styles.body2, className)} {...props}>{children}</p>
	)
}
