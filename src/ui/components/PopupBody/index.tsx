import { HTMLAttributes } from 'react';
import styles from './index.module.scss';

export const PopupBody = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.popupBody}`} {...props}>{children}</div>
	);
};