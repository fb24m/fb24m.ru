import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import { poiretOne } from '@/fonts'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

const Title3 = ({ children, className, ...props }: TextComponentProps): ReactNode => {
	return <h3 {...classList(poiretOne.className, styles.title3, className)} {...props}>{children}</h3>
}

export default Title3
