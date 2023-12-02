import styles from './index.module.scss';
import React from 'react';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	icon: React.ReactElement
	placeholder: string
	className?: string
	autoComplete?: string
	register?: Function
	name: string
	required?: boolean
}

export const Input = ({ className, icon, placeholder, register, ...props }: InputProps): React.ReactElement => {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			{icon ? icon : ''}
			<input className={styles.input} {...props} placeholder=' ' {...props} />

			<span className={styles.label}>{placeholder}</span>
		</div>
	);
};