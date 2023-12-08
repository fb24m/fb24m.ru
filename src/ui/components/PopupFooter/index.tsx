import { HTMLAttributes } from 'react';
import styles from './index.module.scss';

export const PopupFooter = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.popupFooter}`} {...props}>{children}</div>
	);
};