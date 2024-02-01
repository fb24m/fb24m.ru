import { exists } from '@/functions/exists'
import styles from './index.module.scss'
import type { ReactNode } from 'react'
import { materialIcons } from '@/fonts'

interface IconProps {
	name: string
	className?: string
	size?: 'small' | 'medium' | 'big' | 'large'
}

const Icon = ({ size = 'small', ...props }: IconProps): ReactNode => {
	return (
		<i className={`${styles.icon} ${materialIcons.className} ${exists(styles[size])} ${exists(props.className)}`}>{props.name}</i>
	)
}

export default Icon
