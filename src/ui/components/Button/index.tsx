import Link from 'next/link'
import './index.scss'
import { exists } from '@/functions/exists'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('@/ui/components/Icon'))

interface ButtonProps {
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
		className: `button button${appearance} ${className}`
	}

	if (as === 'a') {
		return <Link prefetch={false} {...defaultProps} href={exists(href)}>
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

export default Button
