import Link from "next/link";
import "./index.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: JSX.Element | string
	icon?: JSX.Element
	appearance?: 'Primary' | 'Secondary' | 'Link'
	className?: string
};

export const Button = ({ as, icon, className, href, children, appearance, ...props }: ButtonProps): JSX.Element => {
	if (as === 'a') {
		return <Link className={`button button${appearance} ${className}`} href={href!}>
			{icon ? icon : ''}
			{children}
		</Link>
	}
	else {
		return <button {...props} className={`button button${appearance} ${className}`}>
			{icon ? icon : ''}
			{children}
		</button>
	}
};