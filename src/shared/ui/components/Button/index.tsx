import Link from 'next/link'
import styles from './index.module.scss'
import { exists } from '@/functions/exists'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

const Icon = dynamic(() => import('@/shared/ui/components/Icon'))

export interface ButtonProps {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: ReactNode | string
	icon?: string
	appearance?: 'Primary' | 'Secondary' | 'Link'
	className?: string
}

const Button = ({ as, icon, type, className, href, children, appearance, ...props }: ButtonProps): ReactNode => {
	const defaultProps = {
		...props,
		className: clsx(styles.button, styles[exists(appearance)], exists(className))
	}

	if (as === 'a') {
		return <Link prefetch={false} {...defaultProps} href={exists(href)}>
			{typeof icon !== 'undefined' && <Icon name={exists(icon)} />}
			<span>
				{children}
			</span>
		</Link>
	} else {
		return <button {...defaultProps}>
			{typeof icon !== 'undefined' && <Icon name={exists(icon)} />}
			<span>
				{children}
			</span>
		</button>
	}
}

export default Button
