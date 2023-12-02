import Link from "next/link";
import "./index.scss";
import { fira_code } from "@/fonts";

interface ButtonProps {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: JSX.Element | string
	icon?: JSX.Element
	appearance?: 'Primary' | 'Secondary' | 'Link'
	className?: string
};

export const Button = ({ as, icon, type, className, href, children, appearance, ...props }: ButtonProps): JSX.Element => {
	const defaultProps = {
		...props,
		className: `button button${appearance} ${className} ${fira_code.className}`,
	}

	if (as === 'a') {
		return <Link {...defaultProps} href={href!}>
			{icon ? icon : ''}
			{children}
		</Link>
	}
	else {
		return <button {...defaultProps}>
			{icon ? icon : ''}
			{children}
		</button>
	}
};