import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { firaCode } from '@/fonts'
import type { ReactNode } from 'react'

export const Title3 = ({ children, className, ...props }: TextComponentProps): ReactNode => {
	return <h3 className={`${firaCode.className} ${styles.title3} ${className}`} {...props}>{children}</h3>
}
