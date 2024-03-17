import styles from './index.module.scss'
import { exists } from '@/functions/exists'
import dynamic from 'next/dynamic'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { classList } from '@/functions/classList'

const Icon = dynamic(() => import('@/shared/ui/components/Icon'))

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: string
	placeholder: string
	className?: string
	autoComplete?: string
	register?: () => void
	name: string
	required?: boolean
}

const Input = ({ className, icon, placeholder, register, ...props }: InputProps): ReactNode => {
	return (
		<div {...classList(className, styles.wrapper)} className={`${exists(className)} ${styles.wrapper}`}>
			{icon !== '' && typeof icon !== 'undefined' && <Icon name={exists(icon)} />}

			<input id={props.id} className={styles.input} {...props} placeholder=' ' {...props} />

			<label htmlFor={props.id} className={styles.label}>{placeholder}</label>
		</div>
	)
}

export default Input
