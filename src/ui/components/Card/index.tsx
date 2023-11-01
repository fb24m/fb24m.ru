import styles from './index.module.scss';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'big'
}

export const Card = ({ className, children, ...props }: CardProps): React.ReactElement => {
	const size = props.size ? props.size : 'normal';

	return (
		<div {...props} className={`${className} ${styles.card} ${styles[`card_${size}`]}`}>
			{children}
		</div>
	);
};