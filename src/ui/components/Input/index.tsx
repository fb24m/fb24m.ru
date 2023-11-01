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

export const Input = ({ className, icon, placeholder, name, register, required = false, ...props }: InputProps): React.ReactElement => {
	return (
		<div className={`${className} ${styles.wrapper}`}>
			{icon ? icon : ''}
			<input
				className={styles.input}
				{...props} placeholder=' '
				{...register ? register(name, { required: required }) : ''} />

			<span className={styles.label}>{placeholder}</span>
		</div>
	);
};