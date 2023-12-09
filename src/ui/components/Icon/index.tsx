import { exists } from '@/functions/exists'
import styles from './index.module.scss'
import type { ReactNode } from 'react'

interface IconProps {
	name: string
	className?: string
	size?: 'small' | 'medium' | 'big' | 'large'
}

export const Icon = ({ size = 'small', ...props }: IconProps): ReactNode => {
	return (
		<i className={`${styles.icon} ${styles[size]} ${exists(props.className)} material-symbols-outlined`}>{props.name}</i>
	)
}
