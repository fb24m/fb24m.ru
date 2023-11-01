import styles from './index.module.scss';
import React, { HTMLAttributes } from 'react';

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

export const Box = ({ align, justify, gap = 8, direction, children, className, ...props }: BoxProps): React.ReactElement => {
	return (
		<div {...props} style={{ gap: gap }}
			className={`${className} ${styles.box} ${styles[`direction${direction}`]} ${justify ? styles[`justify${justify}`] : ''} ${justify ? styles[`align${align}`] : ''}`}>{children}</div>
	);
};