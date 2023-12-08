import { ReactNode } from 'react';
import styles from './index.module.scss';

export const MarkedList = (props: { children?: ReactNode[] | string }) => {
	return (
		<ul className={styles.markedList}>
			{props.children}
		</ul>
	);
};