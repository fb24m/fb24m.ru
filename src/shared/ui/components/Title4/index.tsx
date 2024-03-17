import styles from './index.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponentProps'
import type { ReactNode } from 'react'

const Title4 = (props: TextComponentProps): ReactNode => {
	return <h4 className={`${styles.title4} ${props.className}`}>{props.children}</h4>
}

export default Title4
