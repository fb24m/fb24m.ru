import styles from './index.module.scss';
import React from 'react';

export const PopupFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
	return (
		<div className={`${styles.popupFooter}`} {...props}>{children}</div>
	);
};