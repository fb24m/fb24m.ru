import Link from 'next/link'
import './index.scss'
import { firaCode } from '@/fonts'
import { Icon } from '../Icon/index'
import { exists } from '@/functions/exists'
import type { ReactNode } from 'react'

interface ButtonProps {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: ReactNode | string
	icon?: string
	appearance?: 'Primary' | 'Secondary' | 'Link'
	className?: string
}

export const Button = ({ as, icon, type, className, href, children, appearance, ...props }: ButtonProps): ReactNode => {
	const defaultProps = {
		...props,
		className: `button button${appearance} ${className} ${firaCode.className}`
	}

	if (as === 'a') {
		return <Link {...defaultProps} href={exists(href)}>
			<Icon name={exists(icon)} />
			{children}
		</Link>
	} else {
		return <button {...defaultProps}>
			<Icon name={exists(icon)} />
			{children}
		</button>
	}
}
