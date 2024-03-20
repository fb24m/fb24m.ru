'use client'

import type { ReactNode } from 'react'
import type { ButtonProps } from '../Button'
import Spinner from '../Spinner/Spinner.component'
import clsx from 'clsx'
import { exists } from '@/functions/exists'
import styles from './SubmitButton.module.scss'
import { useFormStatus } from 'react-dom'

import Button from '@/shared/ui/components/Button'

export const SubmitButton = ({ children, ...props }: ButtonProps): ReactNode => {
	console.log(props.appearance)

	const { pending } = useFormStatus()

	return (
		<Button {...props} type="submit" >
			{pending
				? <Spinner size={20} className={clsx(styles[exists(props.appearance)])}></Spinner>
				: children}</Button>
	)
}
