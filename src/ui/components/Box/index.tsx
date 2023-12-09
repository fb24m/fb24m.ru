import styles from './index.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export enum Alignment {
	start = 'start',
	center = 'center',
	end = 'end',
	stretch = 'stretch',
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
	align?: Alignment
	gap?: number
	justify?: Alignment
	direction?: 'row' | 'column'
}

const Box = ({ align, justify, gap = 8, direction, children, className, ...props }: BoxProps): ReactNode => {
	return (
		<div {...props} style={{ gap }}
			className={`${className} ${styles.box} ${styles[`direction${direction}`]} ${styles[`justify${justify}`]} ${styles[`align${align}`]}`}>{children}</div>
	)
}

export default Box
