import styles from './index.module.scss';
import React from 'react';

export const PopupBody = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
	return (
		<div className={`${styles.popupBody}`} {...props}>{children}</div>
	);
};