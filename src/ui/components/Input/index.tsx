import styles from './index.module.scss'
import { Icon } from '../Icon'
import { exists } from '@/functions/exists'
import type { HTMLAttributes, ReactNode } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	icon: string
	placeholder: string
	className?: string
	autoComplete?: string
	register?: () => void
	name: string
	required?: boolean
}

export const Input = ({ className, icon, placeholder, register, ...props }: InputProps): ReactNode => {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			<Icon name={exists(icon)} />
			<input id={props.name} className={styles.input} {...props} placeholder=' ' {...props} />

			<label htmlFor={props.name} className={styles.label}>{placeholder}</label>
		</div>
	)
}
