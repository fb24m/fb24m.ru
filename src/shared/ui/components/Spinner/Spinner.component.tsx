import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Spinner.module.scss'
import clsx from 'clsx'

export interface SpinnerProps extends HTMLAttributes<HTMLOrSVGElement> {
	size?: number
}

const Spinner = ({ className, ...props }: SpinnerProps): ReactNode => {
	return (
		<svg {...props} style={{ width: props.size, height: props.size }} className={clsx(styles.spinner, className)} viewBox="0 0 50 50">
			<circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
		</svg>
	)
}

export default Spinner
